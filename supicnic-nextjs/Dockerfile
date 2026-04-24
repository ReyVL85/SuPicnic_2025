FROM node:20-alpine AS builder
WORKDIR /app
COPY supicnic-nextjs/package.json supicnic-nextjs/package-lock.json ./
RUN npm ci --legacy-peer-deps
COPY supicnic-nextjs/ .
# Imágenes de la web antigua
COPY supicnic-website/images/ ./public/images/
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]
