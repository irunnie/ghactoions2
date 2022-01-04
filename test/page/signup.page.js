class SignUpPage{
    
    get welcomeTitle(){
        return $('//span[text()="Welcome to GitHub!"]');
    }

    get emailInput(){
        return $('[type="email"]');
    }

    get passwordInput(){
        return $('[id=password]');
    }

    get nicknameInput(){
        return $('[id=login]');
    }

    get announcementsInput(){
        return $('[id=opt_in');
    }

    get continueButton(){
        return $('[data-step-state="active"] button[class*=continue]');
    }
    
    get verifyLabel(){
        return $('[class*="prompt mt-4"]');
    }

}

module.exports = new SignUpPage();