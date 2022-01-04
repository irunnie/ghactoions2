const careersPage = require('../page/careers.page');
const mainPage = require('../page/main.page');

describe('github.com page', () => {

    it('should log open careers positions', async () => {
        mainPage.open();
        await mainPage.careersButton.click();
        await careersPage.positionsButton.click();
        console.log("CAREERS LIST : " + await careersPage.getCareersPositionsText());
    });

});