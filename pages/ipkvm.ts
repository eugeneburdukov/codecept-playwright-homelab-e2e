const { I } = inject();
import assert from 'assert';

class ipkvmPage {
  usernameField = "//input[@id='username']";
  passwordField = "//input[@id='password']";
  loginButton = "//button[@type='submit']";
  settingsButton = "//span[@class='ant-badge ant-badge-status css-1jr6e2p']";
  tailscaleButton = "//span[text() ='Tailscale']";
  tailscaleStatusSwitch = "//span[contains(@class, 'ant-switch-inner-checked')]";
  tailscaleStatusButton = "//button[@type='button' and @role = 'switch']";
  tailscaleip = "//div[span[1][text()='Device IP']]/span[2]";
  tailscaleDeviceName = "//div[span[1][text()='Device Name']]/span[2]";

  login(username, password) {
    I.fillField(this.usernameField, username);
    I.fillField(this.passwordField, password);
    I.click(this.loginButton);
  }

  async tailscaleStatus() {
    I.waitForVisible(this.settingsButton, 5)
    I.click(this.settingsButton);

    I.waitForVisible(this.tailscaleButton, 5)
    I.click(this.tailscaleButton);
    I.wait(5);
    const isOn = await I.grabAttributeFrom(this.tailscaleStatusButton, 'class');
    const ip = await I.grabTextFrom(this.tailscaleip);
    const deviceName = await I.grabTextFrom(this.tailscaleip);
    console.log(`[DEBUG] Switch class = ${isOn}`);
    console.log(`Tailscale IP = ${ip}, Tailscale Device name = ${deviceName}`);
    I.saveScreenshot("tailscaleStatus.png", true);

    // assert.ok(isOn.includes('ant-switch-checked'), 'Tailscale is ON');

    if (isOn.includes('ant-switch-checked')) {
      console.log('✅ Tailscale is ON');
    } else {
      console.log('❌ Tailscale is OFF');
    }
    
  }

}

// For inheritance
export = new ipkvmPage();
