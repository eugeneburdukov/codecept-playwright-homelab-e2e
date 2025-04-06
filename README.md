# CodeceptJS + Playwright E2E Tests

This project uses [CodeceptJS](https://codecept.io/) with [Playwright](https://playwright.dev/) for end-to-end testing.

## 📦 Prerequisites

- Node.js (v16+ recommended)
- npm

## 🚀 Installation

```bash
npm install

## 🚀 Usage
npx codeceptjs run
npx codeceptjs run --steps
HEADLESS=true npx codeceptjs run --steps
npx codeceptjs run --grep @jellyfin_api_count_movies

npx codeceptjs run def
npx codeceptjs run --reporter mochawesome

## 🚀 Git
git checkout -b exampleBranch      
git add .   
git status        
git commit -m "added features"
git push origin exampleBranch    