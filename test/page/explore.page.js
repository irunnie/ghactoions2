class ExplorePage{

    get topicsButton(){
        return $('//div/a[@href="/topics"]');
    }

    get topicsHeader(){
        return $('//h1');
    }
}
module.exports = new ExplorePage();