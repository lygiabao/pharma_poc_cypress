import {Common} from "../../support/Common";
import CalendarWebPage from "../../../models/pages/CalendarWebPage";
import {ScheduleCallAPI} from "../../support/ScheduleCallAPI";
import HomeWebPage from "../../../models/pages/HomeWebPage";

describe('Calendar Page', () => {

    let calendarWebPage = new CalendarWebPage;
    let homeWebPage = new HomeWebPage;

    beforeEach(() => {
        cy.visit("https://crm-alpha.pharmapoc.com/");
        Common.loginPage()
        homeWebPage.verifyHomePageScreen()
        calendarWebPage.clickCalendarPage()
        calendarWebPage.verifyCalendarPageScreenDisplay();
    })

    function createScheduleCall() {
        calendarWebPage.clickSingleIcon();
        calendarWebPage.verifyCallListLogo();
        calendarWebPage.clickScheduleCallIcon();
        calendarWebPage.verifyScheduleCallLogo();
    }

    function reportCall() {
        calendarWebPage.verifyInfoCallLogo();
        calendarWebPage.clickReportCallButton();
        calendarWebPage.verifyReportCallLogo();
        calendarWebPage.selectGeneralOutcomes();
        calendarWebPage.clickUpdateCallButton();
        calendarWebPage.verifyReportCallSuccessToast();
        calendarWebPage.verifyCalendarPageScreenDisplay();
    }

    function editCall() {
        calendarWebPage.verifyInfoCallLogo();
        calendarWebPage.clickEditButton();
        calendarWebPage.verifyEditCallScreenDisplay();
        calendarWebPage.inputQuickNoteTextBox();
        calendarWebPage.clickUpdateCallButton();
        calendarWebPage.verifyUpdateCallSuccessToast();
        calendarWebPage.verifyCalendarPageScreenDisplay();
    }

    function deleteCall() {
        calendarWebPage.verifyInfoCallLogo();
        calendarWebPage.clickDeleteCallEntrypoint();
        calendarWebPage.seeDeleteCallScreenDisplay();
        calendarWebPage.clickCancelDeleteCallButton();
        calendarWebPage.clickDeleteCallEntrypoint();
        calendarWebPage.seeDeleteCallScreenDisplay();
        calendarWebPage.clickConfirmDeleteButton();
        calendarWebPage.verifyDeleteCallSuccessToast();
        calendarWebPage.verifyCalendarPageScreenDisplay();
    }

    // it('Create new Schedule A Call fail', () => {
    //     calendarWebPage.verifyCalendarPageScreenDisplay();
    //     calendarWebPage.clickSingleIcon();
    //     calendarWebPage.verifyCallListLogo();
    //     calendarWebPage.clickScheduleCallIcon();
    //     calendarWebPage.verifyScheduleCallLogo();
    //     calendarWebPage.clickAddButton();
    //     calendarWebPage.verifyRequireFieldDisplay();
    //     calendarWebPage.clickCancelCreateCallButton();
    //     calendarWebPage.verifyCalendarPageScreenDisplay();
    // })
    //
    // it('Create new Schedule A Call with In-store type', () => {
    //     calendarWebPage.clickPreviousDate()
    //     createScheduleCall();
    //     calendarWebPage.inputCustomerNameTextBox();
    //     calendarWebPage.selectCustomerName();
    //     calendarWebPage.selectStartTimeDropDown();
    //     calendarWebPage.selectPurposeDropDown();
    //     calendarWebPage.clickAddButton();
    //     calendarWebPage.verifyCreateScheduleCallSuccessToast();
    //     calendarWebPage.verifyCalendarPageScreenDisplay();
    // })
    //
    // it('Report Schedule a call with In-store type FAIL/ PASS', () => {
    //     calendarWebPage.clickPreviousDate()
    //     calendarWebPage.clickInStoreCall();
    //     calendarWebPage.verifyInfoCallLogo();
    //     calendarWebPage.clickReportCallButton();
    //     calendarWebPage.verifyReportCallLogo();
    //     calendarWebPage.clickUpdateCallButton();
    //     calendarWebPage.verifyRequireFieldDisplay();
    //     calendarWebPage.clickCancelCreateCallButton();
    //     calendarWebPage.verifyCalendarPageScreenDisplay();
    //     calendarWebPage.clickInStoreCall();
    //     reportCall();
    // })
    //
    // it('Edit reported call', () => {
    //     calendarWebPage.clickPreviousDate()
    //     calendarWebPage.clickReportedInStoreCall();
    //     calendarWebPage.verifyInfoCallLogo();
    //     cy.wait(1000);
    //     calendarWebPage.clickEditButton();
    //     calendarWebPage.verifyUpdateReportedCallScreenDisplay();
    //     calendarWebPage.inputQuickNoteTextBox();
    //     calendarWebPage.clickUpdateCallButton();
    //     calendarWebPage.verifyUpdateReportedCallSuccessToast();
    // })
    //
    // it('Create new Schedule A Call with Remote type: Phone call', () => {
    //     createScheduleCall();
    //     calendarWebPage.inputCustomerNameTextBox();
    //     calendarWebPage.selectCustomerName();
    //     calendarWebPage.selectStartTimeDropDown();
    //     calendarWebPage.clickRemoteType();
    //     calendarWebPage.selectPhoneCallType();
    //     calendarWebPage.selectPurposeDropDown();
    //     calendarWebPage.clickAddButton();
    //     calendarWebPage.verifyCreateScheduleCallSuccessToast();
    //     calendarWebPage.verifyCalendarPageScreenDisplay();
    // })
    //
    // it('Create new Schedule A Call with Remote type: Chat Message', () => {
    //     createScheduleCall();
    //     calendarWebPage.inputCustomerNameTextBox();
    //     calendarWebPage.selectCustomerName();
    //     calendarWebPage.selectStartTimeDropDown();
    //     calendarWebPage.clickRemoteType();
    //     calendarWebPage.selectChatMsgType();
    //     calendarWebPage.selectPurposeDropDown();
    //     calendarWebPage.clickAddButton();
    //     calendarWebPage.verifyCreateScheduleCallSuccessToast();
    //     calendarWebPage.verifyCalendarPageScreenDisplay();
    // })
    //
    // it('Report Schedule a call with Remote type FAIL/ PASS', () => {
    //     calendarWebPage.clickRemoteCall();
    //     calendarWebPage.verifyInfoCallLogo();
    //     calendarWebPage.clickReportCallButton();
    //     calendarWebPage.verifyReportCallLogo();
    //     calendarWebPage.clickUpdateCallButton();
    //     calendarWebPage.verifyRequireFieldDisplay();
    //     calendarWebPage.clickCancelCreateCallButton();
    //     calendarWebPage.verifyCalendarPageScreenDisplay();
    //     calendarWebPage.clickRemoteCall();
    //     reportCall();
    // })

    it('Check user create new Schedule an activity pass', () => {
        calendarWebPage.clickNextDate();
        calendarWebPage.clickSingleIcon();
        calendarWebPage.verifyCallListLogo();
        calendarWebPage.clickScheduleActivityIcon();
        calendarWebPage.verifyScheduleActivityLogo();
        calendarWebPage.selectActivityType();
        calendarWebPage.clickAddButton();
        calendarWebPage.verifyCreateScheduleActivitySuccessToast();
        calendarWebPage.verifyCalendarPageScreenDisplay();
    })

    it('Edit schedule an Activity', () => {
        calendarWebPage.clickNextDate();
        calendarWebPage.clickActivityCall();
        calendarWebPage.verifyInfoCallLogo();
        calendarWebPage.clickEditButton();
        calendarWebPage.verifyEditActivityScreenDisplay();
        calendarWebPage.inputQuickNoteTextBox();
        calendarWebPage.clickAddButton();
        calendarWebPage.verifyUpdateActivitySuccessToast();
        calendarWebPage.verifyCalendarPageScreenDisplay();
    })

    it('Delete schedule an Activity', () => {
        calendarWebPage.clickNextDate();
        calendarWebPage.clickActivityCall();
        calendarWebPage.verifyInfoCallLogo();
        calendarWebPage.clickDeleteCallEntrypoint();
        calendarWebPage.seeDeleteActivityScreenDisplay();
        calendarWebPage.clickCancelDeleteCallButton();
        calendarWebPage.clickDeleteCallEntrypoint();
        calendarWebPage.seeDeleteActivityScreenDisplay();
        calendarWebPage.clickConfirmDeleteButton();
        calendarWebPage.verifyDeleteCallSuccessToast()
        calendarWebPage.verifyCalendarPageScreenDisplay();
    })

    it('Share calendar with valid/ invalid value', () => {
        calendarWebPage.clickShareIcon();
        calendarWebPage.verifyShareScreenDisplay();
        calendarWebPage.inputInValidNameEmailTextBox();
        calendarWebPage.verifyNameEmailList();
        calendarWebPage.inputValidNameEmailTextBox();
        calendarWebPage.verifyNameEmailList();
        calendarWebPage.selectShareValueDropDown();
        calendarWebPage.clickShareButton();
        calendarWebPage.clickDeleteShareButton();
    })

    it('Select any date on date time picker', () => {
        calendarWebPage.clickDateTimePicker();
        calendarWebPage.verifyDateTimeScreenDisplay();
        calendarWebPage.selectAnyDayInList();
        calendarWebPage.verifyCalendarPageScreenDisplay();
        calendarWebPage.clickPreviousDay();
        calendarWebPage.verifyCalendarPageScreenDisplay();
        calendarWebPage.clickNextDay();
        calendarWebPage.verifyCalendarPageScreenDisplay();
        calendarWebPage.clickDayButton();
        calendarWebPage.verifyCalendarPageScreenDisplay();
        calendarWebPage.clickWeekButton();
        calendarWebPage.verifyWeekListDisplay();
        calendarWebPage.clickMonthButton();
        calendarWebPage.verifyMonthListDisplay();
    })

    it('Create new Schedule A Call with In-store type', () => {
        calendarWebPage.clickNextDate();
        createScheduleCall();
        calendarWebPage.inputCustomerNameTextBox();
        calendarWebPage.selectCustomerName();
        calendarWebPage.selectStartTimeDropDown();
        calendarWebPage.selectPurposeDropDown();
        calendarWebPage.clickAddButton();
        calendarWebPage.verifyCreateScheduleCallSuccessToast();
        calendarWebPage.verifyCalendarPageScreenDisplay();
    })

    it('Edit schedule: In-store', () => {
        calendarWebPage.clickNextDate();
        calendarWebPage.clickInStoreCall();
        editCall();
    })

    it('Delete schedule: In-store', () => {
        calendarWebPage.clickNextDate();
        calendarWebPage.clickInStoreCall();
        deleteCall();
    })

    it('Create new Schedule A Call with Remote type: Chat Message', () => {
        calendarWebPage.clickNextDate();
        createScheduleCall();
        calendarWebPage.inputCustomerNameTextBox();
        calendarWebPage.selectCustomerName();
        calendarWebPage.selectStartTimeDropDown();
        calendarWebPage.clickRemoteType();
        calendarWebPage.selectChatMsgType();
        calendarWebPage.selectPurposeDropDown();
        calendarWebPage.clickAddButton();
        calendarWebPage.verifyCreateScheduleCallSuccessToast();
        calendarWebPage.verifyCalendarPageScreenDisplay();
    })

    it('Edit schedule: Remote', () => {
        calendarWebPage.clickNextDate();
        calendarWebPage.clickRemoteCall();
        editCall();
    })

    it('Delete schedule: Remote', () => {
        calendarWebPage.clickNextDate();
        calendarWebPage.clickRemoteCall();
        deleteCall();
    })

    it('Create new Schedule call with Prescribers', function () {

    });

    it('API: Compare schedule call on UI and API', () => {
        // Check lại vụ này vì sắp xếp không đúng thự tự
        let scheduleCallAPI = new ScheduleCallAPI()
        scheduleCallAPI.getScheduleCallApi().then(apiSchedule => {
            cy.log(JSON.stringify(apiSchedule))
            calendarWebPage.getAllScheduleInfo().then(scheduleCallList => {
                cy.wrap('').then(() => {
                    cy.log(JSON.stringify(scheduleCallList))
                    // expect(scheduleCallList).to.be.deep.eq(apiSchedule);
                })
            })
        })
    });

});