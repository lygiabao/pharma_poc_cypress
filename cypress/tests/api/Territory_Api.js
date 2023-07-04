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

    for (let i = 0; i < 3; i++) {
        it('Get API Table Options Customer: tableOptions', function () {
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

        it('Get API Table Options Prescribers: tableOptions', function () {
            let url = 'https://staging-entity.azurewebsites.net/api/v1/dashboard/tableOptions?type=3'

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

                territoryWebPage.clickPrescribersOption()
                territoryWebPage.verifyTerritoryPageScreenDisplay()
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

        it('Check count and name of Customer: AdvancedSearchPharmacies', function () {
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

        it('Check count and name of Prescribers: Search', function () {
            territoryWebPage.clickPrescribersOption()
            territoryWebPage.verifyTerritoryPageScreenDisplay()
            let url = 'https://staging-entity.azurewebsites.net/api/v1/accountManagement/Search'
            let body = {"data":[],"itemsPerPage":100,"pageIndex":1,"sorts":null,"text":""}

            let requestBody = {
                method: 'POST',
                url: url,
                headers: Common.getApiHeader(),
                body: body
            }

            let prescribersName
            cy.request(requestBody).then(req => {
                cy.log(JSON.stringify(req.body.data))
                prescribersName = req.body.data.results
                prescribersName = prescribersName.map(api => {
                    return {
                        nameCustomer : api.name
                    }
                })
                territoryWebPage.getApiCustomerName().then(apiName => {
                    cy.wrap('').then(() => {
                        expect(apiName).to.be.deep.eq(prescribersName)
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

        it('Get value on Table Options for SegmentType: optionsListValue', function () {
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

        it('Get value on Table Options for Segment: optionsListValue', function () {
            let url = 'https://staging-entity.azurewebsites.net/api/v1/dashboard/optionListValues?type=1'

            let requestBody = {
                method: 'GET',
                url: url,
                headers: Common.getApiHeader()
            }

            let segmentApi
            cy.request(requestBody).then(req => {
                segmentApi = req.body.data.segments
                segmentApi = segmentApi.map(api => {
                    return {
                        segmentApi : api
                    }
                })
                territoryWebPage.clickSegmentFiltersIcon()
                territoryWebPage.getSegmentList().then($segmentList => {
                    cy.wrap('').then(() => {
                        expect($segmentList).to.be.deep.eq(segmentApi);
                    })
                })
            })
        });

        it('Get value on Table Options for SubArea: optionsListValue', function () {
            let url = 'https://staging-entity.azurewebsites.net/api/v1/dashboard/optionListValues?type=1'

            let requestBody = {
                method: 'GET',
                url: url,
                headers: Common.getApiHeader()
            }

            let subAreaApi
            cy.request(requestBody).then(req => {
                subAreaApi = req.body.data.subarea
                subAreaApi = subAreaApi.map(api => {
                    return {
                        subAreaApi : api
                    }
                })

                territoryWebPage.clickSubAreaFiltersIcon()
                territoryWebPage.getSubAreaList().then($subAreaList => {
                    cy.wrap('').then(() => {
                        expect($subAreaList).to.be.deep.eq(subAreaApi);
                    })
                })
            })
        });

        it('Get Employee permissions: getEmployeePermissions', function () {
            let url = 'https://staging-entity.azurewebsites.net/api/v1/userManagement/getEmployeePermissions'
            let requestBody = {
                url : url,
                method : 'GET',
                headers : Common.getApiHeader()
            }

            cy.request(requestBody).then(req => {
                expect(req.body.data.canCreateCustomer).eq(true)
                expect(req.body.data.canCreatePrescriber).eq(true)
            })
        });
    }
});