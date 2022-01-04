class SignInPage{

    get loginInput(){
        return $('[name=login]');
    }

    get passwordInput(){
        return $('[type=password]');
    }

    get submitButton(){
        return $('[type=submit]');
    }

    get passwordResetButton(){
        return $('[href="/password_reset"]');
    }

    get validLogin(){
        return "yneich";
    }

    get validPassword(){
        return "KudGonBiok1";
    }
}

module.exports = new SignInPage();