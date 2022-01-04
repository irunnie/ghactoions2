class HomePage{

    get dropdownButton(){
        return $('[aria-label="View profile and more"] span.dropdown-caret');
    }

    get profileLink(){
        return $('[class*="header-nav"] a');
    }
}

module.exports = new HomePage();