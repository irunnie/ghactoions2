class UtilityClass{

    get randomEmail(){
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var email = '';
    for(var index = 0; index < 15; index++)
    email += chars[Math.floor(Math.random() * chars.length)];
        return email + '@gmail.com';
    }

    get randomPassword(){
        var text = "";
        var possible = "STUVWXYZstuvwxyz56789";
        for (var i = 0; i < 8; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    get randomNickname(){
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    pressEnter(){
        browser.keys('\uE007');
    }
}

module.exports = new UtilityClass();