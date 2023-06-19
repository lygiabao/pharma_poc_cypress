import TerritoryWebPage from "../../models/pages/TerritoryWebPage";
let territoryWebPage = new TerritoryWebPage;
export class TableOptionsAPI {

    getTableOptionsApi() {
        let tableOptionsApi
        cy.wait(100)
        cy.intercept('https://staging-entity.azurewebsites.net/api/v1/dashboard/tableOptions?type=1').as('tableOptions')
        territoryWebPage.clickTableOptions();
        territoryWebPage.verifyTableOptionsScreen();
        cy.wait(100)
        cy.wait('@tableOptions')
        cy.get('@tableOptions').then(tableOptions =>{
            cy.log(tableOptions)
            tableOptionsApi = tableOptions.response.body.data
            tableOptionsApi = tableOptionsApi.map(api => {
                return {
                    pharmacyId : api.id,
                }
            })
            cy.log(JSON.stringify(tableOptionsApi))
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(tableOptionsApi))
        })
    }
}