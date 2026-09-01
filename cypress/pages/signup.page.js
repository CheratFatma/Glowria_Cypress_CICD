class SignUpPage{
    elements = { 
        prenom:() => cy.get("#customer_firstName"),
        nom:() => cy.get("#customer_lastName"),
        confirmationEmail:() => cy.get("#customer_emailConfirm"),
        password:() => cy.get("#customer_password"),
        dateDeNaissance:() => cy.get("#customer_birthday"),
        cgu:() => cy.get("#legalmentions"),
        inscriptionBtn:() => cy.get("#submitBtn"),
    }

   
    fill_prenom(prenom){
        this.elements.prenom().type(prenom)
    }

    fill_nom(nom){
        this.elements.nom().type(nom)
    }

    fill_confirmation_email(email){
        this.elements.confirmationEmail().type(email)
    }

    fill_password(password){
        this.elements.password().type(password)
    }

    fill_date_de_naissance(date){
        this.elements.dateDeNaissance().type(date)
    }

    check_cgu(){
        this.elements.cgu().check()
    }

    click_inscription(){
        this.elements.inscriptionBtn().click()
    }

}
export default new SignUpPage();