const { I } = inject();

class jellyfinPage {
  userNameField = '//input[@id="txtManualName"]';
  passwordField = '//input[@id="txtManualPassword"]';
  loginButton = '//button[@type="submit"]';

login(username, password) {
I.fillField(this.userNameField, username);
I.fillField(this.passwordField, password);
I.click(this.loginButton);
}

}

// For inheritance
export = new jellyfinPage();
