class EnterprisePage{

    get freeTrialButton(){
        return $$('.btn-mktg.btn-muted-mktg')[0];
    }

    get enterpriseCloudPlan(){
        return $('//h2[text()="Enterprise Cloud"]');
    }

    get enterpriseServerPlan(){
        return $('//h2[text()="Enterprise Server"]');
    }

    get nameInput(){
        return $('[id="contact_request_name"]');
    }

    get companyInput(){
        return $('[id*=organization]');
    }

    get emailInput(){
        return $('input[id*=mail]');
    }

    async chooseInstallationTypeRButton(rbNumber){
        $$('[class="form-group mb-2"] input')[rbNumber].click();
    }

    get yesRButton(){
        return $('[id=questions_yes]');
    }

    get agreeWithTermsInput(){
        return $('[id="contact_request_agreed_to_terms"]');
    }

    get questionsTextArea(){
        return $('//textarea');
    }
}

module.exports = new EnterprisePage();