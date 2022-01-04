class CareersPage{

    get positionsButton(){
        return $('[href="#positions"]');
    }

    get careersPositions(){
        return $$('[class="pb-md-6"] h3');
    }

    async getCareersPositionsText(){

        const positions = await this.careersPositions;
        const careersTextList = [];
        for (const position of positions){
           careersTextList.push(await position.getText() + "***");
        }
        return careersTextList;
    }
    
}
module.exports = new CareersPage();