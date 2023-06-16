const {Common} = require("../../cypress/support/Common");
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
const onOffTableOptions = '[role="switch"][aria-checked="false"]'
const filterCodeIconCss = '[data-testid="filter-code-icon"]'
const filterNameIconCss = '[data-testid="filter-name-icon"]'
const searchTextBoxCss = '[data-testid="string-filter"]'
const filtersButtonCss = '[data-testid="filterButton"]'
const resetButtonCss = '[data-testid="resetButton"]'
const sortCodeIconCss = '[data-testid="header-column-code"]'
const sortCustomerNameIconCss = '[data-testid="header-column-name"]'
const getCodeIdCss = '[class="poc-checkbox"] ~ div > a'
const noDataResultCss = 'No data found.'
const getNameCss = '[class="p-0"] ~ td a[target="_self"]'
const selectCustomerCss = '[class="poc-checkbox"]'
const scheduleCallIconCss = 'Schedule calls'
const scheduleCallLogo1Css = '[class*="poc-drawer shadow"'
const scheduleCallLogo2Css = '[class*="poc-drawer__header"]'
const createScheduleCallButton = '[class*="poc-button poc-button-large poc-button-borde"]'
const createCallSuccessCss = '[class*="poc-toast-content text-text-primary-color"]'
const callScheduledCss = "Calls scheduled"
const prescriberOptionCss = 'Prescribers'
const customerNameLabelCss = '[class="p-0"] ~ td a[target="_self"]'
const startDateCss = '[data-testid="dateTimePicker"]'
const dateLogoCss = '[class="react-calendar poc-calendar"]'
const dateValueCss = '[class*="react-calendar__tile"]'
const startTimeCss = '[data-testid="select-trigger-callStartTime"] input'
const startTimeLogoCss = '[class*="poc-popover-dropdown"]'
const startTimeValueCss = '[class*="poc-select-dropdown-item"]'
const applyButtonCss = '[data-testid="applyDates"]'
const tableViewIconCss = '[data-testid="tableModeView"]'
const tableViewLogoCss = '[data-testid="cardView"]'
const columnViewIconCss = '[data-testid="columnModeView"]'
const customerValueCss = '[data-testid="cardView"] div[class*="font-bold"]'
const customerLogo1Css = '[class="content"]'
const customerLogo2Css = '[class="customer-landing"]'
const backButtonCss = '[class="header-breadcrumb"]'
const allRepsDropDownCss = '[data-testid="select-trigger-salerepSelector"] input'
const allRepDropDownLogoCss = '[data-testid="salerepList"]'
const allRepValueCss = '[data-testid="salerepList"] div'
const createCustomerIconCss = '[data-testid="createPharmacyIcon"]'
const newCustomerLogo1Css= '[class="content"]'
const newCustomerLogo2Css= 'Propose a new customer'
const customerNameTextBoxCss = '[placeholder="Customer name"]'
const customerAddressTextBoxCss = '[placeholder="Customer address"]'
const selectAreaDropDownCss = '[placeholder="Select area"]'
const areaDropDownLogoCss = 'iframe ~ div[class="el-select-dropdown el-popper"]'
const areaValueCss = 'iframe ~ div[class="el-select-dropdown el-popper"] li'
const selectSubAreaDropDownCss = '[placeholder="Select subarea"]'
const subAreaValueCss = 'div[x-placement="bottom-start"] li'
const phoneNumberTextBoxCss = '[placeholder="Customer phone number"]'
const territoryDropDownCss = '[name="territory"]'
const territoryValueCss = 'samwel.gakio@cipla.com (samwel.gakio)'
const submitButtonCss = '[type="submit"]'

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

    clickOnOffRandomTableOptions() {
        cy.get(onOffTableOptions).should(() => {
        }).then($tableOptions => {
            if($tableOptions.length) {
                cy.get(onOffTableOptions).then(switchButton => {
                    const randomTableOptions = switchButton.eq(Math.floor(Math.random()*switchButton.length))
                    cy.get(randomTableOptions).click()
                })
            }
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

    verifyFilterValueByCodeId() {
        cy.get(getCodeIdCss).then(codeId => {
            this._getRandomCodeId().then(codeIdFilter => {
                expect(codeId.text()).to.equal(codeIdFilter);
            })
        })
    }

    verifyFilterValueByName() {
        cy.get(getNameCss).then($name => {
            this._getRandomName().then($randomName => {
                expect($name.text()).to.eq($randomName)
            })
        })
    }

    verifyNoDataDisplay() {
        cy.contains(noDataResultCss).should('be.visible')
    }

    _getRandomName() {
        let randomName
        cy.get(getNameCss).then($name => {
            randomName = $name.eq(Math.floor(Math.random() * $name.length)).text()
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(randomName))
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

    clickCreateScheduleCallButton() {
        cy.get(createScheduleCallButton).click()
    }

    verifyCreateScheduleCallSuccessToast() {
        cy.get(createCallSuccessCss).should('be.visible');
        cy.contains(callScheduledCss).should('be.visible');
    }

    clickPrescribersOption() {
        cy.contains(prescriberOptionCss).click()
        this.verifyTerritoryPageScreenDisplay()
    }

    getCustomerName() {
        let randomCustomerName
        cy.get(customerNameLabelCss).then(customerLabel => {
            randomCustomerName = customerLabel.eq(Math.floor(Math.random()*customerLabel.length))
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(randomCustomerName.text()))
        })
    }

    getPrescriberName() {
        let randomPrescriberName
        cy.get(customerNameLabelCss).then(prescriberLabel => {
            randomPrescriberName = prescriberLabel.eq(Math.floor(Math.random()*prescriberLabel.length))
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(randomPrescriberName.text()))
        })
    }

    clickOnOfTableOptions() {
        cy.get('[data-testid*="table-option-item"] div div').each($text => {
            cy.wrap($text).within(() => {
                cy.contains('Subarea').parent().then(abc => {
                    cy.log(abc)
                })
            })

        })

        // Common.stringFormat()
        // cy.log('{0}'.format("Calls - Last month"))
        // cy.contains('{0}'.format("Calls - Last month")).then(abc => {
        //     cy.get(abc).parent().then(abc => {
        //         cy.get(abc).siblings().then(abc => {
        //             cy.log(abc)
        //         })
        //     })
        // })
    }

    inputValidName() {
        this._getRandomName().then(name => {
            cy.get(searchTextBoxCss).type(name)
        })
    }

    selectStartDate() {
        cy.get(startDateCss).eq(0).click()
        cy.get(dateLogoCss).should("be.visible")
        let randomDate
        cy.get(dateValueCss).then($date => {
            randomDate=$date.eq(Math.floor(Math.random()*$date.length))
            cy.get(randomDate).click()
        })
    }

    selectStartTime() {
        cy.get(startTimeCss).eq(0).click()
        cy.get(startTimeLogoCss).should("be.visible")
        let randomTime
        cy.get(startTimeValueCss).then($time => {
            randomTime=$time.eq(Math.floor(Math.random()*$time.length))
            cy.get(randomTime).click()
        })
    }

    clickApplyButton() {
        cy.get(applyButtonCss).click()
    }

    clickTableViewIcon() {
        cy.get(tableViewIconCss).eq(0).click()
    }

    verifyTableViewScreenDisplay() {
        cy.get(tableViewLogoCss).should("be.visible")
    }

    clickCustomerList() {
        let randomCustomer
        cy.get(customerValueCss).then($customer => {
            randomCustomer = $customer.eq(Math.floor(Math.random()*$customer.length))
            cy.get(randomCustomer).click()
        })
    }

    verifyCustomerPageScreenDisplay() {
        cy.get(customerLogo1Css).should("be.visible")
        cy.get(customerLogo2Css).should("be.visible")
    }

    clickBackButton() {
        cy.get(backButtonCss).click()
    }

    clickAllRepsDropDown() {
        cy.get(allRepsDropDownCss).click()
    }

    verifyAllRepsDisplay() {
        cy.get(allRepDropDownLogoCss).should("be.visible")
    }

    clickSaleRepsValue() {
        let randomRep
        cy.get(allRepValueCss).then($allRep => {
            randomRep = $allRep.eq(Math.floor(Math.random()*$allRep.length))
            cy.get(randomRep).click()
        })
    }

    clickCreateCustomerIcon() {
        cy.get(createCustomerIconCss).click()
    }

    verifyCreateCustomerScreen() {
        cy.get(newCustomerLogo1Css).should("be.visible")
        cy.contains(newCustomerLogo2Css).should("be.visible")
    }

    inputCustomerName() {
        cy.get(customerNameTextBoxCss).type(Common.generateRandomUser(9))
    }

    inputCustomerAddress() {
        cy.get(customerAddressTextBoxCss).type(Common.generateRandomUser(9))
    }

    selectArea() {
        cy.get(selectAreaDropDownCss).click()
        cy.get(areaDropDownLogoCss).should("be.visible")
        let randomArea
        cy.get(areaValueCss).then($area => {
            randomArea = $area.eq(Math.floor(Math.random()*$area.length))
            cy.get(randomArea).click()
        })
    }

    selectSubArea() {
        cy.get(selectSubAreaDropDownCss).click()
        cy.wait(1000)
        let randomSubArea
        cy.get(subAreaValueCss).then($subArea => {
            randomSubArea = $subArea.eq(Math.floor(Math.random()*$subArea.length))
            cy.get(randomSubArea).click()
        })
    }

    inputPhoneNumber() {
        cy.get(phoneNumberTextBoxCss).type(Common.generateRandomPhoneNumber(6))
    }

    selectTerritory() {
        cy.get(territoryDropDownCss).click()
        cy.wait(1000)
        cy.contains(territoryValueCss).click()
    }

    clickSubmitCreationRequest() {
        cy.get(submitButtonCss).click()
    }

    verifyCreateCustomerSuccess() {

    }
}

module.exports = TerritoryWebPage