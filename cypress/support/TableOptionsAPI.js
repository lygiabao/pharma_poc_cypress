import CustomerWebPage from "../../models/pages/TerritoryWebPage";
let customerWebPage = new CustomerWebPage;
export class TableOptionsAPI {

    getTableOptionsApi() {
        let tableOptionsApi;
        cy.intercept('https://dev-entity.azurewebsites.net/api/v1/dashboard/tableOptions?type=1').as('tableOptions')
        customerWebPage.clickTableOptions();
        customerWebPage.verifyTableOptionsScreen();
        cy.wait('@tableOptions')
        cy.get('@tableOptions').then(tableOptions =>{
            // cy.log(JSON.stringify(tableOptions.response.body.data))
            tableOptionsApi = tableOptions.response.body.data
            tableOptionsApi = tableOptionsApi.map(api => {
                return {
                    pharmacyId : api.id,
                    // pharmacyValue : api.value,
                    // pharmacyName : api.text
                }
            })
            cy.log(JSON.stringify(tableOptionsApi))
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(tableOptionsApi))
        })
    }
}