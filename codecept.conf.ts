import {
  setHeadlessWhen,
  setCommonPlugins
} from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './tests/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://192.168.1.231:32769',
      show: true,
      timeout: 20000,
      waitForTimeout: 20000,
      windowSize: '1280x720',
      waitForNavigation: 'load'
    },
    REST: {
      endpoint: 'http://192.168.1.231:8097',
      defaultHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  },
  mocha: {
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'output',
      reportFilename: 'mochawesome-report',
      reportTitle: 'CodeceptJS Test Report',
      inlineAssets: true,
      quiet: false, // Ensure logs are captured
      consoleReporter: 'none' // Try removing or setting to 'spec' for more logs
    }
  },
  include: {
    I: './steps_file',
    casaosPage: "./pages/casaos.ts",
    jellyfinPage: "./pages/jellyfin.ts",

    qbittorrentPage: "./pages/qbittorrent.ts",
  },
  name: 'autoN100'
}