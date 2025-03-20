const { I } = inject();

class casaosPage {
  userNameField = '//input[@type="text"]';
  passwordField = '//input[@type="password"]';
  loginButton = 'button.button.is-primary span';

login(username, password) {
I.fillField(this.userNameField, username);
I.fillField(this.passwordField, password);
I.click(this.loginButton);
}

}

// For inheritance
export = new casaosPage();
