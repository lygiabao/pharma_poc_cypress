import {Common} from "../../support/Common";
import CalendarWebPage from "../../../models/pages/CalendarWebPage";
import HomeWebPage from "../../../models/pages/HomeWebPage";
import TerritoryWebPage from "../../../models/pages/TerritoryWebPage";

describe('API of Calendar Page', () => {

    let calendarWebPage = new CalendarWebPage;
    let homeWebPage = new HomeWebPage;
    let territoryWebPage = new TerritoryWebPage;

    beforeEach(() => {
        cy.visit("https://crm-beta.pharmapoc.com/");
        Common.loginPage()
        homeWebPage.verifyHomePageScreen()
        calendarWebPage.clickCalendarPage()
        calendarWebPage.verifyCalendarPageScreenDisplay();
    })

    it('Get all user of My Calendar: getMyCalendars', function () {
        cy.wait(1000)
        let url = 'https://staging-entity.azurewebsites.net/api/v1/Call/getMyCalendars'

        let requestBody = {
            method: 'GET',
            url: url,
            headers: Common.getApiHeader(),
        }

        let myCalendarApi
        cy.request(requestBody).then(req => {
            myCalendarApi = req.body.data
            myCalendarApi = myCalendarApi.map(api => {
                return {
                    calendarName : api.firstName + " " + api.lastName
                }
            })

            calendarWebPage.clickMyCalenderDropDown();
            calendarWebPage.verifyDisplayCalendarDropDown();
            calendarWebPage.getMyCalendar().then(myCalendar => {
                cy.wrap('').then(() => {
                    expect(myCalendarApi).to.be.deep.eq(myCalendar)
                })
            })
        })
    });

    it('Get purpose call list: callPurposeType', () => {
        cy.wait(1000)
        let url = 'https://staging-entity.azurewebsites.net/api/v1/call/callPurposeType?account'

        let requestBody = {
            method: 'GET',
            url: url,
            headers: Common.getApiHeader()
        }

        let getPurposeApiList
        cy.request(requestBody).then(req => {
            getPurposeApiList = req.body.data
            getPurposeApiList = getPurposeApiList.map($purpose => {
                return {
                    purposeName: $purpose.name.replace('{{productDetailingText}}','')
                }
            })

            calendarWebPage.clickSingleIcon();
            calendarWebPage.verifyCallListLogo();
            calendarWebPage.clickScheduleCallIcon();
            calendarWebPage.verifyScheduleCallLogo();
            calendarWebPage.clickPurposeDropDown();

            calendarWebPage.getAllPurpose().then(purposeList => {
                cy.wrap('').then(() => {
                    // Check lại data
                    // expect(purposeList).to.be.deep.eq(getPurposeApiList);
                    expect(purposeList.length).to.be.deep.eq(getPurposeApiList.length);
                })
            })
        })
    });

    it('Get list schedule call by day: SearchCalendarEvents', function () {
        cy.wait(1000)
        let url = 'https://staging-entity.azurewebsites.net/api/v1/Activity/SearchCalendarEvents'
        let body = {"startDate":"2023-06-22T17:00:00.000Z","endDate":"2023-06-23T16:59:59.999Z","employeeId":853}

        let requestBody = {
            method: 'POST',
            url: url,
            headers: Common.getApiHeader(),
            body: body
        }

        let apiScheduleList
        cy.request(requestBody).then(req => {
            apiScheduleList = req.body.data
            apiScheduleList = apiScheduleList.map(api => {
                return {
                    name: api.accountName.trim(),
                }
            })

            calendarWebPage.clickPreviousDate()
            calendarWebPage.getScheduleName().then(getName => {
                expect(getName).to.be.deep.eq(apiScheduleList)
            })
        })
    });

    it('Get list Outcomes of Call: callOutcomeType', function () {
        calendarWebPage.clickPreviousDate()
        calendarWebPage.verifyCalendarPageScreenDisplay();
        cy.contains('Reported: In-store').should(() => {
        }).then($callReported => {
            if(!$callReported.length) {
                territoryWebPage.clickTerritoryPage();
                territoryWebPage.verifyTerritoryPageScreenDisplay();

                territoryWebPage.getCustomerName().then(name => {
                    calendarWebPage.clickCalendarPage()
                    calendarWebPage.verifyCalendarPageScreenDisplay();
                    calendarWebPage.clickPreviousDate()
                    calendarWebPage.clickSingleIcon();
                    calendarWebPage.verifyCallListLogo();
                    calendarWebPage.clickScheduleCallIcon();
                    calendarWebPage.verifyScheduleCallLogo();
                    calendarWebPage.inputCustomerNameTextBox(name);
                    calendarWebPage.selectCustomerName();
                    calendarWebPage.selectStartTimeDropDown();
                    calendarWebPage.selectPurposeDropDown();
                    calendarWebPage.clickAddButton();
                    calendarWebPage.verifyCreateScheduleCallSuccessToast();
                });
                calendarWebPage.clickInStoreCall();
                calendarWebPage.verifyInfoCallLogo();
                calendarWebPage.clickReportCallButton();
                calendarWebPage.verifyReportCallLogo();
                calendarWebPage.selectGeneralOutcomes();
                calendarWebPage.clickUpdateCallButton();
                calendarWebPage.verifyReportCallSuccessToast();
                calendarWebPage.verifyCalendarPageScreenDisplay();
            }
        })

        calendarWebPage.clickReportedInStoreCall();
        calendarWebPage.verifyInfoCallLogo();
        cy.wait(1000)
        let url = 'https://staging-entity.azurewebsites.net/api/v1/call/callOutcomeType?accountType=1'

        let requestBody = {
            method: 'GET',
            url: url,
            headers: Common.getApiHeader(),
        }

        let apiScheduleList
        cy.request(requestBody).then(req => {
            apiScheduleList = req.body.data
            apiScheduleList = apiScheduleList.map(api => {
                return {
                    name: api.name.trim(),
                }
            })

            calendarWebPage.clickEditButton();
            calendarWebPage.verifyUpdateReportedCallScreenDisplay();
            calendarWebPage.getOutComeList().then(getName => {
                expect(getName.length).to.be.deep.eq(apiScheduleList.length)
            })
        })
    });

    it('Get list Calendar Shared: getMyShareCalendars', function () {
        calendarWebPage.clickShareIcon();
        calendarWebPage.verifyShareScreenDisplay();
        calendarWebPage.inputValidNameEmailTextBox();
        calendarWebPage.verifyNameEmailList();
        calendarWebPage.selectShareValueDropDown();
        calendarWebPage.clickShareButton();

        let url = 'https://staging-entity.azurewebsites.net/api/v1/Call/getMySharedCalendars'

        let requestBody = {
            url: url,
            method: 'GET',
            headers: Common.getApiHeader()
        }

        let apiShare
        cy.request(requestBody).then(req => {
            apiShare = req.body.data
            apiShare = apiShare.map(api => {
                return {
                    fullName : api.firstName + " " + api.lastName
                }
            })

            calendarWebPage.getShareList().then($shareList => {
                expect(apiShare).to.be.deep.eq($shareList)
            })
        })
        calendarWebPage.clickDeleteShareButton();
    });

    it('Get list all of Product: callProducts', function () {
        calendarWebPage.clickSingleIcon();
        calendarWebPage.verifyCallListLogo();
        calendarWebPage.clickScheduleCallIcon();
        calendarWebPage.verifyScheduleCallLogo();

        let url = 'https://staging-entity.azurewebsites.net/api/v1/call/callProducts?accountType=1'

        let requestBody = {
            url : url,
            method: 'GET',
            headers: Common.getApiHeader()
        }

        let productApi
        cy.request(requestBody).then(req => {
            productApi = req.body.data
            productApi = productApi.map(api => {
                return {
                    productName : api.name
                }
            })

            calendarWebPage.getProductListApi().then(productList => {
                expect(productApi).to.be.deep.eq(productList)
            })
        })
    });


//     let verifyNotEmpty = (name, data) => {
//         // Nếu data không có value thì
//         if (!data) {
//             expect(true).to.eq(false, `${name} data is empty`)
//         }
//     }
//
//     // Handle await với single method
//     it('Handling async request in cypress', async () => {
//         // Chờ cho đến khi nào thằng này được resolved xong mấy lấy kết quả ra dùng await/ async
//         // Chỉ áp dụng cho single request: chỉ get hoặc post/ put/ delete
//         // Nếu không dùng await thì nó sẽ không hiểu response là gì
//         // Cách này y chang khi dùng then (thay vì dùng then)
//         let response = await cy.request({
//             url: "abc",
//             method: 'POST'
//         })
//
//         expect(response.status).to.eq(200)
//         expect(response.body.length).to.eq(100)
//     });
//
// //     Handle with multiple method
//     it('Multiple method ', function () {
//         let url = 'https://jsonplaceholder.typicode.com/posts'
//         // let url = Cypress.env("baseURL")
//         let postBody = {
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }
//         let headers = {
//             'Content-type': 'application/json; charset=UTF-8',
//         }
//
//         cy.createPost(postBody).then(res => {
//             cy.getPost((Number(res.body.id)-1).toString()).then(res => {
//                 cy.request({
//                     method: 'PUT',
//                     url: url + "/" +res.body.id,
//                     body: {
//                         id: 1,
//                         title: 'fooaaaaaaaaa',
//                         body: 'bar',
//                         userId: 1,
//                     },
//                     headers: headers
//                 }).then(res => {
//                     cy.request({
//                         method: 'DELETE',
//                         url: url + "/" +res.body.id,
//                     })
//                 })
//             })
//         })
//     });
});