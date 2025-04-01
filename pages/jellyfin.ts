const { I } = inject();

class jellyfinPage {
  userNameField = '//input[@id="txtManualName"]';
  passwordField = '//input[@id="txtManualPassword"]';
  loginButton = '//button[@type="submit"]';
  hamburgerMenu = "//span[@class='material-icons menu']";
  dashboardSection = "//span[@class='navMenuOptionText' and text()='Dashboard']";
  librariesSection = "//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-hlxkyz' and text() = 'Libraries']";
  librariesSectionDescendent = "//span[text()='Libraries']/following::span[text()='Libraries' and not(ancestor::*[@style='display: none'])][1]";
  moviesLibrarySection = "//div[@data-id='f137a2dd21bbc1b99aa5c0f6bf02a805']//div[@style='text-align:right; float:right;padding-top:5px;']";
  moviesLibraryScan = "//div[@class='listItemBodyText actionSheetItemText' and text() = 'Scan library']";
  refreshButton = "//button[@class='raised btnSubmit block formDialogFooterItem button-submit emby-button']";

  login(username, password) {
    I.fillField(this.userNameField, username);
    I.fillField(this.passwordField, password);
    I.click(this.loginButton);
  }

  goToDashboard() {
    I.click(this.hamburgerMenu);
    I.click(this.dashboardSection);
  }

  refreshMoviesLibrary() {
    I.click(this.librariesSection);
    I.click(this.librariesSectionDescendent);
    I.click(this.moviesLibrarySection);
    I.click(this.moviesLibraryScan);
    I.click(this.refreshButton);
  }

}

// For inheritance
export = new jellyfinPage();
