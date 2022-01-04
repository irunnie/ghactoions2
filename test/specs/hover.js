const mainPage = require('../page/main.page');
const explorePage = require('../page/explore.page');

describe('github.com page', () => {

    xit('should hover some elements and check if they are displayed', async () => {
        mainPage.open();
        await mainPage.featuresButton.moveTo();
        console.log("Dropdown list of features is displayed = "
        + await mainPage.dropdownFeaturesList.isDisplayed());

        await mainPage.signInButton.moveTo();

        await mainPage.exploreButton.moveTo();
        console.log("Dropdown explore list is displayed = "
        + await mainPage.dropdownExploreList.isDisplayed());

        await mainPage.signInButton.moveTo();

        await mainPage.pricingButton.moveTo();
        console.log("Dropdown pricing list is displayed = "
        + await mainPage.dropdownPricingList.isDisplayed());
    });

    xit('should click explore github, topic, then check if "Topic" header is displayed', async () => {
        mainPage.open();
        
        await mainPage.signInButton.moveTo();

        await mainPage.exploreButton.moveTo();
        await mainPage.exploreGithubButton.click();
        await explorePage.topicsButton.click();
        console.log("'Topics' header is displayed = " + await explorePage.topicsHeader.isDisplayed());
    });

    xit('', async () => {

        mainPage.open();
        mainPage.automateButton.click();
        console.log("Automate section is visible = " + await mainPage.automateSection.isDisplayed());

    });

});