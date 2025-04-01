import { environment } from "../config/basicConfig";

Feature('main');

Before(({ I, casaosPage }) => {
    console.log("🚀 Running");
    I.amOnPage(environment.LAN.casaOSpage);
    casaosPage.login(environment.CREDENTIALS.username, environment.CREDENTIALS.password);
  });

Scenario('get Storage Info', ({ I, casaosPage }) => {
    casaosPage.getStorageInfo();
}).tag('getStorage');

Scenario('Refresh Movie Library', ({ I, casaosPage, jellyfinPage }) => {
    casaosPage.goToJellyfinContainer();

    jellyfinPage.login(environment.CREDENTIALS.username, environment.CREDENTIALS.password);
    jellyfinPage.goToDashboard();
    //jellyfinPage.refreshMoviesLibrary();

}).tag('casaosAndJellyfin_updateLibrary');
