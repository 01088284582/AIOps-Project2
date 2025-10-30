# Dockerfile (환경변수 주입 기능 추가)

# Stage 1: 의존성 설치
FROM node:20-alpine AS deps
WORKDIR /app

# [npm 버전 업데이트]
RUN npm install -g npm@10.9.3

COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: 소스코드 빌드
FROM node:20-alpine AS builder
WORKDIR /app

# [npm 버전 업데이트]
RUN npm install -g npm@10.9.3

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# [추가] Cloud Build로부터 빌드 시점 환경변수를 받기 위한 설정
ARG NEXT_PUBLIC_GOOGLE_REDIRECT_URI
ARG NEXT_PUBLIC_FRONTEND_URL
ARG NEXT_PUBLIC_BACKEND_URL
ENV NEXT_PUBLIC_GOOGLE_REDIRECT_URI=$NEXT_PUBLIC_GOOGLE_REDIRECT_URI
ENV NEXT_PUBLIC_FRONTEND_URL=$NEXT_PUBLIC_FRONTEND_URL
ENV NEXT_PUBLIC_BACKEND_URL=$NEXT_PUBLIC_BACKEND_URL

# 'npm run build'는 위에서 설정된 ENV 변수들을 사용하여 코드를 빌드합니다.
RUN npm run build

# Stage 3: 프로덕션 이미지 생성 및 실행
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
