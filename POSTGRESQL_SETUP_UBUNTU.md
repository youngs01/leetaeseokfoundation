# PostgreSQL 설치 및 설정 가이드 (Ubuntu)

## 1. PostgreSQL 설치

```bash
# 패키지 목록 업데이트
sudo apt-get update

# PostgreSQL 및 필수 패키지 설치
sudo apt-get install -y postgresql postgresql-contrib

# 설치 확인
psql --version
```

## 2. PostgreSQL 서비스 시작

```bash
# PostgreSQL 서비스 시작
sudo systemctl start postgresql

# 부팅 시 자동 시작 설정 (선택사항)
sudo systemctl enable postgresql

# 서비스 상태 확인
sudo systemctl status postgresql
```

## 3. 데이터베이스 및 테이블 생성

```bash
# postgres 사용자로 접속
sudo -u postgres psql

# 또는 직접 명령어 실행
sudo -u postgres psql << EOF

# 데이터베이스 생성
CREATE DATABASE leetaeseok_foundation;

# postgres 사용자 비밀번호 설정 (선택사항이지만 권장)
ALTER USER postgres WITH PASSWORD 'postgres';

# 데이터베이스 선택
\c leetaeseok_foundation

# 문의 테이블 생성
CREATE TABLE inquiries (
  id VARCHAR(50) PRIMARY KEY,
  type VARCHAR(20) NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100),
  phone VARCHAR(20),
  organization VARCHAR(100),
  preferred_date TIMESTAMP,
  attendees VARCHAR(100),
  location VARCHAR(100),
  contact_method VARCHAR(50),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

# 후원 테이블 생성
CREATE TABLE donations (
  id VARCHAR(50) PRIMARY KEY,
  amount INTEGER NOT NULL,
  name VARCHAR(100),
  email VARCHAR(100),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

# 테이블 확인
\dt

# 나가기
\q

EOF
```

## 4. 수동으로 접속해서 생성하기

만약 위의 자동화 스크립트가 작동하지 않으면 수동으로 진행합니다:

```bash
# PostgreSQL 접속
sudo -u postgres psql

# 아래 명령어들을 하나씩 실행

# 데이터베이스 생성
CREATE DATABASE leetaeseok_foundation;

# 사용자 암호 설정 (기존 postgres 사용자)
ALTER USER postgres WITH PASSWORD 'postgres';

# 데이터베이스 선택
\c leetaeseok_foundation

# 문의 테이블 생성
CREATE TABLE inquiries (
  id VARCHAR(50) PRIMARY KEY,
  type VARCHAR(20) NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100),
  phone VARCHAR(20),
  organization VARCHAR(100),
  preferred_date TIMESTAMP,
  attendees VARCHAR(100),
  location VARCHAR(100),
  contact_method VARCHAR(50),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

# 후원 테이블 생성
CREATE TABLE donations (
  id VARCHAR(50) PRIMARY KEY,
  amount INTEGER NOT NULL,
  name VARCHAR(100),
  email VARCHAR(100),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

# 테이블 확인
\dt

# 나가기
\q
```

## 5. Node.js 프로젝트에 필요한 패키지 설치

프로젝트 폴더에서:

```bash
npm install pg
npm install --save-dev @types/pg
```

## 6. .env.local 파일 확인

프로젝트 루트의 `.env.local` 파일에 다음 내용이 있는지 확인:

```env
# 관리자 계정 설정
ADMIN_ID=admin
ADMIN_PASSWORD=12345

# PostgreSQL 데이터베이스 연결 설정
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/leetaeseok_foundation
```

## 7. 연결 테스트

프로젝트를 시작하기 전에 연결 테스트:

```bash
# psql로 직접 접속 테스트
psql "postgresql://postgres:postgres@localhost:5432/leetaeseok_foundation"

# 접속 성공하면
\dt

# 테이블이 보이면 설정 완료
# 나가기
\q
```

## 8. 개발 서버 시작

```bash
npm run dev
```

---

## 🔍 **일반적인 문제 해결**

### PostgreSQL 재시작
```bash
sudo systemctl restart postgresql
```

### PostgreSQL 로그 확인
```bash
sudo tail -f /var/log/postgresql/postgresql-*.log
```

### 암호를 잊었을 경우
```bash
sudo -u postgres psql
ALTER USER postgres WITH PASSWORD 'postgres';
\q
```

### 포트 확인 (기본값: 5432)
```bash
sudo netstat -tlnp | grep postgres
```

---

## ✅ **설정 완료 확인 사항**

- [ ] PostgreSQL 설치됨
- [ ] 서비스 실행 중 (`sudo systemctl status postgresql`)
- [ ] 데이터베이스 `leetaeseok_foundation` 생성됨
- [ ] 테이블 `inquiries`, `donations` 생성됨
- [ ] npm 패키지 설치됨 (`pg`, `@types/pg`)
- [ ] `.env.local` 파일 설정됨
- [ ] `npm run dev` 실행 가능

모든 체크가 완료되면 준비 완료입니다! 🎉
