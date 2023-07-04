// const {defineConfig} = require("cypress");
// const {cloudPlugin} = require("cypress-cloud/plugin");
//
// module.exports = defineConfig({
//
//     video: false,
//
//     reporter: 'cypress-mochawesome-reporter',
//     e2e: {
//         setupNodeEvents(on, config) {
//             return cloudPlugin(on, config);
//           screenshotOnRunFailure = true;
//         },
//         experimentalOriginDependencies: true,
//         projectId: "pharma_poc",
//         specPattern: "./cypress/tests/*/*",
//         reporter: "mochawesome",
//         experimentalSessionAndOrigin: true
//         // baseUrl: "https://poc-staging-identity.azurewebsites.net/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dvue%26redirect_uri%3Dhttps%253A%252F%252Fstaging.pharmapoc.com%252Fcallback%26response_type%3Dcode%26scope%3Doffline_access%2520openid%2520custom.profile%2520entityApi%2520loyaltyProgramApi%2520loggingApi%26state%3D992fd3ee09984d80ba5e9861e6dd5e69%26code_challenge%3DYG4kg_z6O0LCmoZ_26K5EhJksOuFqh_nKCJxEH33nYA%26code_challenge_method%3DS256%26response_mode%3Dquery%26lang%3Dnull%26navigationTo%3Dnull"
//         // baseUrl: "https://crm-alpha.pharmapoc.com/"
//     },
//     defaultCommandTimeout: 5000
// });


// -----------CONFIG FOR HTML REPORT

const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // on('file:preprocessor', cucumber());
      screenshotOnRunFailure = true;
      require('cypress-mochawesome-reporter/plugin')(on);
      allureWriter(on, config);
      return config;
    },

    experimentalOriginDependencies: true,
    projectId: "pharma_poc",
    "overwrite": false,
    specPattern: "./cypress/tests/*/*",
    // specPattern: "**/*.feature",
    experimentalSessionAndOrigin: true
  },
  defaultCommandTimeout: 5000
});


// -----------CONFIG FOR ALLURE REPORT

// const {defineConfig} = require("cypress");
// const allureWriter = require('@shelex/cypress-allure-plugin/writer');
//
// module.exports = defineConfig({
//   video: false,
//   reporter: 'cypress-mochawesome-reporter',
//   e2e: {
//     setupNodeEvents(on, config) {
//       screenshotOnRunFailure = true;
//       require('cypress-mochawesome-reporter/plugin')(on);
//       allureWriter(on, config);
//       return config;
//     },
//     experimentalOriginDependencies: true,
//     projectId: "pharma_poc",
//     specPattern: "./cypress/tests/*/*",
//     "overwrite": false,
//     // reporter: 'cypress-mochawesome-reporter',
//     experimentalSessionAndOrigin: true
//   },
//   defaultCommandTimeout: 10000
// });