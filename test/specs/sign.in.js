const mainPage = require('../page/main.page');
const homePage = require('../page/home.page');
const assert = require('assert');
const signInPage = require('../page/signin.page');
const { validLogin, validPassword } = require('../page/signin.page');

describe('github.com page', () => {

    xit('should login with valid credentials and check if user logged in', async () => {
        mainPage.open();
        await mainPage.signInButton.click();
        await signInPage.loginInput.addValue(validLogin);
        await signInPage.passwordInput.addValue(validPassword);
        await signInPage.submitButton.click();
        await homePage.dropdownButton.click();
        assert.equal(await homePage.profileLink.getText(), "Signed in as " + validLogin); 
    })

});