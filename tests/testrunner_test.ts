import { assert } from "console";
import { environment } from "../config/basicConfig";
import { AssertionError } from "assert";
//const addContext = require('mochawesome/addContext');

Feature('main');

// Before(({ I, casaosPage }) => {
//     console.log("🚀 Running");
//     I.amOnPage(environment.LAN.casaOSpage);
//     casaosPage.login(environment.CREDENTIALS.username, environment.CREDENTIALS.password);
// });

Scenario('get Storage Info', ({ I, casaosPage }) => {
    casaosPage.getStorageInfo();
}).tag('getStorage');

Scenario('Refresh Movie Library', ({ I, casaosPage, jellyfinPage }) => {
    casaosPage.goToJellyfinContainer();

    jellyfinPage.login(environment.CREDENTIALS.username, environment.CREDENTIALS.password);
    jellyfinPage.goToDashboard();
    //jellyfinPage.refreshMoviesLibrary();
    console.log("Jellyfin Media is refreshed");
}).tag('casaosAndJellyfin_updateLibrary');


Scenario('API Jellyfin - Get List of Libraries', async ({ I, jellyfinPage }) => {
    jellyfinPage.getListOfLibraries();
}).tag("jellyfin_api_getListOfLibraries");

Scenario('API Jellyfin - Get Count of Movies', async ({ I, jellyfinPage }) => {
    jellyfinPage.getCountOfMovies();
}).tag("jellyfin_api_count_movies");

Scenario('GitHub Pipeline test', ({ I }) => {
    I.amOnPage("https://npshopping.com");
    I.click("//div[@class='menu-link__text' and text() = 'Магазини']");
}).tag("pipelinetest");