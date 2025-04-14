# 🤖 CodeceptJS + Playwright E2E Tests of a HomeLab

This project uses [CodeceptJS](https://codecept.io/) with [Playwright](https://playwright.dev/) for automated end-to-end testing of a local HomeLab on Ubuntu, running [CasaOS](https://www.casaos.io/) as the container management interface. [Jellyfin](https://jellyfin.org/), [qBittorrent](https://www.qbittorrent.org/), and [Scrutiny](https://github.com/AnalogJ/scrutiny) run as Docker containers orchestrated via CasaOS. A sample [Jenkins](https://www.jenkins.io/) pipeline configuration is also included for continuous test execution and artifact reporting.

---

## 🧪 Tested Scenarios

### 🔍 UI Scenarios

- ✅ Get downloading list in **qBittorrent**
- ✅ Get disk health report using **Scrutiny**
- ✅ Get CPU and RAM usage in **CasaOS**
- ✅ Get temperature info in **CasaOS**
- ✅ Get storage info in **CasaOS**
- ✅ Refresh movie library in **Jellyfin**
- ✅ Refresh series library in **Jellyfin**

### 🔌 API Scenarios

- ✅ Get list of libraries from **Jellyfin**
- ✅ Get count of movies from **Jellyfin**

---

## 📦 Prerequisites

- Node.js (v16+ recommended)
- npm

---

## 🚀 Installation

```bash
npm install
```

## 🚀 Usage
```bash
# Run all tests
npx codeceptjs run

# Run all tests with steps output
npx codeceptjs run --steps

# Run all tests in headless mode with steps
HEADLESS=true npx codeceptjs run --steps

# Run tests with a specific tag
npx codeceptjs run --grep @getTemperature

# Rebuild type definitions
npx codeceptjs run def

# Run tests and generate a mochawesome report
npx codeceptjs run --reporter mochawesome
```

## 🚀 Git
```bash

# List all the remote repositories associated with your local Git repository
git remote -v

# Update the URL of the remote repository named origin
git remote set-url origin https://github.com/eugeneburdukov/codeceptjs-playwright-homelab.git

# Create a new branch
git checkout -b exampleBranch      

# Stage changes
git add .   

# Check status
git status        

# Commit changes
git commit -m "added features"

# Push to remote
git push origin exampleBranch    
```
