const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    experimentalOriginDependencies: true,
    projectId: "pharma_poc",
    specPattern: "./cypress/tests/*/*",
    reporter: "mochawesome",
    experimentalSessionAndOrigin: true
    // baseUrl: "https://poc-staging-identity.azurewebsites.net/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dvue%26redirect_uri%3Dhttps%253A%252F%252Fstaging.pharmapoc.com%252Fcallback%26response_type%3Dcode%26scope%3Doffline_access%2520openid%2520custom.profile%2520entityApi%2520loyaltyProgramApi%2520loggingApi%26state%3D992fd3ee09984d80ba5e9861e6dd5e69%26code_challenge%3DYG4kg_z6O0LCmoZ_26K5EhJksOuFqh_nKCJxEH33nYA%26code_challenge_method%3DS256%26response_mode%3Dquery%26lang%3Dnull%26navigationTo%3Dnull"
    // baseUrl: "https://crm-alpha.pharmapoc.com/"
  },
  defaultCommandTimeout: 5000
});