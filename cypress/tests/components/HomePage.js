import HomeWebPage from "../../../models/pages/HomeWebPage";
import {Common} from "../../support/Common";

describe('Home Page', () => {
    let homeWebPage = new HomeWebPage;

    beforeEach(() => {
        cy.visit("https://crm-beta.pharmapoc.com/");
        Common.loginPage()
        homeWebPage.verifyHomePageScreen()
    })

    it.only('Click to view profile', function () {
        homeWebPage.clickMyProfileTest()
        homeWebPage.clickMyProfile()
    });

    it('Delete & Add KPI with value', function () {
        cy.wait(1500)
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

    it('Fall back KPI value', function () {
        cy.wait(1500)
        homeWebPage.removeAllKpi()

        // homeWebPage.removeEachKpi()
        // homeWebPage.getKpiName().then($kpiName => {
        //     cy.log($kpiName)
        // })
    });
});