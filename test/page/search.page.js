class SearchPage{

    get typeScriptButton(){
        return $('[href*=Type]');
    }

    get searchResult(){
        return $$('.f4.text-normal a')[0];
    }
}
module.exports = new SearchPage();
