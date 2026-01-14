This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 무료 배포 방법

이 Next.js 프로젝트를 무료로 배포하는 여러 방법이 있습니다.

### 1. Vercel (가장 추천 ⭐)

Vercel은 Next.js를 만든 회사에서 제공하는 플랫폼으로, Next.js 프로젝트에 최적화되어 있습니다.

**장점:**
- 완전 무료 (개인 프로젝트)
- 자동 HTTPS
- 자동 배포 (GitHub 연동 시)
- 글로벌 CDN
- 커스텀 도메인 지원

**배포 방법:**

#### 방법 A: Vercel 웹사이트에서 배포
1. [Vercel](https://vercel.com)에 가입 (GitHub 계정으로 간편 가입 가능)
2. "Add New Project" 클릭
3. GitHub 저장소를 선택하거나 코드를 직접 업로드
4. 프로젝트 설정 확인 (자동으로 Next.js 감지)
5. "Deploy" 클릭
6. 배포 완료 후 제공되는 URL로 접속

#### 방법 B: Vercel CLI로 배포
```bash
# Vercel CLI 설치
npm i -g vercel

# 프로젝트 디렉토리에서 실행
vercel

# 처음 배포 시 로그인 및 설정
# 이후 배포는 간단히 'vercel' 명령어만 실행
```

### 2. Netlify

Netlify도 Next.js를 잘 지원하는 인기 있는 플랫폼입니다.

**배포 방법:**
1. [Netlify](https://www.netlify.com)에 가입
2. "Add new site" → "Import an existing project"
3. GitHub 저장소 연결
4. 빌드 설정:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. "Deploy site" 클릭

**참고:** Next.js 13+ App Router의 경우 `netlify.toml` 파일이 필요할 수 있습니다.

### 3. Railway

Railway는 간단한 설정으로 배포할 수 있는 플랫폼입니다.

**배포 방법:**
1. [Railway](https://railway.app)에 가입
2. "New Project" → "Deploy from GitHub repo"
3. 저장소 선택
4. 자동으로 빌드 및 배포 시작
5. 제공되는 URL로 접속

### 4. Render

Render도 무료 티어를 제공하는 좋은 옵션입니다.

**배포 방법:**
1. [Render](https://render.com)에 가입
2. "New" → "Web Service"
3. GitHub 저장소 연결
4. 설정:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
5. "Create Web Service" 클릭

### 배포 전 체크리스트

배포하기 전에 다음 사항을 확인하세요:

- [ ] `.gitignore`에 `node_modules`, `.next` 등이 포함되어 있는지 확인
- [ ] 환경 변수가 필요한 경우 `.env.example` 파일 생성
- [ ] 이미지 파일들이 `public` 폴더에 있는지 확인
- [ ] `package.json`의 빌드 스크립트가 올바른지 확인

### 환경 변수 설정

배포 플랫폼에서 환경 변수가 필요한 경우:
- Vercel: 프로젝트 설정 → Environment Variables
- Netlify: Site settings → Environment variables
- Railway: 프로젝트 → Variables
- Render: Environment → Environment Variables

### 커스텀 도메인 연결

대부분의 플랫폼에서 무료로 커스텀 도메인을 연결할 수 있습니다:
- Vercel: 프로젝트 설정 → Domains
- Netlify: Site settings → Domain management
- Railway: 프로젝트 → Settings → Domains
- Render: Settings → Custom Domains

---

**추천:** Next.js 프로젝트이므로 **Vercel**을 가장 추천합니다. 가장 빠르고 간단하며, Next.js의 모든 기능을 완벽하게 지원합니다.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
