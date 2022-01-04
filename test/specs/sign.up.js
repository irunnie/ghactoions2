const mainPage = require('../page/main.page');
const { randomEmail, randomPassword, randomNickname } = require('../page/utility.class');
const signUpPage = require('../page/signup.page');
const enterprisePage = require('../page/enterprise.page');
const joinPage = require('../page/join.page');
const pricingPage = require('../page/pricing.page');

describe('github.com page', () => {

    xit('should input random email, click sign up, and and make sure user got redirected', async () =>{
        mainPage.open();
        await mainPage.emailInput.addValue(randomEmail);
        await mainPage.signUpButton.click();
        await expect(browser).toHaveUrlContaining('github.com/signup');
        console.log("Welcome title is displayed = " + await signUpPage.welcomeTitle.isDisplayed());
    });

    xit('should try to register a new user and check if verify label is displayed', async () => {
        mainPage.open();
        await mainPage.signUpButton.click();

        await signUpPage.emailInput.addValue(randomEmail);
        await signUpPage.continueButton.waitForEnabled();
        await signUpPage.continueButton.click();

        await signUpPage.passwordInput.addValue(randomPassword);
        await signUpPage.continueButton.waitForEnabled();
        await signUpPage.continueButton.click();

        await signUpPage.nicknameInput.addValue(randomNickname);
        await signUpPage.continueButton.waitForEnabled();
        await signUpPage.continueButton.click();

        await signUpPage.announcementsInput.addValue('n');
        await signUpPage.continueButton.waitForEnabled();
        await signUpPage.continueButton.click();
        console.log("'Verify your account' label is displayed = " + await signUpPage.verifyLabel.isDisplayed());
    })

    xit('should go to free plan and fill registration inputs', async () => {
        mainPage.open();
        await mainPage.pricingButton.moveTo();
        await mainPage.plansButton.click();
        await pricingPage.joinForFreeButton.click();
        await joinPage.usernameInput.addValue(randomNickname);
        await joinPage.emailInput.addValue(randomEmail);
        await joinPage.passwordInput.addValue(randomPassword);
    });

    xit('should try to register enterprise plans', async () => {
        mainPage.open();
        await mainPage.enterpriseButton.click();
        await enterprisePage.freeTrialButton.click();
        await enterprisePage.enterpriseCloudPlan.click();
        await joinPage.usernameInput.addValue(randomNickname);
        await joinPage.emailInput.addValue(randomEmail);
        await joinPage.passwordInput.addValue(randomPassword);
        await browser.back();
        await enterprisePage.enterpriseServerPlan.click();
        await enterprisePage.nameInput.addValue(randomNickname);
        await enterprisePage.companyInput.addValue(randomNickname);
        await enterprisePage.emailInput.addValue(randomEmail);
        await enterprisePage.chooseInstallationTypeRButton(0);
        await enterprisePage.yesRButton.click();
        await enterprisePage.questionsTextArea.waitForDisplayed();
        await enterprisePage.questionsTextArea.addValue("Just a test");
        await enterprisePage.agreeWithTermsInput.click();
    });
});