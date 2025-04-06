# CodeceptJS + Playwright E2E Tests

This project uses [CodeceptJS](https://codecept.io/) with [Playwright](https://playwright.dev/) for end-to-end testing.

## 📦 Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

## 🚀 Installation

```bash
npm install
# or
yarn install


## 🚀 Usage
npx codeceptjs run --steps 
npx codeceptjs run def
npx codeceptjs run --grep @jellyfin_api_count_movies
npm install codeceptjs-mochawesome --save-dev
npx codeceptjs run --reporter mochawesome
npx codeceptjs run --reporter mochawesome | tee output/test-log.txt
HEADLESS=true npx codeceptjs run