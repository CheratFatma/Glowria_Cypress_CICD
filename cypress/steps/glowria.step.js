import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import { faker } from '@faker-js/faker';
import homePage from "../pages/home.page";
import signupPage from "../pages/signup.page";
import productPage from "../pages/product.page";
import orderPage from "../pages/order.page";

const email = faker.internet.email();

Given("je suis sur le site Glowria", () => {
    cy.visit("https://glowria.com/#");
})

When('je clique sur icone utilisateur', () => {
    homePage.click_user_icon();
})

When('je crée un compte avec mon adresse mail', () => {
    homePage.fill_email(email);
})

When('je clique sur le bouton inscription', () => {
    homePage.click_inctiption_btn();
})

When('je vérifie que je suis sur la page de création de compte', () => {
    cy.url().should("include", "/signup");

})

When('je remplie le prenom', () => {
    signupPage.fill_prenom("lamia")
})

When('je remplie le nom', () => {
    signupPage.fill_nom("lamia")
})

When('je remplie email de confirmation', () => {
    signupPage.fill_confirmation_email(email)
})

When('je remplie le mot de passe', () => {
    signupPage.fill_password("France2026@")
})

When('je remplie la date de naissance', () => {
    signupPage.fill_date_de_naissance("18051999")
})

When('je coche accepter les conditions', () => {
    signupPage.check_cgu()
})

When('je clique sur inscription', () => {
    signupPage.click_inscription()
})

When('je clique sur Acheter', () => {
    productPage.click_acheter()
})

When('ajouter le premier produit', () => {
    productPage.click_je_craque()
})

When('je renseigne mon adresse', () => {
    orderPage.fill_addresse("22 Rue des Meuniers, Paris, France")
})

When('je renseigne mon telephone', () => {
    orderPage.fill_phone("0750800000")
})

When('je clique sur valider', () => {
    orderPage.click_valider_btn()
})

When('accepter CGU', () => {
    orderPage.check_acceptCGU()
})

When('je clique sur payer', () => {
    orderPage.click_payer_btn()
})

Then('je vérifie le lien de la page', () => {
    cy.url().should("include", "secure.payzen.eu/vads-payment");
})







