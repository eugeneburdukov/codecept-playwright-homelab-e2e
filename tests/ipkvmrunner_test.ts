import { environment } from "../config/basicConfig"
import assert from 'assert';

Feature('KVM report');

Before(({ I, ipkvmPage }) => {
    console.log("🚀 Running a new test - KVM");
    I.amOnPage(environment.LAN.kvmpage);

    try {
        I.waitForElement('body', 10);
    } catch (err) {
        console.error('❌ Page did not load properly: <body> not found');
        assert.fail('Critical: <body> element not found — aborting tests');
    }

    ipkvmPage.login(environment.CREDENTIALS.username, environment.CREDENTIALS.kvmpassword);
});

Scenario('get Tailscale status', async ({ I, ipkvmPage }) => {
    await ipkvmPage.tailscaleStatus();
}).tag('kvm');