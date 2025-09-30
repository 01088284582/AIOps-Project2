# Stage 1: 의존성 설치 (Install Dependencies)
# 빌드에 필요한 모든 의존성을 설치합니다.
FROM node:18-alpine AS deps
WORKDIR /app

# npm ci를 사용하기 위해 package-lock.json도 복사합니다.
COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: 소스코드 빌드 (Build Source Code)
# 위에서 설치한 의존성을 기반으로 Next.js 앱을 빌드합니다.
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js 앱을 프로덕션 모드로 빌드합니다.
RUN npm run build

# Stage 3: 프로덕션 이미지 생성 및 실행 (Create Production Image and Run)
# 최종적으로 서비스될 가장 가벼운 이미지를 만듭니다.
FROM node:18-alpine AS runner
WORKDIR /app

# 프로덕션 환경임을 명시합니다.
ENV NODE_ENV=production

# 'standalone' 빌드 결과물만 복사하여 이미지 크기를 최소화합니다.
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Next.js는 기본적으로 3000번 포트를 사용합니다.
EXPOSE 3000

# Next.js 서버를 실행합니다.
CMD ["node", "server.js"]
