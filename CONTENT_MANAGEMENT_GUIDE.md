# 콘텐츠 관리 시스템 - 마이그레이션 가이드

## 1. 데이터베이스 마이그레이션 실행

### macOS/Linux:
```bash
# PostgreSQL 클라이언트 설치 (필요시)
# Mac: brew install postgresql
# Ubuntu: sudo apt-get install postgresql-client

# 마이그레이션 실행
psql "postgresql://postgres:postgres@localhost:5432/leetaeseok_foundation" < migrations/001_create_content_tables.sql
```

### 확인
```bash
psql "postgresql://postgres:postgres@localhost:5432/leetaeseok_foundation"
# 다음 명령으로 테이블 확인:
\dt
# 다음 테이블들이 생성되었는지 확인:
# - foundation_news
# - lecture_news
# - press_news
# - videos
# - galleries
# - gallery_images
# - books_movies
# - thank_you_letters
\q
```

## 2. 기존 로컬 데이터 마이그레이션 (선택사항)

`lib/data/` 폴더의 TypeScript 파일들에서 기존 데이터를 DB로 옮기려면:

```bash
# Node.js 스크립트로 마이그레이션 (나중에 구현 가능)
npm run migrate:seed
```

## 3. API 엔드포인트

### 기본 구조
- **GET** `/api/admin/content/[type]` - 모든 콘텐츠 조회
- **GET** `/api/admin/content/[type]/[id]` - 특정 콘텐츠 조회
- **POST** `/api/admin/content/[type]` - 새 콘텐츠 생성
- **PATCH** `/api/admin/content/[type]/[id]` - 콘텐츠 수정
- **DELETE** `/api/admin/content/[type]/[id]` - 콘텐츠 삭제

### 지원하는 타입 (type)
- `foundation` - 재단 소식
- `lecture` - 강연 소식
- `press` - 언론 보도
- `video` - 영상
- `gallery` - 갤러리
- `book` - 도서
- `movie` - 영화
- `letter` - 후원 감사 편지

### 예제

#### 재단 소식 생성
```bash
curl -X POST http://localhost:3000/api/admin/content/foundation \
  -H "Content-Type: application/json" \
  -H "Cookie: admin_auth=your_auth_token" \
  -d '{
    "id": "news_001",
    "title": "새로운 소식",
    "summary": "요약",
    "content": "<p>본문</p>",
    "image": "https://example.com/image.jpg",
    "date": "2026-02-20",
    "featured": false
  }'
```

#### 강연 소식 조회
```bash
curl http://localhost:3000/api/admin/content/lecture
```

#### 특정 강연 수정
```bash
curl -X PATCH http://localhost:3000/api/admin/content/lecture/lecture_001 \
  -H "Content-Type: application/json" \
  -H "Cookie: admin_auth=your_auth_token" \
  -d '{
    "title": "수정된 제목",
    "location": "서울"
  }'
```

## 4. 관리자 대시보드

- 접속: `/admin`
- 로그인: `/admin/login` (ADMIN_ID/ADMIN_PASSWORD 사용)
- 콘텐츠 관리: `/admin/pages` → "콘텐츠 관리" 탭 추가 예정

모든 CRUD 작업에 대해 `admin_auth` 쿠키를 요구합니다 (권한 검증).
