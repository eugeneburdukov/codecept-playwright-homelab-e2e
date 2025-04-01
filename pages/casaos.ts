const { I } = inject();
const addContext = require('mochawesome/addContext'); 

class casaosPage {
  usernameField = '//input[@type="text"]';
  passwordField = '//input[@type="password"]';
  loginButton = 'button.button.is-primary span';
  storageWidgetSettings = "//div[@class='widget has-text-white disk is-relative']//div[@class='widget-icon-button is-flex-shrink-0']";
  storageText = "//p[@class='has-text-left has-text-full-04 mt-1']";
  jellyfinContainer = '//div[@id=\'app-jellyfin\']';

  login(username, password) {
    I.fillField(this.usernameField, username);
    I.fillField(this.passwordField, password);
    I.click(this.loginButton);
  }

  async getStorageInfo() {
    I.click(this.storageWidgetSettings);
    I.waitForElement(this.storageText, 5);
    let values = await I.grabTextFromAll(this.storageText);
    console.log(values);
  }

  goToJellyfinContainer() {
    I.waitForElement(this.jellyfinContainer, 10);
    I.click(this.jellyfinContainer);
    I.switchToNextTab();
    //I.waitForElement('//input[@id="txtManualName"]', 5);
    I.seeInTitle('Jellyfin');
  }
}

// For inheritance
export = new casaosPage();
