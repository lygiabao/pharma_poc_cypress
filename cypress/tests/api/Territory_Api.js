import {Common} from "../../support/Common";
import HomeWebPage from "../../../models/pages/HomeWebPage";
import TerritoryWebPage from "../../../models/pages/TerritoryWebPage";

describe('API of Territory Page', () => {

    let homeWebPage = new HomeWebPage;
    let territoryWebPage = new TerritoryWebPage;

    beforeEach(() => {
        cy.visit("https://crm-beta.pharmapoc.com/");
        Common.loginPage()
        homeWebPage.verifyHomePageScreen()
        territoryWebPage.clickTerritoryPage();
        territoryWebPage.verifyTerritoryPageScreenDisplay();
    })

    it('Get API Table Options: tableOptions', function () {
        cy.wait(1000)
        let url = 'https://staging-entity.azurewebsites.net/api/v1/dashboard/tableOptions?type=1'

        let requestBody = {
            method: 'GET',
            url: url,
            headers: Common.getApiHeader(),
        }

        let tableApi
        cy.request(requestBody).then(req => {
            tableApi = req.body.data
            tableApi = tableApi.map(api => {
                return {
                    pharmacyId : '' + api.id,
                }
            })

            territoryWebPage.clickTableOptions();
            territoryWebPage.verifyTableOptionsScreen();
            territoryWebPage.getTableOptionsList().then(tableName => {
                cy.wrap('').then(() => {
                    expect(tableName.length).to.be.deep.eq(tableApi.length);
                    expect(tableName).to.be.deep.eq(tableApi);
                })
            })
        })
    });

    it('Get All Reps: GetSaleRepInTerritory', function () {
        cy.wait(1000)
        let url = 'https://staging-loyalty.azurewebsites.net/api/v1/LoyaltyProgram/GetSaleRepInTerritory?isGettingRepsOnly=true'

        let requestBody = {
            method: 'GET',
            url: url,
            headers: Common.getApiHeader()
        }

        let repApi
        cy.request(requestBody).then(req => {
            repApi = req.body.data
            repApi = repApi.map(api => {
                return {
                    repName: api.firstName + " " + api.lastName
                }
            })

            territoryWebPage.clickAllRepsDropDown();
            territoryWebPage.verifyAllRepsDisplay();
            territoryWebPage.getAllReps().then(allRepApi => {
                cy.wrap('').then(() => {
                    expect(repApi.length).to.be.deep.eq(allRepApi.length);
                })
            })
        })
    });

    it('Get value on Table Options for SegmentType: optionsListValue', function () {
        cy.wait(1000)
        let url = 'https://staging-entity.azurewebsites.net/api/v1/dashboard/optionListValues?type=1'

        let requestBody = {
            method: 'GET',
            url: url,
            headers: Common.getApiHeader()
        }

        let segmentTypeApi
        cy.request(requestBody).then(req => {
            segmentTypeApi = req.body.data.segmentTypes
            segmentTypeApi = segmentTypeApi.map(api => {
                return {
                    segmentType : api
                }
            })

            territoryWebPage.clickTypeFiltersIcon()
            territoryWebPage.getSegmentTypes().then($segmentType => {
                cy.wrap('').then(() => {
                    expect(segmentTypeApi).to.be.deep.eq($segmentType);
                    expect(segmentTypeApi.length).to.be.deep.eq($segmentType.length);
                })
            })
        })
    });

    it('Get value on Table Options for Area: optionsListValue', function () {
        cy.wait(1000)
        let url = 'https://staging-entity.azurewebsites.net/api/v1/dashboard/optionListValues?type=1'

        let requestBody = {
            method: 'GET',
            url: url,
            headers: Common.getApiHeader()
        }

        let areaApi
        cy.request(requestBody).then(req => {
            areaApi = req.body.data.area
            areaApi = areaApi.map(api => {
                return {
                    area : api
                }
            })

            territoryWebPage.clickAreaFiltersIcon()
            territoryWebPage.geAreaList().then($areaList => {
                cy.wrap('').then(() => {
                    expect($areaList).to.be.deep.eq(areaApi);
                    expect($areaList.length).to.be.deep.eq(areaApi.length);
                })
            })
        })
    });

    it('Get value on Table Options for Territory: optionsListValue', function () {
        cy.wait(1000)
        let url = 'https://staging-entity.azurewebsites.net/api/v1/dashboard/optionListValues?type=1'

        let requestBody = {
            method: 'GET',
            url: url,
            headers: Common.getApiHeader()
        }

        let territoryApi
        cy.request(requestBody).then(req => {
            territoryApi = req.body.data.territories
            territoryApi = territoryApi.map(api => {
                return {
                    territory : api
                }
            })

            territoryWebPage.clickTerritoryFiltersIcon()
            territoryWebPage.getTerritoryList().then($territoryList => {
                cy.wrap('').then(() => {
                    expect($territoryList).to.be.deep.eq(territoryApi);
                })
            })
        })
    });

    it.only('Check count and name of Customer: AdvancedSearchPharmacies', function () {
        cy.wait(1000)
        let url = 'https://staging-entity.azurewebsites.net/api/v1/Search/AdvancedSearchPharmacies'
        let body = {"data":[],"itemsPerPage":100,"pageIndex":1,"sorts":null,"text":""}

        let requestBody = {
            method: 'POST',
            url: url,
            headers: Common.getApiHeader(),
            body: body
        }

        let customerName
        cy.request(requestBody).then(req => {
            cy.log(JSON.stringify(req.body.data))
            customerName = req.body.data.results
            customerName = customerName.map(api => {
                return {
                    nameCustomer : api.name
                }
            })
            territoryWebPage.getApiCustomerName().then(apiName => {
                cy.wrap('').then(() => {
                    expect(apiName).to.be.deep.eq(customerName)
                })
            })

            cy.get('[data-testid="total-data-amount"]').then($totalWithoutFilter => {
                expect($totalWithoutFilter.text()).eq("" + req.body.data.totalItemsWithoutFilter)
            })

            cy.get('[data-testid="total-data-amount"]').then($totalItems => {
                expect($totalItems.text()).eq("" + req.body.data.totalItemsWithoutFilter)
            })
        })
    });
});