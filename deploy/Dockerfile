# Сборка из РАСПАКОВАННОГО архива: docker build -t docgen .
FROM node:22-slim
WORKDIR /app
COPY . .
ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0 \
    DATABASE_URL=file:/app/data/docgen.db
RUN mkdir -p data && [ -f data/docgen.db ] || cp db/docgen.db data/docgen.db
EXPOSE 3000
CMD ["node", "server.js"]
