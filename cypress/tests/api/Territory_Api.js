import {Common} from "../../support/Common";
import CalendarWebPage from "../../../models/pages/CalendarWebPage";
import {ScheduleCallAPI} from "../../support/ScheduleCallAPI";
import {PurposeCallAPI} from "../../support/PurposeCallAPI";
import HomeWebPage from "../../../models/pages/HomeWebPage";
import {TableOptionsAPI} from "../../support/TableOptionsAPI";
import TerritoryWebPage from "../../../models/pages/TerritoryWebPage";

describe('Territory Page: Compare API and UI', () => {

    let homeWebPage = new HomeWebPage;
    let territoryWebPage = new TerritoryWebPage;

    beforeEach(() => {
        cy.visit("https://crm-beta.pharmapoc.com/");
        Common.loginPage()
        homeWebPage.verifyHomePageScreen()
        territoryWebPage.clickTerritoryPage();
        territoryWebPage.verifyTerritoryPageScreenDisplay();
    })

    it.only('Get API Table Options', function () {
        cy.wait(1000)
        let url = 'https://staging-entity.azurewebsites.net/api/v1/dashboard/tableOptions?type=1'

        let header = {
            'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
            'Accept': 'application/json',
            'Referer': 'https://crm-beta.pharmapoc.com/',
            'sec-ch-ua-mobile': '?0',
            'Authorization': 'Bearer AhhGbG_e_MQvUxcanZ_JE6mrjggCdfzm_SeGTGHt2BU',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"'
        }

        let requestBody = {
            method: 'GET',
            url: url,
            headers: header,
        }

        let tableApi
        cy.request(requestBody).then(req => {
            tableApi = req.body.data
            tableApi = tableApi.map(api => {
                return {
                    pharmacyId : '' + api.id,
                }
            })
            cy.log(JSON.stringify(tableApi))

            territoryWebPage.clickTableOptions();
            territoryWebPage.verifyTableOptionsScreen();
            territoryWebPage.getTableOptionsList().then(tableName => {
                cy.wrap('').then(() => {
                    cy.log(JSON.stringify(tableName))
                    expect(tableName.length).to.be.deep.eq(tableApi.length);
                    expect(tableName).to.be.deep.eq(tableApi);
                })
            })
        })
    });
});