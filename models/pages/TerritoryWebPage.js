const customersPageCss = 'Territory'
const customersLogo1Css = '[data-testid="tableView"]'
const customersLogo2Css = '.font-roboto'
const customersLogo3Css = '[class*="flex flex-wrap"]'
const pocLoaderCss = '[class="poc-loader"]'
const customerTitleCss = 'My territory'
const tableOptionsCss = '[data-testid="tableOptionsIcon"]'
const tableOptionsLogoCss = '.poc-drawer'
const okButtonCss = '[data-testid="submit-button"]'
const cancelButtonCss = '[data-testid="close-button"]'
const tableOptionsListCss = '[class*="bg-background-color"]'
const getTableNameCss = '[data-testid*="table-option"]'
const onOffTableOptions = '[role="switch"]'
const filterCodeIconCss = '[data-testid="filter-code-icon"]'
const filterNameIconCss = '[data-testid="filter-name-icon"]'
const searchTextBoxCss = '[data-testid="string-filter"]'
const filtersButtonCss = '[data-testid="filterButton"]'
const resetButtonCss = '[data-testid="resetButton"]'
const sortCodeIconCss = '[data-testid="header-column-code"]'
const sortCustomerNameIconCss = '[data-testid="header-column-name"]'
const getCodeIdCss = '[class="poc-checkbox"] ~ div > a'
const noDataResultCss = 'No data found.'
const getNameCss = '[class="line-clamp-2"] > a'
const demoCss = '[class="line-clamp-2"]'
const selectCustomerCss = '[class="poc-checkbox"]'
const scheduleCallIconCss = 'Schedule calls'
const scheduleCallLogo1Css = '[class*="poc-drawer shadow"'
const scheduleCallLogo2Css = '[class*="poc-drawer__header"]'
const createScheduleCallButton = '[class*="poc-button poc-button-large poc-button-borde"]'
const createCallSuccessCss = '[class*="poc-toast-content text-text-primary-color"]'
const callScheduledCss = "Calls scheduled"

class TerritoryWebPage {

    clickTerritoryPage() {
        cy.contains(customersPageCss).click()
    }

    verifyTerritoryPageScreenDisplay() {
        cy.get(customersLogo1Css).should("be.visible")
        cy.get(customersLogo2Css).should("be.visible")
        cy.get(customersLogo3Css).should("be.visible")
        cy.get(pocLoaderCss).should("not.exist")
        cy.contains(customerTitleCss).should("be.visible")
        cy.wait(1000)
    }

    clickTableOptions() {
        cy.get(tableOptionsCss).click()
    }

    verifyTableOptionsScreen() {
        cy.get(tableOptionsLogoCss).should("be.visible")
    }

    clickOkButton() {
        cy.get(okButtonCss).click()
    }

    clickCancelButton() {
        cy.get(cancelButtonCss).click()
    }

    clickOnOffTableOptions() {
        cy.get(onOffTableOptions).then(switchButton => {
            const randomTableOptions = switchButton[Math.floor(Math.random()*switchButton.length)]
            cy.get(randomTableOptions).click()
        })
    }

    clickCodeFilterIcon() {
        cy.get(filterCodeIconCss).click()
    }

    inputValidCode() {
        this._getRandomCodeId().then(codeId => {
            cy.get(searchTextBoxCss).type(codeId)
        })
    }

    inputInvalidSearch() {
        cy.get(searchTextBoxCss).type("abc@@@def")
    }

    clickResetButton() {
        cy.get(resetButtonCss).click()
    }

    clickFiltersButton() {
        cy.get(filtersButtonCss).click()
    }

    clickNameFiltersIcon() {
        cy.get(filterNameIconCss).click()
    }

    _getTableOptionName() {
        let tableOptionData = {}
        cy.get(getTableNameCss).then($title => tableOptionData.pharmacyId = $title.attr("data-testid").replace("table-option-item-", ""))
        return new Cypress.Promise(resolve => resolve(tableOptionData))
    }

    getTableOptionsList () {
        let tableOptionsList = [];
        cy.get(tableOptionsListCss).each($tableOption => {
            // this._getTableOptionName().then(tableOptionData => tableOptionsList.push(tableOptionData))
            cy.wrap($tableOption).within(() => {
                this._getTableOptionName().then(tableOptionData => tableOptionsList.push(tableOptionData))
            })
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(tableOptionsList));
        })
    }

    clickSortCodeIcon() {
        cy.get(sortCodeIconCss).click()
        cy.get(sortCodeIconCss).click()
    }

    clickSortCustomerNameIcon() {
        cy.get(sortCustomerNameIconCss).click()
        cy.get(sortCustomerNameIconCss).click()
    }

    _getRandomCodeId() {
        let randomId
        cy.get(getCodeIdCss).then(codeId => {
            randomId = codeId.eq(Math.floor(Math.random()*codeId.length)).text()
            cy.log(randomId)
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(randomId))
        })
    }

    verifyFilterValue() {
        cy.get(getCodeIdCss).then(codeId => {
            this._getRandomCodeId().then(codeIdFilter => {
                expect(codeId.text()).to.equal(codeIdFilter);
            })
        })
    }

    verifyNoDataDisplay() {
        cy.contains(noDataResultCss).should('be.visible')
    }

    _getRandomNameId() {
        cy.get(demoCss).each(card => {
            cy.wrap(card).within(() => {
                cy.get('[intent="transparent"]').eq(0).then(abc => {
                    cy.log(abc.text())
                })
            })
        })
    }

    selectCustomer() {
        let randomCheckbox
        cy.get(selectCustomerCss).then(customerCheckbox => {
            randomCheckbox = customerCheckbox.eq(Math.floor(Math.random()*customerCheckbox.length))
            cy.get(randomCheckbox).click()
        })
    }

    clickScheduleCallIcon() {
        cy.contains(scheduleCallIconCss).click()
    }

    verifyCreateScheduleCallDisplay() {
        cy.get(scheduleCallLogo1Css).should("be.visible")
        cy.get(scheduleCallLogo2Css).should("be.visible")
    }

    selectCallType() {

    }

    clickCreateScheduleCallButton() {
        cy.get(createScheduleCallButton).click()
    }

    verifyCreateScheduleCallSuccessToast() {
        cy.get(createCallSuccessCss).should('be.visible');
        cy.contains(callScheduledCss).should('be.visible');
    }
}

module.exports = TerritoryWebPage