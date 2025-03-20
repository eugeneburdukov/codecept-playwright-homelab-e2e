import { environment } from "./config/basicConfig";

Feature('main');

Scenario('test1',  ({ I, casaosPage, jellyfinPage }) => {
I.amOnPage(environment.LAN.casaOSpage);

casaosPage.login("eugeneb", "drandulet");

I.waitForElement('//div[@id=\'app-jellyfin\']', 10);
I.click('//div[@id=\'app-jellyfin\']');

I.switchToNextTab();

I.waitForElement('//input[@id="txtManualName"]', 5);
jellyfinPage.login("eugeneb","drandulet");

I.seeInTitle('Jellyfin');
pause();

});
