import {Common} from "../../support/Common";
import HomeWebPage from "../../../models/pages/HomeWebPage";

describe('API of Home Page', () => {

    let homeWebPage = new HomeWebPage;

    beforeEach(() => {
        cy.visit("https://crm-beta.pharmapoc.com/");
        Common.loginPage()
        homeWebPage.verifyHomePageScreen()
    })

    for (let i = 0; i < 3; i++) {
        it('Get username profile: getMemberProfile', function () {
            let url = 'https://staging-entity.azurewebsites.net/api/v1/teamDashboard/getMemberProfile?memberId=853'

            let requestBody = {
                method: 'GET',
                url: url,
                headers: Common.getApiHeader()
            }

            cy.request(requestBody).then(req => {
                homeWebPage.getUserProfile().then(userName => {
                    expect(req.body.data.name).eq(userName)
                })
            })
        });

        it('Get area profile: getMemberProfile', function () {
            let url = 'https://staging-entity.azurewebsites.net/api/v1/teamDashboard/getMemberProfile?memberId=853'

            let requestBody = {
                method: 'GET',
                url: url,
                headers: Common.getApiHeader()
            }

            homeWebPage.clickMyProfile()
            homeWebPage.verifyEmployeePageScreen()
            let areaProfile
            cy.request(requestBody).then(req => {
                areaProfile = req.body.data.area
                cy.log(JSON.stringify(areaProfile))
                homeWebPage.getAreaProfile().then(areaProfile => {
                    expect(req.body.data.area).eq(areaProfile)
                })
            })
        });

        it('Get email profile: getMemberProfile', function () {
            let url = 'https://staging-entity.azurewebsites.net/api/v1/teamDashboard/getMemberProfile?memberId=853'

            let requestBody = {
                method: 'GET',
                url: url,
                headers: Common.getApiHeader()
            }

            homeWebPage.clickMyProfile()
            homeWebPage.verifyEmployeePageScreen()
            let emailProfile
            cy.request(requestBody).then(req => {
                emailProfile = req.body.data.email
                cy.log(JSON.stringify(emailProfile))
                cy.get('[data-testid="employee-email-value"] a').then(api => {
                    expect(emailProfile).eq(api)
                })
            })
        });


        it('Get all KPI: tableOptions', function () {
            cy.wait(1000)
            let url = 'https://staging-entity.azurewebsites.net/api/v1/teamDashboard/tableOptions?type=2'

            let requestBody = {
                url: url,
                method: 'GET',
                headers: Common.getApiHeader()
            }

            let kpiList
            cy.request(requestBody).then(req => {
                kpiList = req.body.data
                kpiList = kpiList.map(api => {
                    return {
                        kpiName : api.text
                    }
                })

                homeWebPage.clickAddKpiSection();
                homeWebPage.verifyKpiListScreen();
                homeWebPage.getKpiList().then($kpiList => {
                    expect(Number($kpiList.length) + Number(3)).to.be.deep.eq(kpiList.length)
                });
            })
        });
    }
});