class OrderPage{
    elements = { 
        adresse:() => cy.get("#user_input_autocomplete_address"),
        suggestionAdresse: () => cy.get(".pac-container .pac-item").first(),
        phone:() => cy.get("#subscription_deliveryContact_phoneNumber"),
        validerBtn:() => cy.get("#submit-creation-form"),
        acceptCGU:() => cy.get("#terms"),
        payerBtn:() => cy.get("#submit-validation-form"),        
    }

    click_valider_btn(){
        this.elements.validerBtn().click()
    }

    fill_phone(phone){
        this.elements.phone().type(phone)
    }

    fill_addresse(adresse){
        this.elements.adresse().type(adresse)
        this.elements.suggestionAdresse().click()
    }

    check_acceptCGU(){
        this.elements.acceptCGU().check()
    }

    click_payer_btn(){
        this.elements.payerBtn().click()
    }

}
export default new OrderPage();