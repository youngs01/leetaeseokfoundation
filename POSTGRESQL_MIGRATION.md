# PostgreSQL 마이그레이션 가이드 - 미확인 문의 기능 추가

## 개요
기존 inquiries 테이블에 문의 확인 여부를 추적하는 `is_read` 컬럼을 추가합니다.

## 마이그레이션 단계

### 1. 기존 테이블 구조 확인
```bash
psql -U postgres -d leetaeseok_foundation -c "\d inquiries"
```

### 2. 새로운 컬럼 추가
```bash
psql -U postgres -d leetaeseok_foundation -c "ALTER TABLE inquiries ADD COLUMN is_read boolean DEFAULT false;"
```

### 3. 마이그레이션 확인
```bash
psql -U postgres -d leetaeseok_foundation -c "\d inquiries"
```

컬럼이 다음과 같이 추가되었는지 확인하세요:
```
is_read | boolean | default false
```

### 4. Node.js 패키지 설치 및 실행
프로젝트 디렉토리에서:
```bash
npm install
npm run dev
```

## 기능 설명

### 관리자 페이지 기능
1. **미확인 문의 필터**: 미확인 문의만 별도로 표시 (빨간색 탭)
2. **읽음 상태 토글**: 각 문의 옆의 아이콘 클릭으로 확인/미확인 상태 변경
   - ✓ (초록색): 확인된 문의
   - ⚠ (빨간색): 미확인 문의
3. **대시보드 통계**: 미확인 문의 개수가 빨간색으로 강조 표시

### 데이터베이스
- `is_read`: boolean 타입 (기본값: false)
  - true: 문의가 확인됨
  - false: 문의가 아직 확인되지 않음

## API 엔드포인트

### GET /api/inquiries
모든 문의 조회 (admin_auth 쿠키 필수)
```json
{
  "id": "string",
  "isRead": boolean,
  ...
}
```

### PATCH /api/inquiries/:id
문의 확인 상태 변경
```bash
curl -X PATCH http://localhost:3000/api/inquiries/123456 \
  -H "Content-Type: application/json" \
  -d '{"isRead": true}'
```

## 트러블슈팅

### "column "is_read" does not exist" 에러
완료되지 않은 마이그레이션입니다. 위의 마이그레이션 단계를 다시 실행하세요.

### 기존 데이터 모두 미확인 상태로 표시
마이그레이션 후 모든 기존 문의는 `is_read = false`로 설정됩니다. 필요시 다음 SQL로 변경 가능:
```bash
psql -U postgres -d leetaeseok_foundation -c "UPDATE inquiries SET is_read = true WHERE created_at < now() - interval '7 days';"
```
