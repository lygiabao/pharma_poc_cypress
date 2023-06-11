import {Common} from "../../support/Common";
import TerritoryWebPage from "../../../models/pages/TerritoryWebPage";
import {TableOptionsAPI} from "../../support/TableOptionsAPI";
import HomeWebPage from "../../../models/pages/HomeWebPage";
import CalendarWebPage from "../../../models/pages/CalendarWebPage";

describe('Territory Page', () => {

    let territoryWebPage = new TerritoryWebPage;
    let homeWebPage = new HomeWebPage;
    let tableOptionsApi = new TableOptionsAPI()
    let calendarWebPage = new CalendarWebPage

    beforeEach(() => {
        cy.visit("https://crm-alpha.pharmapoc.com/");
        Common.loginPage()
        homeWebPage.verifyHomePageScreen()
        territoryWebPage.clickTerritoryPage();
        territoryWebPage.verifyTerritoryPageScreenDisplay();
    })

    it('Check API of table options', function () {
        tableOptionsApi.getTableOptionsApi().then(apiTableOptions => {
            cy.log(JSON.stringify(apiTableOptions))
            territoryWebPage.getTableOptionsList().then(tableName => {
                cy.wrap('').then(() => {
                    cy.log(JSON.stringify(tableName))
                    expect(tableName.length).to.be.deep.eq(apiTableOptions.length);
                })
            })
        })

    });

    it('Check On/ Off table options', function () {
        territoryWebPage.clickTableOptions()
        territoryWebPage.verifyTableOptionsScreen()
        territoryWebPage.clickCancelButton()
        territoryWebPage.clickTableOptions()
        territoryWebPage.verifyTableOptionsScreen()
        territoryWebPage.clickOnOffTableOptions()
        territoryWebPage.clickOkButton()
    });

    it('Filter value by Code', function () {
        territoryWebPage.clickSortCodeIcon()
        territoryWebPage.clickCodeFilterIcon()
        territoryWebPage.inputInvalidSearch()
        territoryWebPage.clickFiltersButton()
        territoryWebPage.verifyNoDataDisplay()
        territoryWebPage.clickCodeFilterIcon()
        territoryWebPage.clickResetButton()
        territoryWebPage.verifyTerritoryPageScreenDisplay();

        territoryWebPage.clickCodeFilterIcon()
        territoryWebPage._getRandomCodeId()
        territoryWebPage.inputValidCode()
        territoryWebPage.clickFiltersButton()
        territoryWebPage.verifyFilterValue()
    });

    // Chưa xong
    it('Filter value by Customer Name', function () {
        territoryWebPage.clickSortCustomerNameIcon()
        territoryWebPage.clickNameFiltersIcon()
        territoryWebPage.inputInvalidSearch()
        territoryWebPage.clickFiltersButton()
        territoryWebPage.verifyNoDataDisplay()
        territoryWebPage.clickNameFiltersIcon()
        territoryWebPage.clickResetButton()
        territoryWebPage.verifyTerritoryPageScreenDisplay();

        territoryWebPage.clickNameFiltersIcon()
        territoryWebPage._getRandomNameId()
    });

    it.only('Mass scheduling', function () {
        territoryWebPage.selectCustomer()
        territoryWebPage.clickScheduleCallIcon()
        territoryWebPage.verifyCreateScheduleCallDisplay()
        // territoryWebPage.selectCallType()
        // territoryWebPage.selectStartDate()
        territoryWebPage.clickCreateScheduleCallButton()
        territoryWebPage.verifyCreateScheduleCallSuccessToast();
        // territoryWebPage.verifyCreateCallToastDisplay()
    });

});