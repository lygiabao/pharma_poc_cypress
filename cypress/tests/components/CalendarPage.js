import {Common} from "../../support/Common";
import CalendarWebPage from "../../../models/pages/CalendarWebPage";
import HomeWebPage from "../../../models/pages/HomeWebPage";
import TerritoryWebPage from "../../../models/pages/TerritoryWebPage";

describe('Calendar Page', () => {

    let territoryWebPage = new TerritoryWebPage;
    let calendarWebPage = new CalendarWebPage;
    let homeWebPage = new HomeWebPage;

    beforeEach(() => {
        cy.visit("https://crm-beta.pharmapoc.com/");
        // cy.visit("https://crm-alpha.pharmapoc.com/");
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
        calendarWebPage.checkSelectPurpose();
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

    function clickTerritoryPage() {
        territoryWebPage.clickTerritoryPage();
        territoryWebPage.verifyTerritoryPageScreenDisplay();
    }

    it('Create new Schedule A Call fail', () => {
        calendarWebPage.verifyCalendarPageScreenDisplay();
        calendarWebPage.clickSingleIcon();
        calendarWebPage.verifyCallListLogo();
        calendarWebPage.clickScheduleCallIcon();
        calendarWebPage.verifyScheduleCallLogo();
        calendarWebPage.clickAddButton();
        calendarWebPage.verifyRequireFieldDisplay();
        calendarWebPage.clickCancelCreateCallButton();
        calendarWebPage.verifyCalendarPageScreenDisplay();
    })

    it('Create new Schedule A Call with In-store type', () => {
        clickTerritoryPage();
        territoryWebPage.getCustomerName().then(name => {
            calendarWebPage.clickCalendarPage()
            calendarWebPage.verifyCalendarPageScreenDisplay();
            calendarWebPage.clickPreviousDate()
            createScheduleCall();
            calendarWebPage.inputCustomerNameTextBox(name);
            calendarWebPage.selectCustomerName();
            calendarWebPage.selectStartTimeDropDown();
            calendarWebPage.selectPurposeDropDown();
            calendarWebPage.selectProduct();
            calendarWebPage.clickAddButton();
            calendarWebPage.verifyCreateScheduleCallSuccessToast();
            calendarWebPage.verifyCalendarPageScreenDisplay();
        });
    })

    it('Report Schedule a call with In-store type FAIL/ PASS', () => {
        calendarWebPage.clickPreviousDate()
        calendarWebPage.clickInStoreCall();
        calendarWebPage.verifyInfoCallLogo();
        calendarWebPage.clickReportCallButton();
        calendarWebPage.verifyReportCallLogo();
        calendarWebPage.clickUpdateCallButton();
        calendarWebPage.verifyRequireFieldDisplay();
        calendarWebPage.clickCancelCreateCallButton();
        calendarWebPage.verifyCalendarPageScreenDisplay();
        calendarWebPage.clickInStoreCall();
        reportCall();
    })

    it('Edit reported call: In-store', () => {
        calendarWebPage.clickPreviousDate();
        calendarWebPage.clickReportedInStoreCall();
        calendarWebPage.verifyInfoCallLogo();
        cy.wait(1000);
        calendarWebPage.clickEditButton();
        calendarWebPage.verifyUpdateReportedCallScreenDisplay();
        calendarWebPage.selectProductOutcome();
        calendarWebPage.inputQuickNoteTextBox();
        calendarWebPage.clickUpdateCallButton();
        calendarWebPage.verifyUpdateReportedCallSuccessToast();
    })

    it('Create new Schedule A Call with Remote type: Phone call', () => {
        clickTerritoryPage();
        territoryWebPage.getCustomerName().then(name => {
            calendarWebPage.clickCalendarPage()
            calendarWebPage.verifyCalendarPageScreenDisplay();
            calendarWebPage.clickPreviousDate()
            createScheduleCall();
            calendarWebPage.inputCustomerNameTextBox(name);
            calendarWebPage.selectCustomerName();
            calendarWebPage.selectStartTimeDropDown();
            calendarWebPage.clickRemoteType();
            calendarWebPage.selectPhoneCallType();
            calendarWebPage.selectPurposeDropDown();
            calendarWebPage.selectProduct();
            calendarWebPage.clickAddButton();
            calendarWebPage.verifyCreateScheduleCallSuccessToast();
            calendarWebPage.verifyCalendarPageScreenDisplay();
        })
    })

    it('Report Schedule a call with Remote type FAIL/ PASS', () => {
        calendarWebPage.clickPreviousDate();
        calendarWebPage.clickRemoteCall();
        calendarWebPage.verifyInfoCallLogo();
        calendarWebPage.clickReportCallButton();
        calendarWebPage.verifyReportCallLogo();
        calendarWebPage.clickUpdateCallButton();
        calendarWebPage.verifyRequireFieldDisplay();
        calendarWebPage.clickCancelCreateCallButton();
        calendarWebPage.verifyCalendarPageScreenDisplay();
        calendarWebPage.clickRemoteCall();
        reportCall();
    })

    it('Edit reported call: Remote', () => {
        calendarWebPage.clickPreviousDate()
        calendarWebPage.clickReportedRemoteCall();
        calendarWebPage.verifyInfoCallLogo();
        cy.wait(1000);
        calendarWebPage.clickEditButton();
        calendarWebPage.verifyUpdateReportedCallScreenDisplay();
        calendarWebPage.selectProductOutcome();
        calendarWebPage.inputQuickNoteTextBox();
        calendarWebPage.clickUpdateCallButton();
        calendarWebPage.verifyUpdateReportedCallSuccessToast();
    })

    it('Create new Schedule an activity pass', () => {
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

    it('Create new Schedule A Call with In-store type', () => {
        clickTerritoryPage();
        territoryWebPage.getCustomerName().then(name => {
            calendarWebPage.clickCalendarPage()
            calendarWebPage.verifyCalendarPageScreenDisplay();
            createScheduleCall();
            calendarWebPage.inputCustomerNameTextBox(name);
            calendarWebPage.selectCustomerName();
            calendarWebPage.selectStartTimeDropDown();
            calendarWebPage.selectPurposeDropDown();
            calendarWebPage.selectProduct();
            calendarWebPage.clickAddButton();
            calendarWebPage.verifyCreateScheduleCallSuccessToast();
            calendarWebPage.verifyCalendarPageScreenDisplay();
        })
    })

    it('Edit schedule: In-store', () => {
        calendarWebPage.clickInStoreCall();
        editCall();
    })

    it('Delete schedule: In-store', () => {
        calendarWebPage.clickInStoreCall();
        deleteCall();
    })

    it('Create new Schedule A Call with Remote type: Chat Message', () => {
        clickTerritoryPage();
        territoryWebPage.getCustomerName().then(name => {
            calendarWebPage.clickCalendarPage()
            calendarWebPage.verifyCalendarPageScreenDisplay();
            createScheduleCall();
            calendarWebPage.inputCustomerNameTextBox(name);
            calendarWebPage.selectCustomerName();
            calendarWebPage.selectStartTimeDropDown();
            calendarWebPage.clickRemoteType();
            calendarWebPage.selectChatMsgType();
            calendarWebPage.selectPurposeDropDown();
            calendarWebPage.selectProduct();
            calendarWebPage.clickAddButton();
            calendarWebPage.verifyCreateScheduleCallSuccessToast();
            calendarWebPage.verifyCalendarPageScreenDisplay();
        })
    })

    it('Edit schedule: Remote', () => {
        calendarWebPage.clickRemoteCall();
        editCall();
    })

    it('Delete schedule: Remote', () => {
        calendarWebPage.clickRemoteCall();
        deleteCall();
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

    it('Select another My Calendar', function () {
        calendarWebPage.clickMyCalenderDropDown();
        calendarWebPage.verifyDisplayCalendarDropDown();
        calendarWebPage.selectMyCalendarValue();
        calendarWebPage.verifyCalendarPageScreenDisplay();
    });

    it('Create schedule with My Calendar: Activity type', function () {
        calendarWebPage.clickMyCalenderDropDown();
        calendarWebPage.verifyDisplayCalendarDropDown();
        calendarWebPage.selectMyCalendarValue();
        calendarWebPage.verifyCalendarPageScreenDisplay();
        calendarWebPage.clickSingleIcon();
        calendarWebPage.verifyCallListLogo();
        calendarWebPage.clickScheduleActivityIcon();
        calendarWebPage.verifyScheduleActivityLogo();
        calendarWebPage.selectActivityType();
        calendarWebPage.clickAddButton();
        calendarWebPage.verifyCreateScheduleActivitySuccessToast();
        calendarWebPage.verifyCalendarPageScreenDisplay();

    });

    it('Create new Schedule call with In-store type: any day list', function () {
        clickTerritoryPage();
        territoryWebPage.getCustomerName().then(name => {
            calendarWebPage.clickCalendarPage()
            calendarWebPage.verifyCalendarPageScreenDisplay();
            calendarWebPage.clickDateTimePicker();
            calendarWebPage.verifyDateTimeScreenDisplay();
            calendarWebPage.selectAnyDayInList();
            calendarWebPage.verifyCalendarPageScreenDisplay();
            createScheduleCall();
            calendarWebPage.inputCustomerNameTextBox(name);
            calendarWebPage.selectCustomerName();
            calendarWebPage.selectStartTimeDropDown();
            calendarWebPage.selectPurposeDropDown();
            calendarWebPage.selectProduct();
            calendarWebPage.clickAddButton();
            calendarWebPage.verifyCreateScheduleCallSuccessToast();
            calendarWebPage.verifyCalendarPageScreenDisplay();
        });
    });

    it.only('Create new Schedule call with Remote type: any day list', function () {
        clickTerritoryPage();
        territoryWebPage.getCustomerName().then(name => {
            calendarWebPage.clickCalendarPage()
            calendarWebPage.verifyCalendarPageScreenDisplay();
            calendarWebPage.clickDateTimePicker();
            calendarWebPage.verifyDateTimeScreenDisplay();
            calendarWebPage.selectAnyDayInList();
            calendarWebPage.verifyCalendarPageScreenDisplay();
            createScheduleCall();
            calendarWebPage.inputCustomerNameTextBox(name);
            calendarWebPage.selectCustomerName();
            calendarWebPage.selectStartTimeDropDown();
            calendarWebPage.clickRemoteType();
            calendarWebPage.selectPhoneCallType();
            calendarWebPage.selectPurposeDropDown();
            calendarWebPage.selectProduct();
            calendarWebPage.clickAddButton();
            calendarWebPage.verifyCreateScheduleCallSuccessToast();
            calendarWebPage.verifyCalendarPageScreenDisplay();
        })
    });

    it('Create new Schedule call with Activity type: any day list', function () {
        calendarWebPage.clickDateTimePicker();
        calendarWebPage.verifyDateTimeScreenDisplay();
        calendarWebPage.selectAnyDayInList();
        calendarWebPage.verifyCalendarPageScreenDisplay();
        calendarWebPage.clickSingleIcon();
        calendarWebPage.verifyCallListLogo();
        calendarWebPage.clickScheduleActivityIcon();
        calendarWebPage.verifyScheduleActivityLogo();
        calendarWebPage.selectActivityType();
        calendarWebPage.clickAddButton();
        calendarWebPage.verifyCreateScheduleActivitySuccessToast();
        calendarWebPage.verifyCalendarPageScreenDisplay();
    });

    it('Create new Schedule call with In-store type: Prescribers', function () {
        clickTerritoryPage();
        territoryWebPage.clickPrescribersOption();
        territoryWebPage.getPrescriberName().then(name => {
            calendarWebPage.clickCalendarPage()
            calendarWebPage.verifyCalendarPageScreenDisplay();
            createScheduleCall();
            calendarWebPage.clickPrescriberCheckBox();
            calendarWebPage.inputCustomerNameTextBox(name);
            calendarWebPage.selectCustomerName();
            calendarWebPage.selectStartTimeDropDown();
            calendarWebPage.selectPurposeDropDown();
            calendarWebPage.selectProduct();
            calendarWebPage.clickAddButton();
            calendarWebPage.verifyCreateScheduleCallSuccessToast();
            calendarWebPage.verifyCalendarPageScreenDisplay();
        });
    });

    it('Create new Schedule call with Remote type: Prescribers', function () {
        clickTerritoryPage();
        territoryWebPage.clickPrescribersOption();
        territoryWebPage.getPrescriberName().then(name => {
            calendarWebPage.clickCalendarPage()
            calendarWebPage.verifyCalendarPageScreenDisplay();
            createScheduleCall();
            calendarWebPage.clickPrescriberCheckBox();
            calendarWebPage.inputCustomerNameTextBox(name);
            calendarWebPage.selectCustomerName();
            calendarWebPage.selectStartTimeDropDown();
            calendarWebPage.clickRemoteType();
            calendarWebPage.selectPhoneCallType();
            calendarWebPage.selectPurposeDropDown();
            calendarWebPage.selectProduct();
            calendarWebPage.clickAddButton();
            calendarWebPage.verifyCreateScheduleCallSuccessToast();
            calendarWebPage.verifyCalendarPageScreenDisplay();
        })
    });

    it('Click multi icon', function () {
        calendarWebPage.clickMultiIcon();
        territoryWebPage.verifyTerritoryPageScreenDisplay();
    });

});