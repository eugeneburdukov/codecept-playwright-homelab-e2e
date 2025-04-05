const { I } = inject();
const fs = require('fs');

class qbittorrentPage {
  userNameField = "//input[@id='username']";
  passwordField = "//input[@id='password']";
  loginButton = "//button[@class='v-btn v-btn--block v-btn--elevated v-btn--slim v-theme--light-legacy bg-accent v-btn--density-default v-btn--size-default v-btn--variant-elevated']";
  qElements = "//div[@class='v-card-title text-wrap pt-1 pb-0 px-2 text-truncate']";
  qElementz = "//div[@class='v-card-title text-wrap pt-1 pb-0 px-2 text-truncate']";

  login(username, password) {
    I.fillField(this.userNameField, username);
    I.fillField(this.passwordField, password);
    I.click(this.loginButton);
  }

  async getQElements() {
    I.waitForElement(this.qElements, 5);
    let values = await I.grabTextFromAll(this.qElements);
    console.log(`Files in qbittorrent: \n${values.join('\n')}`);
    const content = `Files in qbittorrent: \n${values.join('\n')}\n`;
    fs.writeFileSync('output/result.txt', content, 'utf8');
  }


}

export = new qbittorrentPage();
