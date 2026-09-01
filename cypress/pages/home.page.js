class HomePage{
    elements = { 
        userIcon:() => cy.get(".icon-account.bg__red"),
        userEmail:() => cy.get("#newEmail"),
        inscriptionBtn:() => cy.get(".btn.btn-black.margin__large.btn-size-large[value='Inscription']")
    }

    click_user_icon(){
        this.elements.userIcon().click()
    }

    fill_email(email){
        this.elements.userEmail().type(email)
    }

    click_inctiption_btn(){
        this.elements.inscriptionBtn().click()
    }

}
export default new HomePage();