export class Common {

    static loginPage () {
        cy.origin('https://dev-poc-identity.azurewebsites.net', () => {

            const LOGIN_ACCOUNT = {
                username: "cipla.pocam",
                password: "Dat@POC@2020"
            }

            const {username, password} = LOGIN_ACCOUNT;
            cy.get('#selectCountryCode').select('en');
            cy.get('#username').type(username);
            cy.get('#password').type(password);
            cy.get('#login').click();
        })

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });
    }

}