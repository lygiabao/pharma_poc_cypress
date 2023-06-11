export default class Test {

    constructor(component){
        this.component=component;
    }

    static singleIconCss = () => cy.contains("Single")
    static calendarPageLogo1Css = () => cy.get('[class="flex-1"]')
    static calendarPageLogo2Css = () => cy.get('[class="flex h-full"]')
    static callListCss = () => cy.get('[data-position="bottom"]')
    static scheduleCallIconCss = () => cy.contains('Schedule a call')
    static scheduleActivityIconCss = () => cy.contains('Schedule an activity')
    static addButtonCss = () => cy.get('[data-testid="addCalendar"]')
    static newScheduleLogoCss = () => cy.get('[data-testid="create-event-modal"]')
    static requiredFieldCss = () => cy.contains('Required')
    static cancelCreateCallButtonCss = () => cy.get('[data-testid="cancelCalendar"]')

    clickAddButton() {
        Test.addButtonCss().click()
    }

    clickScheduleCallIcon() {
        Test.scheduleCallIconCss().click();
    }

    clickScheduleActivityIcon() {
        Test.scheduleActivityIconCss().click();
    }

    verifyCallListLogo() {
        Test.callListCss().should('be.visible');
    }

    clickSingleIcon() {
        Test.singleIconCss().click()
    }

    verifyCalendarPageScreenDisplay() {
        Test.calendarPageLogo1Css().should('be.visible');
        Test.calendarPageLogo2Css().should('be.visible');
    }

    verifyScheduleCallLogo() {
        Test.newScheduleLogoCss().should('be.visible');
        Test.scheduleCallIconCss().should('be.visible');
    }

    verifyScheduleActivityLogo() {
        Test.newScheduleLogoCss().should('be.visible');
        Test.scheduleActivityIconCss().should('be.visible');
    }

    verifyRequireFieldDisplay() {
        Test.requiredFieldCss().should("have.length", 1);
    }

    clickCancelCreateCallButton() {
        Test.cancelCreateCallButtonCss().click()
    }

    static customerNameTextBoxCss = () => cy.get('[data-testid="autocomplete-input"]')
    static customerNameListCss = () => cy.get('[data-testid="autocomplete-list"]')
    static customerNameValueCss = () => cy.get('[data-testid="autocomplete-item"]')
    inputCustomerNameTextBox() {
        Test.customerNameTextBoxCss().type('abc');
        Test.customerNameListCss().should('be.visible');
    }

    selectCustomerName() {
        Test.customerNameValueCss().eq(0).click()
    }

    static purposeDropDownListCss = () => cy.get('[data-testid="purposeList"]')
    static purposeDropDownLogoCss = () => cy.get('[data-testid="select-popover-purposeList"]')
    static purposeValueCss = () => cy.get('[class*="inline-flex w-full items-center"]')
    selectPurposeDropDown() {
        Test.purposeDropDownListCss().click()
        Test.purposeDropDownLogoCss().should('be.visible');
        Test.purposeValueCss().click({ multiple: true })
    }

    static createCallSuccessCss = () => cy.get('[class*="poc-toast-content text-text-primary-color"]')
    static callScheduledCss = () => cy.contains("Call scheduled")
    verifyCreateScheduleCallSuccessToast() {
        Test.createCallSuccessCss().should('be.visible');
        Test.callScheduledCss().should('be.visible');
    }

    static callActivityCss = () => cy.contains("Activity scheduled")
    verifyCreateScheduleActivitySuccessToast() {
        Test.createCallSuccessCss().should('be.visible');
        Test.callActivityCss().should('be.visible');
    }

    static activityTypeDropDownCss = () => cy.get('[data-testid="select-trigger-activityTypeList"]')
    static activityTypeLogoCss = () => cy.get('[class="poc-select-popover overflow-auto"]')
    static activityTypeValueCss =() => cy.get('[class*="inline-flex w-full items-center"]')
    selectActivityType() {
        Test.activityTypeDropDownCss().click()
        Test.activityTypeLogoCss().should("be.visible")
        Test.activityTypeValueCss().eq(0).click()
    }

    static remoteTypeDropDownCss = () => cy.get('label[data-testid="remoteTab"]', { timeout: 6000 })
    clickRemoteType() {
        Test.remoteTypeDropDownCss().should("be.visible").click()
        Test.callListCss().should("be.visible")
    }

    static remoteTypeValueCss = () => cy.get('[name="methodId"]')
    selectPhoneCallType() {
        Test.remoteTypeValueCss().eq(0).click()
    }

    selectChatMsgType() {
        Test.remoteTypeValueCss().eq(1).click()
    }

    static inStoreCallIndexCss = () => cy.contains('Scheduled: In-store')
    clickInStoreCall() {
        Test.inStoreCallIndexCss().eq(0).click()
    }

    static remoteIndexCss = () => cy.contains('Scheduled: Remote')
    clickRemoteCall() {
        Test.remoteIndexCss().eq(0).click()
    }

    static callInfoLogoCss = () => cy.get('[class*="poc-drawer-content')
    verifyInfoCallLogo() {
        Test.callInfoLogoCss().should("be.visible")
    }

    static updateCallButtonCss = () => cy.get('[data-testid="updateCall"]')
    clickUpdateCallButton() {
        Test.updateCallButtonCss().click()
    }

    static reportCallButtonCss = () => cy.get('[data-testid="reportCall"]')
    clickReportCallButton() {
        Test.reportCallButtonCss().click()
    }

    static reportCallLogoCss = () => cy.get('[class="poc-drawer-content overflow-y-auto px-16"]')
    static reportCallTitleCss = () => cy.contains('Report a call')
    verifyReportCallLogo() {
        Test.reportCallLogoCss().should("be.visible")
        Test.reportCallTitleCss().should("be.visible")
    }

    static generalOutComesDropDownCss = () => cy.get('[data-testid="outcomes"]')
    static generalOutcomesLogoCss = () => cy.get('[data-testid="select-popover-outcomes"]')
    static generalOutComesValueCss = () => cy.get('[class*="poc-select-dropdown-item"]')
    selectGeneralOutcomes() {
        Test.generalOutComesDropDownCss().click()
        Test.generalOutcomesLogoCss().should("be.visible")
        Test.generalOutComesValueCss().click({multiple: true})
    }

    static reportCallSuccessToastCss = () => cy.contains("Registration successful")
    verifyReportCallSuccessToast() {
        Test.createCallSuccessCss().should('be.visible');
        Test.reportCallSuccessToastCss().should('be.visible');
    }

    static shareIconCss = () => cy.get('[data-testid="shareCalendarIcon"]')
    clickShareIcon() {
        Test.shareIconCss().click()
    }

    static shareScreenLogoCss = () => cy.get('[role="dialog"]')
    static shareCalendarTitleCss = () => cy.contains('Share my calendar with')
    verifyShareScreenDisplay() {
        Test.shareScreenLogoCss().should("be.visible")
        Test.shareCalendarTitleCss().should("be.visible")
    }

    static nameEmailTextBoxCss = () => cy.get('[data-testid="shareCalendarText"]')
    static nameEmailClearCss = () => cy.get('[placeholder="Name/Email"]')
    inputValidNameEmailTextBox() {
        Test.nameEmailClearCss().clear({force: true})
        Test.nameEmailTextBoxCss().type("admin")
    }

    static shareValueCss = () => cy.get('[role="option"]')
    selectShareValueDropDown() {
        Test.shareValueCss().click({multiple: true})
    }

    static shareButtonCss = () => cy.get('[data-testid="shareCalendarButton"]')
    clickShareButton() {
        Test.shareButtonCss().click()
    }

    static deleteShareButtonCss = () => cy.get('[data-testid*="removeEmail"]')
    clickDeleteShareButton() {
        Test.deleteShareButtonCss().should('be.visible').then(e => {
            Cypress.$(e).click();
        })
    }

    static nameEmailListCss = () => cy.get('[data-testid="select-popover-shareCalendarText"]')
    verifyNameEmailList() {
        Test.nameEmailListCss().should("be.visible")
    }

    inputInValidNameEmailTextBox() {
        Test.nameEmailTextBoxCss().type("abc")
    }

    static startTimeDropDownCss = () => cy.get('[data-testid="select-trigger-startTimeCall"]')
    static startTimeValueCss = () => cy.get('[class*="inline-flex w-full items-center"]')
    selectStartTimeDropDown(index) {
        Test.startTimeDropDownCss().click()
        Test.callListCss().should("be.visible")
        Test.startTimeValueCss().eq(index).click()
    }

    static dateTimePicker = () => cy.get('[data-testid="dateTimePicker"]')
    clickDateTimePicker() {
        Test.dateTimePicker().click()
    }

    verifyDateTimeScreenDisplay() {
        Test.callListCss().should('be.visible')
    }

    static dayInListCss = () => cy.get('[class*="react-calendar__tile"]')
    selectAnyDayInList() {
        Test.dayInListCss().eq(0).click()
    }

    static previousDayCss = () => cy.get('[data-testid="previousDateButton"]')
    clickPreviousDay() {
        Test.previousDayCss().click();
    }

    static nextDayCss = () => cy.get('[data-testid="nextDateButton"]')
    clickNextDay() {
        Test.nextDayCss().click()
    }

    static dayEntrypointCss = () => cy.contains('Day')
    clickDayButton() {
        Test.dayEntrypointCss().click()
    }

    static weekEntrypointCss = () => cy.contains('Week')
    clickWeekButton() {
        Test.weekEntrypointCss().click()
    }

    static monthEntrypointCss = () => cy.contains('Month')
    clickMonthButton() {
        Test.monthEntrypointCss().click()
    }

    static weekListLogoCss = () => cy.get('[class*="w-full border-l"]')
    verifyWeekListDisplay() {
        Test.weekListLogoCss().should("have.length", 7)
    }

    static monthListLogoCss = () => cy.get('[role="rowgroup"]')
    verifyMonthListDisplay() {
        Test.monthListLogoCss().should("have.length", 5)
    }

    static editCallButtonCss = () => cy.get('[data-testid="editCall"]')
    clickEditButton() {
        Test.editCallButtonCss().click()
    }

    static editCallTitleCss = () => cy.contains('Update a scheduled call')
    verifyEditCallScreenDisplay() {
        Test.reportCallLogoCss().should('be.visible')
        Test.editCallTitleCss().should('be.visible')
    }

    static quickNoteTextBoxCss = () => cy.get('[placeholder="Quick note"]')
    inputQuickNoteTextBox() {
        Test.quickNoteTextBoxCss().type('abc')
    }

    static callUpdatedCss = () => cy.contains('Call updated')
    verifyUpdateCallSuccessToast() {
        Test.createCallSuccessCss().should('be.visible')
        Test.callUpdatedCss().should('be.visible')
    }

    static deleteCallEntrypoint = () => cy.get('[data-testid="deleteCall"]')
    clickDeleteCallEntrypoint() {
        Test.deleteCallEntrypoint().click()
    }

    static deleteCallLogoCss = () => cy.get('[class*="poc-modal-panel"]')
    static deleteCallTitleCss = () => cy.contains('Delete a scheduled call?')
    seeDeleteCallScreenDisplay() {
        Test.deleteCallLogoCss().should('be.visible')
        Test.deleteCallLogoCss().should('be.visible')
    }

    static cancelDeleteButton = () => cy.get('[data-testid="cancelDeleteSchedule"]')
    clickCancelDeleteCallButton() {
        Test.cancelDeleteButton().click()
    }

    static confirmDeleteButtonCss = () => cy.get('[data-testid="deleteSchedule"]')
    clickConfirmDeleteButton() {
        Test.confirmDeleteButtonCss().click()
    }

    static deleteCallSuccessToastCss = () => cy.contains('Call deleted')
    verifyDeleteCallSuccessToast() {
        Test.deleteCallSuccessToastCss().should('be.visible')
    }

    static reportInStoreCallIndexCss = () => cy.contains('Reported: In-store')
    clickReportedInStoreCall() {
        Test.reportInStoreCallIndexCss().eq(0).click()
    }

    static updateReportedCallTitleCss = () => cy.contains('Update a reported call')
    verifyUpdateReportedCallScreenDisplay() {
        Test.reportCallLogoCss().should('be.visible')
        Test.updateReportedCallTitleCss().should('be.visible')
    }

    static updateReportedCalSuccessTitleCss = () => cy.contains('Registration successful')
    verifyUpdateReportedCallSuccessToast() {
        Test.createCallSuccessCss().should('be.visible');
        Test.updateReportedCalSuccessTitleCss().should('be.visible');
    }
}
module.exports = Test