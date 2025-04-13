const { I } = inject();
const addContext = require('mochawesome/addContext');
const fs = require('fs');

class casaosPage {
  usernameField = '//input[@type="text"]';
  passwordField = '//input[@type="password"]';
  loginButton = 'button.button.is-primary span';
  storageWidgetSettings = "//div[@class='widget has-text-white disk is-relative']//div[@class='widget-icon-button is-flex-shrink-0']";
  storageText = "//p[@class='has-text-left has-text-full-04 mt-1']";
  jellyfinContainer = '//div[@id=\'app-jellyfin\']';
  qbittorentContainer = '//div[@id=\'app-qbittorrent\']';
  scrutinyContainer = '//div[@id=\'app-big-bear-scrutiny\']';
  tempreture = "//div[contains(@class, 'widget') and contains(@class, 'cpu')]//div[contains(@class, 'bar-content') and contains(@class, 'is-clickable')]";
  cpuAndRam = "//div[@class='per']";

  login(username, password) {
    I.fillField(this.usernameField, username);
    I.fillField(this.passwordField, password);
    I.click(this.loginButton);
  }

  async getPcInfo() {
    I.waitForElement(this.cpuAndRam, 50);
    let values = await I.grabTextFromAll(this.cpuAndRam);
    let cpu = `CPU: ${values[0]}%`;
    let ram = `RAM: ${values[1]}%`;
    console.log(cpu + ", " + ram);
    const content = cpu + ", " + ram;
    fs.writeFileSync('output/casaosResult.txt', content, 'utf8');
  }

  async getTemperature() {
    I.waitForElement(this.tempreture, 50);
    let values = await I.grabTextFrom(this.tempreture);
    console.log(`Temperature is ${values}`);
    const content = `\nCPU Temperature: ${values}\n`;
    fs.appendFileSync('output/casaosResult.txt', content, 'utf8');
  }

  async getStorageInfo() {
    I.click(this.storageWidgetSettings);
    I.waitForElement(this.storageText, 5);
    let values = await I.grabTextFromAll(this.storageText);
    console.log(`Storage:\n${values.join('\n')}\n`);
    const content = `\nStorage:\n${values.join('\n')}\n`;
    fs.appendFileSync('output/casaosResult.txt', content, 'utf8');
  }

  goToJellyfinContainer() {
    I.waitForElement(this.jellyfinContainer, 10);
    I.click(this.jellyfinContainer);
    I.switchToNextTab();
    I.waitForElement('//input[@id="txtManualName"]', 5);
    I.seeInTitle('Jellyfin');
  }

  goToQbittorrentContainer() {
    I.waitForElement(this.qbittorentContainer, 10);
    I.click(this.qbittorentContainer);
    I.switchToNextTab();
    I.seeInTitle('VueTorrent');
  }

  goToScrutinyContainer() {
    I.waitForElement(this.scrutinyContainer, 10);
    I.click(this.scrutinyContainer);
    I.switchToNextTab();
    I.seeInTitle('scrutiny');
  }
  
}

// For inheritance
export = new casaosPage();
