const { I } = inject();
const fs = require('fs');

class qbittorrentPage {
  userNameField = "//input[@id='username']";
  passwordField = "//input[@id='password']";
  loginButton = "//button[@class='v-btn v-btn--block v-btn--elevated v-btn--slim v-theme--light-legacy bg-accent v-btn--density-default v-btn--size-default v-btn--variant-elevated']";
  qElements = "//div[@class='v-card-title text-wrap pt-1 pb-0 px-2 text-truncate']";
  qProgress = "//div[@class='v-progress-linear v-progress-linear--active v-progress-linear--rounded rounded-sm v-theme--light-legacy v-locale--is-ltr']";
  qState = "//span[contains(@class, 'v-chip') and contains(@class, 'bg-torrent-')]//div[@class='v-chip__content']";

  login(username, password) {
    I.fillField(this.userNameField, username);
    I.fillField(this.passwordField, password);
    I.click(this.loginButton);
  }

  async getQElements() {
    const count = await I.grabNumberOfVisibleElements(this.qElements);

    if (count === 0) {
      console.log('No Downloads at this moment, skipping test...');
      fs.writeFileSync('output/qbittorrentResult.txt', 'No Downloads at this moment\n', 'utf8');
      return;
    }

    I.waitForElement(this.qElements, 5);
    
    const fileNames = await I.grabTextFromAll(this.qElements);
    const progressValues = await I.grabAttributeFromAll(this.qProgress, 'aria-valuenow');
    const stateValues = await I.grabTextFromAll(this.qState);
  
    const result = [];
    result.push("File Name - Progress - State");
  
    for (let i = 0; i < fileNames.length; i++) {
      result.push(`${fileNames[i]} - ${progressValues[i]}% - ${stateValues[i]}`);
    }
  
    console.log(result.join('\n'));
  
    const content = result.join('\n') + '\n';
    fs.writeFileSync('output/qbittorrentResult.txt', content, 'utf8');
  }  


}

export = new qbittorrentPage();
