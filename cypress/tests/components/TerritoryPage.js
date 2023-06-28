import {Common} from "../../support/Common";
import TerritoryWebPage from "../../../models/pages/TerritoryWebPage";
import {TableOptionsAPI} from "../../support/TableOptionsAPI";
import HomeWebPage from "../../../models/pages/HomeWebPage";
import CalendarWebPage from "../../../models/pages/CalendarWebPage";

describe('Territory Page', () => {

    let territoryWebPage = new TerritoryWebPage;
    let homeWebPage = new HomeWebPage;

    beforeEach(() => {
        cy.visit("https://crm-beta.pharmapoc.com/");
        Common.loginPage()
        homeWebPage.verifyHomePageScreen()
        territoryWebPage.clickTerritoryPage();
        territoryWebPage.verifyTerritoryPageScreenDisplay();
    })

    it('Check On/ Off random of table options by Customers', function () {
        territoryWebPage.clickTableOptions()
        territoryWebPage.verifyTableOptionsScreen()
        territoryWebPage.clickCancelButton()
        territoryWebPage.clickTableOptions()
        territoryWebPage.verifyTableOptionsScreen()
        territoryWebPage.clickOnOffRandomTableOptions()
        territoryWebPage.clickOkButton()
        territoryWebPage.verifyTerritoryPageScreenDisplay();
    });

    it('Check On/ Off table options value by Customers', function () {
        territoryWebPage.clickTableOptions()
        territoryWebPage.clickOffAllTableOptions()
        territoryWebPage.clickOkButton()
        territoryWebPage.verifyTerritoryPageScreenDisplay();
        territoryWebPage.clickTableOptions()
        territoryWebPage.verifyTableOptionsScreen()
        territoryWebPage.clickOnByValue("Ordering Status")
        territoryWebPage.clickOnByValue("Calls - Last month")
        territoryWebPage.clickOnByValue("Last call date")
        territoryWebPage.clickOnByValue("Area")
        territoryWebPage.clickOnByValue("Quarter Purchased")
        territoryWebPage.clickOkButton()
    });

    it('Filter value by Code Id by Customers', function () {
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
        territoryWebPage.verifyFilterValueByCodeId()
    });

    it('Filter value by Customer Name by Customers', function () {
        territoryWebPage.clickSortCustomerNameIcon()
        territoryWebPage.clickNameFiltersIcon()
        territoryWebPage.inputInvalidSearch()
        territoryWebPage.clickFiltersButton()
        territoryWebPage.verifyNoDataDisplay()
        territoryWebPage.clickNameFiltersIcon()
        territoryWebPage.clickResetButton()
        territoryWebPage.verifyTerritoryPageScreenDisplay();
        territoryWebPage.clickNameFiltersIcon()
        territoryWebPage._getRandomName()
        territoryWebPage.inputValidName()
        territoryWebPage.clickFiltersButton()
        territoryWebPage.verifyFilterValueByName()
    });

    it('Filter value by Area by Customers', function () {
        territoryWebPage.clickAreaFiltersIcon()
        territoryWebPage.selectAreaValue()
        territoryWebPage.clickResetButton()
        territoryWebPage.verifyTerritoryPageScreenDisplay();
        territoryWebPage.clickAreaFiltersIcon()
        territoryWebPage.selectAreaValue().then($selectArea => {
            territoryWebPage.clickFiltersButton()
            territoryWebPage.verifyAreaSelected().then($verifyArea => {
                expect($selectArea).to.be.deep.eq($verifyArea)
            })
        })
    });

    it('Filter value by Call This Month by Customers', function () {
        territoryWebPage.clickCallThisMonthFiltersIcon()
        territoryWebPage.inputValueCallTextBox()
        territoryWebPage.clickFiltersButton()
        territoryWebPage.verifyTerritoryPageScreenDisplay();
        territoryWebPage.clickCallThisMonthFiltersIcon()
        territoryWebPage.selectValueCompare()
        territoryWebPage.inputValueCallTextBox()
        territoryWebPage.clickFiltersButton()
        territoryWebPage.verifyTerritoryPageScreenDisplay();
    });

    it('Filter value by Last Call Date by Customers', function () {
        territoryWebPage.clickLastCallDateFiltersIcon()
        territoryWebPage.clickResetButton()
        territoryWebPage.verifyTerritoryPageScreenDisplay()
        territoryWebPage.clickLastCallDateFiltersIcon()
        territoryWebPage.clickFiltersButton()
        territoryWebPage.verifyTerritoryPageScreenDisplay();
    });

    it('Mass scheduling apply for All by Customers', function () {
        territoryWebPage.selectCustomer()
        territoryWebPage.clickScheduleCallIcon()
        territoryWebPage.verifyCreateScheduleCallDisplay()
        territoryWebPage.selectStartDate()
        territoryWebPage.selectStartTime()
        territoryWebPage.clickApplyButton()
        territoryWebPage.clickCreateScheduleCallButton()
        territoryWebPage.verifyCreateScheduleCallSuccessToast();
    });

    it('Mass scheduling apply for Each by Customers', function () {
        territoryWebPage.selectCustomer()
        territoryWebPage.clickScheduleCallIcon()
        territoryWebPage.verifyCreateScheduleCallDisplay()
        territoryWebPage.selectTypeCall()
        territoryWebPage.selectStartDateForEachCall()
        territoryWebPage.selectStartTimeForEachCall()
        territoryWebPage.clickCreateScheduleCallButton()
        territoryWebPage.verifyCreateScheduleCallSuccessToast();
    });

    it('Change mode view and click Customer in list by Customers', function () {
        territoryWebPage.clickTableViewIcon();
        territoryWebPage.verifyTableViewScreenDisplay();
        territoryWebPage.clickCustomerList();
        territoryWebPage.verifyCustomerPageScreenDisplay();
        territoryWebPage.clickBackButton();
        // territoryWebPage.verifyTerritoryPageScreenDisplay();
    });

    it('Check On/ Off random of table options by Prescribers', function () {
        territoryWebPage.clickPrescribersOption()
        territoryWebPage.verifyTerritoryPageScreenDisplay()
        territoryWebPage.clickTableOptions()
        territoryWebPage.verifyTableOptionsScreen()
        territoryWebPage.clickCancelButton()
        territoryWebPage.clickTableOptions()
        territoryWebPage.verifyTableOptionsScreen()
        territoryWebPage.clickOnOffRandomTableOptions()
        territoryWebPage.clickOkButton()
        territoryWebPage.verifyTerritoryPageScreenDisplay();
    });

    it('Check On/ Off table options value by Prescribers', function () {
        territoryWebPage.clickPrescribersOption()
        territoryWebPage.verifyTerritoryPageScreenDisplay()
        territoryWebPage.clickTableOptions()
        territoryWebPage.clickOffAllTableOptions()
        territoryWebPage.clickOkButton()
        territoryWebPage.verifyTerritoryPageScreenDisplay();
        territoryWebPage.clickTableOptions()
        territoryWebPage.verifyTableOptionsScreen()
        territoryWebPage.clickOnByValue("Phone Number")
        territoryWebPage.clickOnByValue("Subarea")
        territoryWebPage.clickOnByValue("Address")
        territoryWebPage.clickOnByValue("Segment")
        territoryWebPage.clickOnByValue("Last call date")
        territoryWebPage.clickOkButton()
    });

    it('Filter value by Code Id by Prescribers', function () {
        territoryWebPage.clickPrescribersOption()
        territoryWebPage.verifyTerritoryPageScreenDisplay()
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
        territoryWebPage.verifyFilterValueByCodeId()
    });

    it('Filter value by Prescriber Name by Prescribers', function () {
        territoryWebPage.clickSortCustomerNameIcon()
        territoryWebPage.clickNameFiltersIcon()
        territoryWebPage.inputInvalidSearch()
        territoryWebPage.clickFiltersButton()
        territoryWebPage.verifyNoDataDisplay()
        territoryWebPage.clickNameFiltersIcon()
        territoryWebPage.clickResetButton()
        territoryWebPage.verifyTerritoryPageScreenDisplay();
        territoryWebPage.clickNameFiltersIcon()
        territoryWebPage._getRandomName()
        territoryWebPage.inputValidName()
        territoryWebPage.clickFiltersButton()
        territoryWebPage.verifyFilterValueByName()
    });

    it('Filter value by Area by Prescribers', function () {
        territoryWebPage.clickPrescribersOption()
        territoryWebPage.verifyTerritoryPageScreenDisplay()
        territoryWebPage.clickAreaFiltersIcon()
        territoryWebPage.selectAreaValue()
        territoryWebPage.clickResetButton()
        territoryWebPage.verifyTerritoryPageScreenDisplay();
        territoryWebPage.clickAreaFiltersIcon()
        territoryWebPage.selectAreaValue().then($selectArea => {
            territoryWebPage.clickFiltersButton()
            territoryWebPage.verifyAreaSelected().then($verifyArea => {
                expect($selectArea).to.be.deep.eq($verifyArea)
            })
        })
    });

    it('Filter value by Call This Month by Prescribers', function () {
        territoryWebPage.clickPrescribersOption()
        territoryWebPage.verifyTerritoryPageScreenDisplay()
        territoryWebPage.clickCallThisMonthFiltersIcon()
        territoryWebPage.inputValueCallTextBox()
        territoryWebPage.clickFiltersButton()
        territoryWebPage.verifyTerritoryPageScreenDisplay();
        territoryWebPage.clickCallThisMonthFiltersIcon()
        territoryWebPage.selectValueCompare()
        territoryWebPage.inputValueCallTextBox()
        territoryWebPage.clickFiltersButton()
        territoryWebPage.verifyTerritoryPageScreenDisplay();
    });

    it('Filter value by Last Call Date by Prescribers', function () {
        territoryWebPage.clickPrescribersOption()
        territoryWebPage.verifyTerritoryPageScreenDisplay()
        territoryWebPage.clickLastCallDateFiltersIcon()
        territoryWebPage.clickResetButton()
        territoryWebPage.verifyTerritoryPageScreenDisplay()
        territoryWebPage.clickLastCallDateFiltersIcon()
        territoryWebPage.clickFiltersButton()
        territoryWebPage.verifyTerritoryPageScreenDisplay();
    });

    it('Mass scheduling apply for All by Prescribers', function () {
        territoryWebPage.selectCustomer()
        territoryWebPage.clickScheduleCallIcon()
        territoryWebPage.verifyCreateScheduleCallDisplay()
        territoryWebPage.selectStartDate()
        territoryWebPage.selectStartTime()
        territoryWebPage.clickApplyButton()
        territoryWebPage.clickCreateScheduleCallButton()
        territoryWebPage.verifyCreateScheduleCallSuccessToast();
    });

    it('Mass scheduling apply for Each by Prescribers', function () {
        territoryWebPage.selectCustomer()
        territoryWebPage.clickScheduleCallIcon()
        territoryWebPage.verifyCreateScheduleCallDisplay()
        territoryWebPage.selectTypeCall()
        territoryWebPage.selectStartDateForEachCall()
        territoryWebPage.selectStartTimeForEachCall()
        territoryWebPage.clickCreateScheduleCallButton()
        territoryWebPage.verifyCreateScheduleCallSuccessToast();
    });

    it('Change mode view and click Customer in list by Prescribers', function () {
        territoryWebPage.clickTableViewIcon();
        territoryWebPage.verifyTableViewScreenDisplay();
        territoryWebPage.clickCustomerList();
        territoryWebPage.verifyCustomerPageScreenDisplay();
        territoryWebPage.clickBackButton();
        // territoryWebPage.verifyTerritoryPageScreenDisplay();
    });

    it('Select another Sale rep', function () {
        territoryWebPage.clickAllRepsDropDown();
        territoryWebPage.verifyAllRepsDisplay();
        territoryWebPage.clickSaleRepsValue();
        territoryWebPage.verifyTerritoryPageScreenDisplay();
    });

    it('Create new Customer', function () {
        territoryWebPage.clickCreateCustomerIcon();
        territoryWebPage.verifyCreateCustomerScreen();
        territoryWebPage.inputCustomerName();
        territoryWebPage.inputCustomerAddress();
        territoryWebPage.selectArea();
        territoryWebPage.selectSubArea();
        territoryWebPage.inputPhoneNumber();
        territoryWebPage.selectTerritory();
        territoryWebPage.clickSubmitCreationRequest();
    });

    it('Search Customer with invalid value by Customer', function () {
        territoryWebPage.inputInvalidSearchCustomer()
        territoryWebPage.clickClearSearchCustomer()
        territoryWebPage._getRandomName()
        territoryWebPage.inputValidSearchCustomer()
        territoryWebPage.selectSearchCustomer()
    });

    it('Search Customer with invalid value by Prescribers', function () {
        territoryWebPage.clickPrescribersOption()
        territoryWebPage.verifyTerritoryPageScreenDisplay()
        territoryWebPage.inputInvalidSearchCustomer()
        territoryWebPage.clickClearSearchCustomer()
        territoryWebPage.verifyTerritoryPageScreenDisplay()
    });
});