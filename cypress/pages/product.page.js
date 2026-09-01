class ProductPage{
    elements = { 
        //acheterBtn:() => cy.get(".text__extra-small.color__black.menu-link").contains("L'ACHETER"),
        acheterBtn: () => cy.get('a[href*="/personal/presentation/glowria"]').first(),
        JeCraqueBtn:() => cy.get(".btn.btn-red.btn-size-small.text__semi-bold.color__white.btn-annual.add-to-cart"),
    }

    click_acheter(){
        this.elements.acheterBtn().click({ force: true });
    }

    click_je_craque(){
        this.elements.JeCraqueBtn().click()
    }

}
export default new ProductPage();