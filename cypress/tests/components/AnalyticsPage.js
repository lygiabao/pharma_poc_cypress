// import HomeWebPage from "../../../models/pages/HomeWebPage";
// import {Common} from "../../support/Common";
//
// describe('Home Page', () => {
//     let homeWebPage = new HomeWebPage;
//
//     beforeEach(() => {
//         cy.visit("https://crm-beta.pharmapoc.com/");
//         Common.loginPage()
//         homeWebPage.verifyHomePageScreen()
//     })
//
//
//
//     it('gets the post',{defaultCommandTimeout: 25000}, () => {
//         homeWebPage.clickAnalyticPage()
//         getIframeBody().find('[id="ReportKpis"]').should("be.visible")
//     })
//
//     it('Analytic', {defaultCommandTimeout: 25000},() =>{
//         homeWebPage.clickAnalyticPage()
//         homeWebPage.verifyAnalyticPageScreen()
//         cy.get('iframe[onload*="EmbeddedReporting"]')
//         homeWebPage.getAnalytic()
//
//     });
//
//     it('Compare data on CRM and Logi', function () {
//         cy.wait(1000)
//         homeWebPage.logi_Crm()
//     });
// });