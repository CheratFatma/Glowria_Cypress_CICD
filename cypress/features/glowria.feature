Feature: Achat sur Glowria
Background:
    Given je suis sur le site Glowria

@glowria
Scenario: Créer un compte et acheter un produit
    When je clique sur icone utilisateur
    And je crée un compte avec mon adresse mail
    And je clique sur le bouton inscription
    And je vérifie que je suis sur la page de création de compte
    And je remplie le prenom
    And je remplie le nom
    And je remplie email de confirmation
    And je remplie le mot de passe
    And je remplie la date de naissance
    And je coche accepter les conditions
    And je clique sur inscription
    And je clique sur Acheter
    And ajouter le premier produit
    And je renseigne mon adresse
    And je renseigne mon telephone
    And je clique sur valider
    And accepter CGU
    And je clique sur payer
    Then je vérifie le lien de la page
