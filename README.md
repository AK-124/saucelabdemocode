
# Playwright TypeScript Framework Starter

A production-style Playwright (TS) framework using publically available demo website: https://www.saucedemo.com to showcase basic architecture using POM, custom fixtures, tagging, env config for (Chromium/Firefox/WebKit).

## ✨ Highlights
- TypeScript + Playwright projects (desktop + mobile emulation).
- Page Object Model (`src/pages`), custom fixtures (`src/fixtures`).
- Tags: `@smoke`, `@regression`. Parallel/shard-friendly.
- HTML report, traces & videos on failures.


## 🧱 Project Structure
```
src/
  pages/        # Page Objects
  fixtures/     # Custom test fixtures
  utils/        # Helpers & env
  data/         # Test data
tests/
  smoke/        # Quick checks
  regression/   # Deeper suites
.github/workflows/ci.yml
```

## 🚀 Getting Started

```bash
npm ci # to install clean dependencies which are listed in package.json
npx playwright test # to run tests 
npx playwright show-report # to see test report in browser 

OR

# Run everything
npm test

# Only smoke
npm run test:smoke

# UI mode
npm run test:ui

# View report
npm run report
```

### Environment
Set in `.env` (or CI secrets):
- `BASE_URL` – app under test (default `https://www.saucedemo.com`)
- `USER_EMAIL`, `USER_PASS` – test credentials

## 🧪 Design Notes
- **Fixtures over helpers:** shared login/session via fixture keeps tests lean.
- **Explicit waits:** POs encapsulate stable selectors & waits.
- **Deterministic visuals:** videos/traces on failure; retries only on CI.
- **Tag strategy:** `@smoke` runs on each push, full matrix on PRs.
-**testing the changes
