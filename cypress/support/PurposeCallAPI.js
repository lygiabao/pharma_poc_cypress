import CalendarWebPage from "../../models/pages/CalendarWebPage";

let calendarWebPage = new CalendarWebPage;
export class PurposeCallAPI {

    getPurposeCallApi() {
        calendarWebPage.clickSingleIcon();
        calendarWebPage.verifyCallListLogo();
        cy.intercept('https://dev-entity.azurewebsites.net/api/v1/call/callPurposeType?accountType=1').as('purpose');
        calendarWebPage.clickScheduleCallIcon();
        calendarWebPage.verifyScheduleCallLogo();
        calendarWebPage.clickPurposeDropDown();
        cy.wait('@purpose')
        let getPurposeList;

        cy.get('@purpose').then(purposeList => {
            getPurposeList = purposeList.response.body.data
            getPurposeList = getPurposeList.map(call => {
                return {
                    purposeName: call.name.replace('{{productDetailingText}}','')
                }
            })
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(getPurposeList))
        })
    }
}