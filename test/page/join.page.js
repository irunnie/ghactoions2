class JoinPage{

    get joinForFreeButton(){
    return $('//div[@class="mt-2"]/a[contains(text(),"for free")]');
    }

    get usernameInput(){
        return $('[id=user_login]');
    }

    get emailInput(){
        return $('[id=user_email]');
    }

    get passwordInput(){
        return $('[id=user_password]');
    }
}
module.exports = new JoinPage();