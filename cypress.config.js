const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default; //CUCUMBER
const allureWriter = require('@shelex/cypress-allure-plugin/writer'); //ALLURE


module.exports = defineConfig({
  chromeWebSecurity: false,// Pour eviter l'erreur lorsque le domaine change

  //MOCKAWSOME
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: false,
    json: true
  }, 


  //PLUGIN ALLURE
  env: {
        allure: true,
        allureResultsPath: 'allure-results',
        allureReuseAfterSpec: true,
  },

  e2e: {
    specPattern: "**/*.feature", //CUCUMBER
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber()); //CUCUMBER
      allureWriter(on, config); //ALLURE
      return config; //CUCUMBER
    },
  },
});
