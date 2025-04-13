const { I } = inject();
const fs = require('fs');

class scrutinyPage {
  diskDevice = "//a[contains(@href, '/web/device/') and contains(text(), '/dev/')]";
  diskTempreture = "//div[text()='Temperature']/following-sibling::div[contains(text(), '°C')]";
  diskSize = "//div[text()='Capacity']/following::div[contains(text(), 'TiB')]";
  diskPoweredOn = "//div[text()='Powered On']/following-sibling::div[contains(text(), 'days')]";
  diskStatus = "//div[text()='Status']/following-sibling::div";

  async getDiskHealthInfo() {
    I.waitForElement(this.diskDevice, 5);
    let deviceNameValue = await I.grabTextFromAll(this.diskDevice);
    let deviceTempretureValue = await I.grabTextFromAll(this.diskTempreture);
    let deviceSizeValue = await I.grabTextFromAll(this.diskSize);
    let devicePoweredOnValue = await I.grabTextFromAll(this.diskPoweredOn);
    let deviceStatus = await I.grabTextFromAll(this.diskStatus);

    const result = [];

    for (let i = 0; i < deviceNameValue.length; i++) {
      result.push(`${deviceNameValue[i]}, Temperature: ${deviceTempretureValue[i]}, Capacity: ${deviceSizeValue[i]}, Powered on: ${devicePoweredOnValue[i]}, Status: ${deviceStatus[i]}`);
    }

    console.log(result);

    const content = result.join('\n') + '\n';
    fs.writeFileSync('output/diskHealthResult.txt', content, 'utf8');
  }

}

export = new scrutinyPage();
