class MainPage{

    open(){
        browser.url("https://github.com");
    }

    get emailInput(){
        return $('[type=email]');
    }

    get signUpButton(){
        return $('[type=submit]');
    }

    get signInButton(){
        return $('[href="/login"]');
    }

    get featuresButton(){
        return $('//nav/ul/li[1]');
    }

    get dropdownFeaturesList(){
        return $$('[class*=left-lg-n4]')[0];
    }

    get exploreButton(){
        return $('//nav/ul/li[4]');
    }

    get dropdownExploreList(){
        return $$('[class*=left-lg-n4]')[1];
    }

    get pricingButton(){
        return $('//nav/ul/li[6]');
    }

    get dropdownPricingList(){
        return $$('[class*=left-lg-n4]')[2];
    }

    get plansButton(){
        return $('.list-style-none.f5.pb-1 [href="/pricing"]');
    }
    
    get exploreGithubButton(){
        return $('[href="/explore"]');
    }

    get searchInput(){
        return $('[aria-label="Search GitHub"]');
    }

    get enterpriseButton(){
        return $('//nav/ul/li[3]');
    }

    get careersButton(){
        return $('[href="/about/careers"]');
    }

    get automateButton(){
        return $('[href="#home-automate"]');
    }

    get automateSection(){
        return $('//h2[text()=" Automate anything with "]');
    }
}

module.exports = new MainPage();