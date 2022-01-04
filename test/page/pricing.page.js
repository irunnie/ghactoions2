class PricingPage{

    get joinForFreeButton(){
    return $('//div[@class="mt-2"]/a[contains(text(),"for free")]');
}

}
module.exports = new PricingPage();




