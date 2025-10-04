
# Minimal container to run Playwright tests
FROM mcr.microsoft.com/playwright:v1.47.2-jammy

WORKDIR /app
COPY package.json package-lock.json* .npmrc* ./
RUN npm ci
COPY . .

# Default command runs tests
CMD ["npx", "playwright", "test"]
