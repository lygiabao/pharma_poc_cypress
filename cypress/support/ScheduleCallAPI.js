import CalendarWebPage from "../../models/pages/CalendarWebPage";

let calendarWebPage = new CalendarWebPage;
export class ScheduleCallAPI {

    getScheduleCallApi() {
        cy.wait(100)
        cy.intercept('https://dev-entity.azurewebsites.net/api/v1/Activity/SearchCalendarEvents').as('scheduleCall')
        calendarWebPage.clickPreviousDate({force: true});
        calendarWebPage.verifyCalendarPageScreenDisplay();
        cy.wait(100)
        cy.wait('@scheduleCall')
        let apiSchedule
        cy.get('@scheduleCall').then(callList => {
            apiSchedule = callList.response.body.data
            apiSchedule = apiSchedule.map(call => {
                return {
                    pharmacyName: call.accountName.trim()
                }
            })
            // cy.log(JSON.stringify(apiSchedule))
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(apiSchedule))
        })
    }
}