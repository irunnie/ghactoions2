const mainPage = require('../page/main.page');
const searchPage = require('../page/search.page');
const { pressEnter } = require('../page/utility.class');

describe('github.com page', () => {

    xit('should search for "webdriverio", click "TypeScript", then click on 1st result and check url', async () => {
        mainPage.open();
        await mainPage.searchInput.addValue("webdriverio");
        pressEnter();
        await searchPage.typeScriptButton.click();
        await searchPage.searchResult.click();
        await expect(browser).toHaveUrlContaining('webdriver');
    });


});