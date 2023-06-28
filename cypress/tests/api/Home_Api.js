import {Common} from "../../support/Common";
import HomeWebPage from "../../../models/pages/HomeWebPage";

describe('API of Home Page', () => {

    let homeWebPage = new HomeWebPage;

    beforeEach(() => {
        cy.visit("https://crm-beta.pharmapoc.com/");
        Common.loginPage()
        homeWebPage.verifyHomePageScreen()
    })

    it('Get user profile: getMemberProfile', function () {
        cy.wait(1000)
        let url = 'https://staging-entity.azurewebsites.net/api/v1/teamDashboard/getMemberProfile?memberId=853'

        let requestBody = {
            method: 'GET',
            url: url,
            headers: Common.getApiHeader(),
        }

        cy.request(requestBody).then(req => {
            homeWebPage.getUserProfile().then(userName => {
                expect(req.body.data.name).eq(userName)
            })
        })
    });
});