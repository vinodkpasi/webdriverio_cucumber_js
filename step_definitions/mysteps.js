const { Given, When, Then } = require('@cucumber/cucumber');
    Given('I go to the application', { timeout: 60 * 1000 }, async function () {
        await browser.url(
            'https://chromedriver.storage.googleapis.com/index.html?path=80.0.3987.16/'
        );
        console.log('Navigated to url');
    });

    Then("Read the element's innerText, innerHTML and outerHTML", { timeout: 60 * 1000 }, async function () {
        browser.pause(5000);
        const el = $("//a[text()='chromedriver_win32.zip']");

        let txt = await el.getAttribute('innerText');
        console.log("innerText:" + txt);

        txt = await el.getAttribute('innerHTML');
        console.log("innerHTML:" + txt);

        txt = await el.getAttribute('outerHTML');
        console.log("outerHTML:" + txt);
    });


