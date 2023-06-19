const singleIconCss = '[data-testid="createCalendarIcon"]'
const calendarPageLogo1Css = '[class="flex-1"]'
const calendarPageLogo2Css = '[class*="flex items-start"]'
const calendarPageLogo3Css = '[class="poc-loader-items"]'
const callListCss = '[data-position="bottom"]'
const scheduleCallIconCss = 'Schedule a call'
const scheduleActivityIconCss = 'Schedule an activity'
const addButtonCss = '[data-testid="addCalendar"]'
const newScheduleLogoCss = '[data-testid="create-event-modal"]'
const requiredFieldCss = 'Required'
const cancelCreateCallButtonCss = '[data-testid="cancelCalendar"]'
const customerNameTextBoxCss = '[class="poc-select-search-input"]'
const customerNameListCss = '[class="poc-select-popover overflow-auto"]'
const customerNameValueCss = '[class*="poc-select-dropdown-item"] > div'
const purposeDropDownListCss = '[data-testid="purposeList"]'
const purposeDropDownLogoCss = '[data-testid="select-popover-purposeList"]'
const purposeValueCss = '[class*="inline-flex w-full items-center"]'
const createCallSuccessCss = '[class*="poc-toast-content text-text-primary-color"]'
const callScheduledCss = "Call scheduled"
const callActivityCss = "Activity scheduled"
const activityTypeDropDownCss = '[data-testid="select-trigger-activityTypeList"]'
const activityTypeLogoCss = '[class="poc-select-popover overflow-auto"]'
const activityTypeValueCss = '[class*="inline-flex w-full items-center"]'
const remoteTypeDropDownCss = 'label[data-testid="remoteTab"]'
const remoteTypeValueCss = '[name="methodId"]'
const inStoreCallIndexCss = 'Scheduled: In-store'
const remoteIndexCss = 'Scheduled: Remote'
const activityIndexCss = 'Off-territory - Sick'
const callInfoLogoCss = '[class*="poc-drawer-content"]'
const updateCallButtonCss = '[data-testid="updateCall"]'
const reportCallButtonCss = '[data-testid="reportCall"]'
const reportCallLogoCss = '[class="poc-drawer-content overflow-y-auto px-16"]'
const reportCallTitleCss = 'Report a call'
const generalOutComesDropDownCss = '[data-testid="outcomes"]'
const generalOutcomesLogoCss = '[data-testid="select-popover-outcomes"]'
const generalOutComesValueCss = '[class*="poc-select-dropdown-item"]'
const reportCallSuccessToastCss = "Registration successful"
const shareIconCss = '[data-testid="shareCalendarIcon"]'
const shareScreenLogoCss = '[role="dialog"]'
const shareCalendarTitleCss = 'Share my calendar with'
const nameEmailTextBoxCss = '[data-testid="shareCalendarText"]'
const nameEmailClearCss = '[placeholder="Name/Email"]'
const shareValueCss = '[role="option"]'
const deleteShareButtonCss = '[data-testid*="removeEmail"]'
const shareButtonCss = '[data-testid="shareCalendarButton"]'
const nameEmailListCss = '[data-testid="select-popover-shareCalendarText"]'
const startTimeDropDownCss = '[data-testid="select-trigger-startTimeCall"]'
const startTimeValueCss = '[class*="inline-flex w-full items-center"]'
const dateTimePicker = '[data-testid="dateTimePicker"]'
const dayInListCss = '[class*="react-calendar__tile"]'
const nextDayCss = '[data-testid="nextDateButton"]'
const previousDayCss = '[data-testid="previousDateButton"]'
const dayEntrypointCss = 'Day'
const weekListLogoCss = '[class*="w-full border-l"]'
const weekEntrypointCss = 'Week'
const monthEntrypointCss = 'Month'
const monthListLogoCss = '[role="rowgroup"]'
const editCallTitleCss = 'Update a scheduled call'
const editActivityTitleCss = 'Update an activity'
const editCallButtonCss = '[data-testid="editCall"]'
const quickNoteTextBoxCss = '[placeholder="Quick note"]'
const callUpdatedCss = 'Call updated'
const activityUpdatedCss = 'Activity updated'
const deleteCallEntrypoint = '[data-testid="deleteCall"]'
const deleteCallLogoCss = '[class*="poc-modal-panel"]'
const deleteCallTitleCss = 'Delete a scheduled call?'
const deleteActivityTitleCss = 'Delete an activity?'
const cancelDeleteButton = '[data-testid="cancelDeleteSchedule"]'
const confirmDeleteButtonCss = '[data-testid="deleteSchedule"]'
const deleteCallSuccessToastCss = 'Call deleted'
const reportInStoreCallIndexCss = 'Reported: In-store'
const reportRemoteCallIndexCss = 'Reported: Remote'
const updateReportedCallTitleCss = 'Update a reported call'
const updateReportedCalSuccessTitleCss = 'Registration successful'
const previousDateCss = '[data-testid="previousDateButton"]'
const nextDateCss = '[data-testid="nextDateButton"]'
const calendarPageCss = 'Calendar'
const productListCss = '[data-testid="select-option"]'
const myCalendarDropDownCss = '[aria-label="My calendars"]'
const myCalendarLogoCss = '[class*="poc-popover-dropdown"]'
const myCalendarValueCss = '[class*="poc-select-dropdown-item"]'
const prescribersCheckBox = '[data-testid="prescriberRadio"]'
const selectOutComeCss = '[data-testid="select-trigger-productOutcomes"] input'
const outcomeDropDownCss = '[class*="poc-popover-dropdown"]'

class CalendarWebPage {



    clickCalendarPage() {
        cy.contains(calendarPageCss).click()
    }

    clickAddButton() {
        cy.get(addButtonCss).click()
    }

    clickScheduleCallIcon() {
        cy.contains(scheduleCallIconCss).click();
    }

    clickScheduleActivityIcon() {
        cy.contains(scheduleActivityIconCss).click();
    }

    verifyCallListLogo() {
        cy.get(callListCss).should('be.visible');
    }

    clickSingleIcon() {
        cy.get(singleIconCss).click()
    }

    verifyCalendarPageScreenDisplay() {
        cy.get(calendarPageLogo1Css).should('be.visible');
        cy.get(calendarPageLogo2Css).should('be.visible');
        cy.get(calendarPageLogo3Css).should('not.exist');
    }

    verifyScheduleCallLogo() {
        cy.get(newScheduleLogoCss).should('be.visible');
        cy.contains(scheduleCallIconCss).should('be.visible');
    }

    verifyScheduleActivityLogo() {
        cy.get(newScheduleLogoCss).should('be.visible');
        cy.contains(scheduleActivityIconCss).should('be.visible');
    }

    verifyRequireFieldDisplay() {
        cy.contains(requiredFieldCss).should("have.length", 1);
    }

    clickCancelCreateCallButton() {
        cy.get(cancelCreateCallButtonCss).click()
    }

    inputCustomerNameTextBox(name) {
        cy.log(name)
        cy.get(customerNameTextBoxCss).type(name);
        cy.get(customerNameListCss).should('be.visible');
    }

    selectCustomerName() {
        let randomCustomerName
        cy.get(customerNameValueCss).then(customerName => {
            randomCustomerName = customerName.eq(Math.floor(Math.random()*customerName.length))
            cy.get(randomCustomerName).click()
        })
    }

    selectPurposeDropDown() {
        let randomPurpose
        cy.get(purposeDropDownListCss).click()
        cy.get(purposeDropDownLogoCss).should('be.visible');
        cy.get(purposeValueCss).then(purpose => {
            randomPurpose = purpose.eq(Math.floor(Math.random()*purpose.length))
            cy.get(randomPurpose).click()
        })
    }

    clickPurposeDropDown() {
        cy.get(purposeDropDownListCss).click()
        cy.get(purposeDropDownLogoCss).should('be.visible');
    }

    verifyCreateScheduleCallSuccessToast() {
        cy.get(createCallSuccessCss).should('be.visible');
        cy.contains(callScheduledCss).should('be.visible');
    }

    verifyCreateScheduleActivitySuccessToast() {
        cy.get(createCallSuccessCss).should('be.visible');
        cy.contains(callActivityCss).should('be.visible');
    }

    selectActivityType() {
        cy.get(activityTypeDropDownCss).click()
        cy.get(activityTypeLogoCss).should("be.visible")
        cy.get(activityTypeValueCss).eq(0).click()
    }

    clickRemoteType() {
        cy.get(remoteTypeDropDownCss, {timeout: 6000}).should("be.visible").click()
        cy.get(callListCss).should("be.visible")
    }

    selectPhoneCallType() {
        cy.get(remoteTypeValueCss).eq(0).click()
    }

    selectChatMsgType() {
        cy.get(remoteTypeValueCss).eq(1).click()
    }

    clickInStoreCall() {
        cy.contains(inStoreCallIndexCss).eq(0).click()
    }

    clickRemoteCall() {
        cy.contains(remoteIndexCss).eq(0).click()
    }

    clickActivityCall() {
        cy.contains(activityIndexCss).eq(0).click()
    }

    verifyInfoCallLogo() {
        cy.get(callInfoLogoCss).should("be.visible")
    }

    clickUpdateCallButton() {
        cy.get(updateCallButtonCss).click()
    }

    clickReportCallButton() {
        cy.get(reportCallButtonCss).click()
    }

    verifyReportCallLogo() {
        cy.get(reportCallLogoCss).should("be.visible")
        cy.contains(reportCallTitleCss).should("be.visible")
    }

    selectGeneralOutcomes() {
        cy.get(generalOutComesDropDownCss).click()
        cy.get(generalOutcomesLogoCss).should("be.visible")
        let randomOutcome
        cy.get(generalOutComesValueCss).then(outcome => {
            randomOutcome = outcome.eq(Math.floor(Math.random()*outcome.length))
            cy.get(randomOutcome).click()
        })
    }

    verifyReportCallSuccessToast() {
        cy.get(createCallSuccessCss).should('be.visible');
        cy.contains(reportCallSuccessToastCss).should('be.visible');
    }

    clickShareIcon() {
        cy.get(shareIconCss).click()
    }

    verifyShareScreenDisplay() {
        cy.get(shareScreenLogoCss).should("be.visible")
        cy.contains(shareCalendarTitleCss).should("be.visible")
    }

    inputValidNameEmailTextBox() {
        cy.get(nameEmailClearCss).clear({force: true})
        cy.get(nameEmailTextBoxCss).type("admin")
    }


    selectShareValueDropDown() {
        cy.get(shareValueCss).click({multiple: true})
    }

    clickShareButton() {
        cy.get(shareButtonCss).click()
    }

    clickDeleteShareButton() {
        cy.get(deleteShareButtonCss).should('be.visible').then(e => {
            Cypress.$(e).click();
        })
    }

    verifyNameEmailList() {
        cy.get(nameEmailListCss).should("be.visible")
    }

    inputInValidNameEmailTextBox() {
        cy.get(nameEmailTextBoxCss).type("abc")
    }

    selectStartTimeDropDown() {
        cy.get(startTimeDropDownCss).click()
        cy.get(callListCss).should("be.visible")

        let randomStartTime
        cy.get(startTimeValueCss).then(startTime => {
            randomStartTime = startTime.eq(Math.floor(Math.random()*startTime.length))
            cy.get(randomStartTime).click()
        })
    }

    selectProduct() {
        let randomProduct
        cy.get(productListCss).then(productList => {
            randomProduct = productList.eq(Math.floor(Math.random()*productList.length))
            cy.get(randomProduct).click({force: true})
        })
    }

    clickDateTimePicker() {
        cy.get(dateTimePicker).click()
    }

    verifyDateTimeScreenDisplay() {
        cy.get(callListCss).should('be.visible')
    }

    selectAnyDayInList() {
        cy.get(dayInListCss).eq(0).click()
    }

    clickPreviousDay() {
        cy.get(previousDayCss).click();
    }

    clickNextDay() {
        cy.get(nextDayCss).click()
    }


    clickDayButton() {
        cy.contains(dayEntrypointCss).click()
    }

    clickWeekButton() {
        cy.contains(weekEntrypointCss).click()
    }

    clickMonthButton() {
        cy.contains(monthEntrypointCss).click()
    }

    verifyWeekListDisplay() {
        cy.get(weekListLogoCss).should("have.length", 7)
    }

    verifyMonthListDisplay() {
        cy.get(monthListLogoCss).should("have.length", 5)
    }

    clickEditButton() {
        cy.get(editCallButtonCss).click()
    }

    verifyEditCallScreenDisplay() {
        cy.get(reportCallLogoCss).should("be.visible")
        cy.contains(editCallTitleCss).should('be.visible')
    }

    verifyEditActivityScreenDisplay() {
        cy.get(reportCallLogoCss).should("be.visible")
        cy.contains(editActivityTitleCss).should('be.visible')
    }

    inputQuickNoteTextBox() {
        cy.get(quickNoteTextBoxCss).type('abc')
    }

    verifyUpdateCallSuccessToast() {
        cy.get(createCallSuccessCss).should('be.visible');
        cy.contains(callUpdatedCss).should('be.visible')
    }

    verifyUpdateActivitySuccessToast() {
        cy.get(createCallSuccessCss).should('be.visible');
        cy.contains(activityUpdatedCss).should('be.visible')
    }

    clickDeleteCallEntrypoint() {
        cy.get(deleteCallEntrypoint).click()
    }

    seeDeleteCallScreenDisplay() {
        cy.get(deleteCallLogoCss).should('be.visible')
        cy.contains(deleteCallTitleCss).should('be.visible')
    }

    seeDeleteActivityScreenDisplay() {
        cy.get(deleteCallLogoCss).should('be.visible')
        cy.contains(deleteActivityTitleCss).should('be.visible')
    }

    clickCancelDeleteCallButton() {
        cy.get(cancelDeleteButton).click()
    }

    clickConfirmDeleteButton() {
        cy.get(confirmDeleteButtonCss).click()
    }

    verifyDeleteCallSuccessToast() {
        cy.get(createCallSuccessCss).should('be.visible');
        cy.contains(deleteCallSuccessToastCss).should('be.visible')
    }

    clickReportedInStoreCall() {
        cy.contains(reportInStoreCallIndexCss).eq(0).click()
    }

    clickReportedRemoteCall() {
        cy.contains(reportRemoteCallIndexCss).eq(0).click()
    }

    verifyUpdateReportedCallScreenDisplay() {
        cy.get(reportCallLogoCss).should("be.visible")
        cy.contains(updateReportedCallTitleCss).should('be.visible')
    }

    verifyUpdateReportedCallSuccessToast() {
        cy.get(createCallSuccessCss).should('be.visible');
        cy.contains(callUpdatedCss).should('be.visible');
    }

    clickPreviousDate() {
        cy.get(previousDateCss).click()
    }

    clickNextDate() {
        cy.get(nextDateCss).click()
    }

    _getScheduleDetails() {
        let cardData = {}
        cy.get('[class="text-base font-bold"]').then($title => cardData.pharmacyName = $title.text().trim())
        // cy.get('[class="ml-4 mr-16"]').then($price => cardData.pharmacyType=$price.text().trim())
        return new Cypress.Promise(resolve => resolve(cardData))
    }

    getAllScheduleInfo() {
        // Create new empty array
        let allScheduleInfo = [];
        // Loop qua toàn bộ element và lấy ra từng bộ info
        cy.get('.rbc-event').each($card => {
            // Dùng wrap để duyệt toàn bộ mảng và within để giảm scope lại
            cy.wrap($card).within(() => {
                this._getScheduleDetails().then(cartData => allScheduleInfo.push(cartData))
            })
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(allScheduleInfo));
        })
    }

    _getPurposeDetails() {
        let purpose = {};
        cy.get('[class*="inline-flex w-full items-center"]').then($title => purpose.purposeName = $title.text().trim().replace('Product detailing', ''))
        return new Cypress.Promise(resolve => resolve(purpose))
    }
    getAllPurpose() {
        let allPurposeInfo = [];
        cy.get('[class*="poc-select-dropdown-item"]').each($purposeList => {
            cy.wrap($purposeList).within(() => {
                this._getPurposeDetails().then(purposeData => allPurposeInfo.push(purposeData))
            })
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(allPurposeInfo))
        })
    }

    _getMyCalendars() {
        let myCalendar = {};
        cy.get('div').then($fullName => myCalendar.fullName = $fullName.text().trim())
        return new Cypress.Promise(resolve => resolve(myCalendar))
    }

    getMyCalendars() {
        let allMyCalendar = [];
        cy.get('[class="poc-select-dropdown-item cursor-pointer text-sm hover:bg-[var(--poc-item-selected-bg)]"]').each($myCalendar => {
            cy.wrap($myCalendar).within(() => {
                this._getMyCalendars().then(myCalendar => allMyCalendar.push(myCalendar))
            })
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(allMyCalendar));
        })
    }

    clickMyCalenderDropDown() {
        cy.get(myCalendarDropDownCss).click()
    }

    verifyDisplayCalendarDropDown() {
        cy.get(myCalendarLogoCss).should("be.visible")
    }

    selectMyCalendarValue() {
        let randomMyCalendar
        cy.get(myCalendarValueCss).then(myCalendar => {
            randomMyCalendar = myCalendar.eq(Math.floor(Math.random()*myCalendar.length))
            cy.get(randomMyCalendar).click()
        })
    }

    clickPrescriberCheckBox() {
        cy.get(prescribersCheckBox).click()
        cy.get('[class="mb-8 mt-12"]').eq(0).then(abc => {
            expect(abc.text()).equal("Prescriber*");
        })
    }

    selectProductOutcome() {
        cy.get(selectOutComeCss).should(() => {
        }).then($outComeValue => {
            if($outComeValue.length) {
                let randomOutcome
                cy.get(selectOutComeCss).then(outcome => {
                    randomOutcome=outcome.eq(Math.floor(Math.random()*outcome.length))
                    cy.get(randomOutcome).click()
                })
                cy.get(outcomeDropDownCss).should("be.visible")
                cy.contains('Interested').click()
            } else {
                cy.log("Do not exist Product")
            }
        })
    }
}

module.exports = CalendarWebPage