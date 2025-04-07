const { I } = inject();

import axios from "axios";
import { environment, JellyfinLibraryParser } from "../config/basicConfig";

class jellyfinPage {

  userNameField = '//input[@id="txtManualName"]';
  passwordField = '//input[@id="txtManualPassword"]';
  loginButton = '//button[@type="submit"]';
  hamburgerMenu = "//span[@class='material-icons menu']";
  dashboardSection = "//span[@class='navMenuOptionText' and text()='Dashboard']";
  librariesSection = "//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-hlxkyz' and text() = 'Libraries']";
  librariesSectionDescendent = "//span[text()='Libraries']/following::span[text()='Libraries' and not(ancestor::*[@style='display: none'])][1]";
  moviesLibrarySection = "//div[@data-id='f137a2dd21bbc1b99aa5c0f6bf02a805']//div[@style='text-align:right; float:right;padding-top:5px;']";
  showsLibrarySection = "//div[@data-id='a656b907eb3a73532e40e44b968d0225']//div[@style='text-align:right; float:right;padding-top:5px;']";
  LibraryScan = "//div[@class='listItemBodyText actionSheetItemText' and text() = 'Scan library']";
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
    // I.click(this.LibraryScan);
    // I.click(this.refreshButton);
  }

  refreshSeriesLibrary() {
    I.waitForElement(this.librariesSection);
    I.click(this.librariesSection);
    I.waitForElement(this.librariesSectionDescendent);
    I.click(this.librariesSectionDescendent);
    I.waitForElement(this.showsLibrarySection);
    I.click(this.showsLibrarySection);
    I.waitForElement(this.LibraryScan);
    I.click(this.LibraryScan);
    I.waitForElement(this.refreshButton);
    I.click(this.refreshButton);
  }

  async getCountOfMovies() {
    try {
      const responseMovies = await axios.get(`${environment.JELLYFIN.API_URL}/Users/a730a58b3043499d8e70dd9fa01bc106/Items`, {
        headers: { "X-Emby-Token": environment.JELLYFIN.API_KEY },
        params: { IncludeItemTypes: "Movie", Recursive: true }
      });
      console.log(`Total Movies: ${responseMovies.data.Items.length}`);
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  }

  async getListOfLibraries() {
    try {
      const axiosResponse = await axios.get(`${environment.JELLYFIN.API_URL}/Library/VirtualFolders`, {
        headers: {
          'X-Emby-Token': environment.JELLYFIN.API_KEY,
          'Accept': 'application/json'
        }
      });

      const filteredData = JellyfinLibraryParser.extractNamesAndLocations(axiosResponse.data);
      console.log(filteredData);
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  }

}

// For inheritance
export = new jellyfinPage();
