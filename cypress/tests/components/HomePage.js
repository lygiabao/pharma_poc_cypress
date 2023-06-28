import HomeWebPage from "../../../models/pages/HomeWebPage";
import {Common} from "../../support/Common";

describe('Home Page', () => {
    let homeWebPage = new HomeWebPage;

    beforeEach(() => {
        cy.visit("https://crm-beta.pharmapoc.com/");
        Common.loginPage()
        homeWebPage.verifyHomePageScreen()
    })

    it('Click to view profile', function () {
        homeWebPage.clickMyProfile()
        homeWebPage.verifyEmployeePageScreen()
        homeWebPage.clickEditProfileButton()
        homeWebPage.verifyEditInfoScreen()
        homeWebPage.clickCancelButton()
        homeWebPage.verifyEmployeePageScreen()
        homeWebPage.clickEditProfileButton()
        homeWebPage.verifyEditInfoScreen()
        homeWebPage.inputEmailTextBox()
        homeWebPage.clickUpdateButton()
        homeWebPage.verifyUpdateSuccessToast()
    });

    it('Fall back KPI', function () {
        cy.wait(1000)
        homeWebPage.fallBackKpi()
    });

    it('Delete & Add KPI with value input', function () {
        cy.wait(1000)
        homeWebPage.compareKpiValue('MTG Sales')
        homeWebPage.refreshPage()
        cy.wait(1500)
        homeWebPage.compareKpiValue('MTD Sales')
        homeWebPage.refreshPage()
        cy.wait(1500)
        homeWebPage.compareKpiValue('Sales Month Target')
        homeWebPage.refreshPage()
        cy.wait(1500)
        homeWebPage.compareKpiValue('MTD Sales Achievements (%)')
        homeWebPage.refreshPage()
        cy.wait(1500)
        homeWebPage.compareKpiValue('Average Sales / Day (MTD)')
    });

    // it('Compare data on CRM and Logi', function () {
    //     cy.wait(1000)
    //     homeWebPage.logi_Crm()
    // });
});