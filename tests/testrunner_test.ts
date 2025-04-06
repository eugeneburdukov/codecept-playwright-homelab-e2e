import { assert } from "console";
import { environment } from "../config/basicConfig";
import { AssertionError } from "assert";
//const addContext = require('mochawesome/addContext');

Feature('main');

Before(({ I, casaosPage }) => {
    console.log("🚀 Running");
    I.amOnPage(environment.LAN.casaOSpage);
    casaosPage.login(environment.CREDENTIALS.username, environment.CREDENTIALS.password);
});

Scenario('get Downloading list', async ({ I, casaosPage, qbittorrentPage }) => {
    casaosPage.goToQbittorrentContainer();
    qbittorrentPage.login(environment.CREDENTIALS.username, environment.CREDENTIALS.password);
    await qbittorrentPage.getQElements();
}).tag('qbittorrent');

Scenario('get Temperature Info', async ({ I, casaosPage }) => {
    await casaosPage.getTemperature();
}).tag('getTemperature');

Scenario('get Storage Info', ({ I, casaosPage }) => {
    casaosPage.getStorageInfo();
}).tag('getStorage');

Scenario('Refresh Movie Library', ({ I, casaosPage, jellyfinPage }) => {
    casaosPage.goToJellyfinContainer();

    jellyfinPage.login(environment.CREDENTIALS.username, environment.CREDENTIALS.password);
    jellyfinPage.goToDashboard();
    jellyfinPage.refreshMoviesLibrary();
    console.log("Jellyfin Movies is refreshed");
}).tag('JupdateMovieLibrary');

Scenario('Refresh Series Library', ({ I, casaosPage, jellyfinPage }) => {
    casaosPage.goToJellyfinContainer();

    jellyfinPage.login(environment.CREDENTIALS.username, environment.CREDENTIALS.password);
    jellyfinPage.goToDashboard();
    jellyfinPage.refreshSeriesLibrary();
    console.log("Jellyfin Series is refreshed");
}).tag('JupdateSeriesLibrary');


Scenario('API Jellyfin - Get List of Libraries', async ({ I, jellyfinPage }) => {
    jellyfinPage.getListOfLibraries();
}).tag("jellyfin_api_getListOfLibraries");

Scenario('API Jellyfin - Get Count of Movies', async ({ I, jellyfinPage }) => {
    jellyfinPage.getCountOfMovies();
}).tag("jellyfin_api_count_movies");