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
const onOffTableOptions = '[data-testid*="switch"]'
const filterCodeIconCss = '[data-testid="filter-code-icon"]'
const filterNameIconCss = '[data-testid="filter-name-icon"]'
const filterAreaIconCss = '[data-testid="filter-area-icon"]'
const filterCallThisMonthIconCss = '[data-testid="filter-call.numberOfCurrentMonthCalls-icon"]'
const filterLastCallDateIconCss = '[data-testid="filter-call.lastCallDate-icon"]'
const searchTextBoxCss = '[data-testid="string-filter"]'
const filtersButtonCss = '[data-testid="filterButton"]'
const resetButtonCss = '[data-testid="resetButton"]'
const sortCodeIconCss = '[data-testid="header-column-code"]'
const sortCustomerNameIconCss = '[data-testid="header-column-name"]'
const getCodeIdCss = '[data-testid*="table-row-code"] a'
const noDataResultCss = 'No data found.'
const getNameCss = '[data-testid*="table-row-name"] a'
const selectCustomerCss = '[data-testid*="table-checkbox"]'
const scheduleCallIconCss = '[data-testid="schedule-calls-button"]'
const scheduleCallLogo1Css = '[data-testid="poc-drawer"]'
const scheduleCallLogo2Css = '[class*="poc-drawer__header"]'
const createScheduleCallButton = '[data-testid="schedule-calls-submit"] button'
const createCallSuccessCss = '[class*="poc-toast-content text-text-primary-color"]'
const callScheduledCss = "Calls scheduled"
const prescriberOptionCss = '[data-testid="prescribers-tag"]'
const customerNameLabelCss = '[data-testid*="table-row-name"] a'
const startDateCss = '[data-testid="dateTimePicker"]'
const startDateEachCallCss = '[data-testid*="date-picker"]'
const dateLogoCss = '[class="react-calendar poc-calendar"]'
const dateValueCss = '[class*="react-calendar__tile"]'
const startTimeCss = '[data-testid="select-trigger-callStartTime"] input'
const startTimeEachCallCss = '[data-testid*="select-trigger-callStartTime-"] input'
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
const allRepsDropDownValueCss = '[class="poc-select-dropdown-item cursor-pointer text-sm hover:bg-[var(--poc-item-selected-bg)]"]'
const onToggleTableOptionsCss = '[class="poc-switch poc-switch-sm poc-switch-blue"]'
const areaCheckBoxCss = '[data-testid="select-option"]'
const areaSelected = '[data-testid*="table-row-area"]'
const areaHeaderCss = '[data-testid="header-column-area"]'
const callThisMonthHeaderCss = '[data-testid="header-column-call.numberOfCurrentMonthCalls"]'
const lastCallDateHeaderCss = '[data-testid="header-column-call.lastCallDate"]'
const valueTextBoxCss = '[data-testid="filter-number-value"]'
const selectValueCompareCss = '[data-testid="select-trigger-filter-number-operator"]'
const selectValueCompareLogoCss = '[data-testid="filter-number-operator-list"]'
const typeCallDropDownCss = '[data-testid*="select-trigger-type-select"]'
const typeCallLogoCss = '[data-testid*="type-select-list"]'
const remoteTypeCss = 'Remote'
const clearSearchCustomerButtonCss = '[class*="poc-icon poc-icon-1x poc-autocomplete-clear-icon"]'
const searchCustomerTextBoxCss = '[placeholder="Search customers"]'
const searchCustomerLogoCss = '[class="poc-select-popover overflow-auto"]'
const searchCustomerValueCss = '[class="poc-select-popover overflow-auto"] a'

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
        cy.wait(500)
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

    clickOnByValue(tableOptionValue) {
        cy.contains(tableOptionValue).parent('[class*="items-center justify-between rounded-sm bg-white"]').then(value => {
            cy.get(value).siblings('div').then(value => {
                cy.wrap(value).within(() => {
                    cy.get('button[data-testid*="switch"]').click()
                })
            })
        })
    }

    clickOffAllTableOptions() {
        cy.get(onToggleTableOptionsCss).should(() => {
        }).then($value => {
            if($value.length) {
                cy.get(onToggleTableOptionsCss).each($clickOff => {
                    cy.get($clickOff).click()
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

    clickAreaFiltersIcon() {
        cy.get(areaHeaderCss).should(() => {
        }).then($area => {
            if(!$area.length) {
                this.clickTableOptions()
                this.verifyTableOptionsScreen()
                this.clickOnByValue("Area")
                this.clickOkButton()
                this.verifyTerritoryPageScreenDisplay();
            }
            cy.get(filterAreaIconCss).click()
        })
    }

    clickTerritoryFiltersIcon() {
        cy.get('[data-testid="header-column-territories"]').should(() => {
        }).then($territories => {
            if(!$territories.length) {
                this.clickTableOptions()
                this.verifyTableOptionsScreen()
                cy.get('[data-testid="table-option-item-53"] button[data-testid*="switch"]').click()
                // this.clickOnByValue("Territory")
                this.clickOkButton()
                this.verifyTerritoryPageScreenDisplay();
            }
            cy.get('[data-testid="filter-territories-icon"]').click()
        })
    }

    clickSegmentFiltersIcon() {
        cy.get('[data-testid="header-column-segments"]').should(() => {
        }).then($segmentHeader => {
            if(!$segmentHeader.length) {
                this.clickTableOptions()
                this.verifyTableOptionsScreen()
                cy.get('[data-testid="table-option-item-57"] button[data-testid*="switch"]').click()
                this.clickOkButton()
                this.verifyTerritoryPageScreenDisplay();
            }
            cy.get('[data-testid="filter-segments-icon"]').click()
        })
    }

    clickSubAreaFiltersIcon() {
        cy.get('[data-testid="header-column-subarea"]').should(() => {
        }).then($subAreaHeader => {
            if(!$subAreaHeader.length) {
                this.clickTableOptions()
                this.verifyTableOptionsScreen()
                cy.get('[data-testid="table-option-item-55"] button[data-testid*="switch"]').click()
                this.clickOkButton()
                this.verifyTerritoryPageScreenDisplay();
            }
            cy.get('[data-testid="filter-subarea-icon"]').click()
        })
    }

    clickTypeFiltersIcon() {
        cy.get('[data-testid="header-column-segmentTypes"]').should(() => {
        }).then($type => {
            if(!$type.length) {
                this.clickTableOptions()
                this.verifyTableOptionsScreen()
                this.clickOnByValue("Type")
                this.clickOkButton()
                this.verifyTerritoryPageScreenDisplay();
            }
            cy.get('[data-testid="filter-segmentTypes-icon"]').click()
        })
    }

    clickCallThisMonthFiltersIcon() {
        cy.get(callThisMonthHeaderCss).should(() => {
        }).then($callThisMonth => {
            if(!$callThisMonth.length) {
                this.clickTableOptions()
                this.verifyTableOptionsScreen()
                this.clickOnByValue("Calls - This month")
                this.clickOkButton()
                this.verifyTerritoryPageScreenDisplay();
            }
            cy.get(filterCallThisMonthIconCss).click()
        })
    }

    clickLastCallDateFiltersIcon() {
        cy.get(lastCallDateHeaderCss).should(() => {
        }).then($lastCallDate => {
            if(!$lastCallDate.length) {
                this.clickTableOptions()
                this.verifyTableOptionsScreen()
                this.clickOnByValue("Last call date")
                this.clickOkButton()
                this.verifyTerritoryPageScreenDisplay();
            }
            cy.get(filterLastCallDateIconCss).click()
        })
    }

    _getTableOptionName() {
        let tableOptionData = {}
        cy.get(getTableNameCss).then($title => tableOptionData.pharmacyId = $title.attr("data-testid")
            .replace("table-option-item-", ""))
        return new Cypress.Promise(resolve => resolve(tableOptionData))
    }

    getTableOptionsList () {
        let tableOptionsList = [];
        cy.get(tableOptionsListCss).each($tableOption => {
            cy.wrap($tableOption).within(() => {
                this._getTableOptionName().then(tableOptionData => tableOptionsList.push(tableOptionData))
            })
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(tableOptionsList));
        })
    }

    _getAllRepsValue() {
        let allRepsValue = {}
        cy.get('div').then($title => allRepsValue.repName = $title.text())
        return new Cypress.Promise(resolve => resolve(allRepsValue))
    }

    getAllReps() {
        let allRepList = [];
        cy.get(allRepsDropDownValueCss).each($allReps => {
            cy.wrap($allReps).within(() => {
                this._getAllRepsValue().then(saleRepData => allRepList.push(saleRepData))
            })
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(allRepList));
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
            cy.log("ramdomId: " + randomId)
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
        cy.get(scheduleCallIconCss).click()
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
        cy.get(prescriberOptionCss).click()
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

    inputValidSearchCustomer() {
        this._getRandomName().then(name => {
            cy.get(searchCustomerTextBoxCss).type(name)
        })
        cy.get(searchCustomerLogoCss).should("be.visible")
    }

    selectStartDate() {
        cy.get(startDateCss).click()
        cy.get(dateLogoCss).should("be.visible")
        let randomDate
        cy.get(dateValueCss).then($date => {
            randomDate=$date.eq(Math.floor(Math.random()*$date.length))
            cy.get(randomDate).click()
        })
    }

    selectStartDateForEachCall() {
        cy.get(startDateEachCallCss).click()
        cy.get(dateLogoCss).should("be.visible")
        let randomDate
        cy.get(dateValueCss).then($date => {
            randomDate=$date.eq(Math.floor(Math.random()*$date.length))
            cy.get(randomDate).click()
        })
    }

    selectStartTime() {
        cy.get(startTimeCss).click()
        cy.get(startTimeLogoCss).should("be.visible")
        let randomTime
        cy.get(startTimeValueCss).then($time => {
            randomTime=$time.eq(Math.floor(Math.random()*$time.length))
            cy.get(randomTime).click()
        })
    }

    selectStartTimeForEachCall() {
        cy.get(startTimeEachCallCss).click()
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

    selectAreaValue() {
        let randomAreaCheckbox
        let areaText
        cy.get(areaCheckBoxCss).then($area => {
            randomAreaCheckbox = $area.eq(Math.floor(Math.random()*$area.length))
            cy.get(randomAreaCheckbox).click()
            cy.get(randomAreaCheckbox).siblings('span').then(a => {
                areaText = a.text()
            })
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(areaText));
        })
    }

    verifyAreaSelected() {
        let area
        cy.get(areaSelected).eq(0).then($area => {
            area = $area.text()
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(area));
        })
    }

    inputValueCallTextBox() {
        cy.get(valueTextBoxCss).type("10")
    }

    selectValueCompare() {
        cy.get(selectValueCompareCss).click()
        cy.get(selectValueCompareLogoCss).should("be.visible")
        cy.get('[data-testid="filter-number-operator-list"] > div').eq(1).click()
    }

    selectTypeCall() {
        cy.get(typeCallDropDownCss).click()
        cy.get(typeCallLogoCss).should("be.visible")
        cy.contains(remoteTypeCss).click()
    }

    inputInvalidSearchCustomer() {
        cy.get(searchCustomerTextBoxCss).type("abc123!@#")
    }

    clickClearSearchCustomer() {
        cy.get(clearSearchCustomerButtonCss).click()
    }

    selectSearchCustomer() {
        cy.get(searchCustomerValueCss).eq(0).click()
    }

    clickFilterTypeIcon() {
        cy.get('[data-testid="filter-segmentTypes-icon"]').click()
        cy.get('[data-testid="filter-segmentTypes-content"]').should("be.visible")
    }

    getSegmentTypes() {
        let segmentType = []
        cy.get('span[class="truncate"]').each($segmentTypes => {
            cy.wrap($segmentTypes).then($segment => {
                let types = {}
                types.segmentType = $segment.text()
                segmentType.push(types)
            })
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(segmentType));
        })
    }

    geAreaList() {
        let area = []
        cy.get('[data-testid="filter-area-content"] [class="truncate"]').each($area => {
            cy.wrap($area).then($areaList => {
                let types = {}
                types.area = $areaList.text()
                area.push(types)
            })
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(area));
        })
    }

    getTerritoryList() {
        let territory = []
        cy.get('[data-testid="filter-territories-content"] [class="truncate"]').each($territory => {
            cy.wrap($territory).then($territoryList => {
                let types = {}
                types.territory = $territoryList.text()
                territory.push(types)
            })
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(territory));
        })
    }

    getSegmentList() {
        let segmentList = []
        cy.get('[data-testid="filter-segments-content"] [class="truncate"]').each($segment => {
            let segmentName = {}
            cy.wrap($segment).then(segment => {
                segmentName.segmentApi = segment.text().trim()
                segmentList.push(segmentName)
            })
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(segmentList))
        })
    }

    getSubAreaList() {
        let subAreaList = []
        cy.get('[data-testid="filter-subarea-content"] [class="truncate"]').each($subArea => {
            let subAreaName = {}
            cy.wrap($subArea).then(subArea => {
                subAreaName.subAreaApi = subArea.text().trim()
                subAreaList.push(subAreaName)
            })
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(subAreaList))
        })
    }

    getApiCustomerName() {
        let customerApi = []
        cy.get(customerNameLabelCss).each($customer => {
            cy.wrap($customer).then($customerValue => {
                let customerArray = {}
                customerArray.nameCustomer = $customerValue.text()
                customerApi.push(customerArray)
            })
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(customerApi));
        })
    }
}

module.exports = TerritoryWebPage