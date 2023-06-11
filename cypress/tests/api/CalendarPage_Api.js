import {Common} from "../../support/Common";
import CalendarWebPage from "../../../models/pages/CalendarWebPage";
import {ScheduleCallAPI} from "../../support/ScheduleCallAPI";
import {PurposeCallAPI} from "../../support/PurposeCallAPI";
import HomeWebPage from "../../../models/pages/HomeWebPage";

describe('Calendar Page: Compare API and UI', () => {

    let calendarWebPage = new CalendarWebPage;
    let homeWebPage = new HomeWebPage;

    // beforeEach(() => {
    //     cy.visit("https://crm-alpha.pharmapoc.com/");
    //     Common.loginPage()
    //     homeWebPage.verifyHomePageScreen()
    //     calendarWebPage.clickCalendarPage()
    //     calendarWebPage.verifyCalendarPageScreenDisplay();
    // })


    it('Compare List Schedule Call: Intercept', () => {
        // Check lại vụ này vì sắp xếp không đúng thự tự
        let scheduleCallAPI = new ScheduleCallAPI()
        scheduleCallAPI.getScheduleCallApi().then(apiSchedule => {
            cy.log(JSON.stringify(apiSchedule))
            calendarWebPage.getAllScheduleInfo().then(scheduleCallList => {
                cy.wrap('').then(() => {
                    cy.log(JSON.stringify(scheduleCallList))
                    expect(scheduleCallList).to.be.deep.eq(apiSchedule);
                })
            })
        })
    });

    it('Compare List Schedule Call: Get body', function () {

        cy.wait(1000)
        let url = 'https://dev-entity.azurewebsites.net/api/v1/Activity/SearchCalendarEvents'

        let header = {
            'Accept': 'application/json',
            'Accept-Language': 'en,vi-VN;q=0.9,vi;q=0.8,fr-FR;q=0.7,fr;q=0.6,en-US;q=0.5',
            'Authorization': 'Bearer IVw-pWbykeHrh6ZG8907F7zhaefv9gde_vtQchdzI9w',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json; charset=UTF-8',
            'Origin: https':'//crm-alpha.pharmapoc.com',
            'Referer: https':'//crm-alpha.pharmapoc.com/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'cross-site',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
        }

        let body = {"startDate":"2023-05-30T17:00:00.000Z","endDate":"2023-05-31T16:59:59.999Z","employeeId":853}

        let requestBody = {
            method: 'POST',
            url: url,
            headers: header,
            body: body
        }

        cy.request(requestBody).then(req => {
            cy.log(req)
            cy.log(JSON.stringify(req))
        })
    });


    it('API: Compare purpose on UI and API', () => {
        let purposeCallApi = new PurposeCallAPI()
        purposeCallApi.getPurposeCallApi().then(getPurposeList => {
            cy.log(JSON.stringify(getPurposeList))
            cy.wrap('').then(() => {
                calendarWebPage.getAllPurpose().then(purposeList => {
                    expect(getPurposeList).to.be.deep.eq(purposeList);
                })
            })
        })
    });

    it('Test API', function () {
        cy.wait(100)
        cy.intercept('https://dev-entity.azurewebsites.net/api/v1/Activity/SearchCalendarEvents').as('scheduleCall')
        calendarWebPage.clickNextDate({force: true});
        calendarWebPage.verifyCalendarPageScreenDisplay();
        cy.wait(100)
        cy.wait('@scheduleCall')
        let apiSchedule

        cy.get('@scheduleCall').then(callList => {
            apiSchedule = callList.response.body.data
            apiSchedule = apiSchedule.map(call => {
                let {accountName, id, typeName} = call
                return {
                    pharmacyName: accountName.trim(),
                    pharmacyId: id,
                    pharmacyType: typeName
                }
            })

            // Get random value with API
            let roundRandomIndex = Math.floor(Math.random() * apiSchedule.length)
            let randomObject = apiSchedule[roundRandomIndex]
            cy.log(JSON.stringify(randomObject.pharmacyName))
            cy.log(JSON.stringify(randomObject.pharmacyId))
            cy.log(JSON.stringify(randomObject.pharmacyType))

            verifyNotEmpty('pharmacy name', randomObject.pharmacyName)
        })
    })

    let verifyNotEmpty = (name, data) => {
        // Nếu data không có value thì
        if (!data) {
            expect(true).to.eq(false, `${name} data is empty`)
        }
    }

    it('Test API POST', function () {
        cy.wait(1000)
        let url = 'https://dev-entity.azurewebsites.net/api/v1/Search/AdvancedSearchPharmacies'

        let header = {
            'Accept': 'application/json',
            'Accept-Language': 'en,vi-VN;q=0.9,vi;q=0.8,fr-FR;q=0.7,fr;q=0.6,en-US;q=0.5',
            'Authorization': 'Bearer efY6T4AyDFDixSTpKpzZpGncGTGlM7SNxXpLll-ZnGs',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json; charset=UTF-8',
            'Origin': 'https://crm-alpha.pharmapoc.com',
            'Referer': 'https://crm-alpha.pharmapoc.com/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'cross-site',

            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"'
        }

        let body = {"data":[],"itemsPerPage":100,"pageIndex":1,"sorts":null,"text":""}

        let requestBody = {
            method: 'POST',
            url: url,
            headers: header,
            body: body
        }

        cy.request(requestBody).then(req => {
            let {status, body} = req
            // Câu này dùng để so sánh oke thì đúng là 200 còn ko thì in ra câu ko phải số valid
            expect(status).to.eq(200, 'Status is not valid')
            let {data, itemsPerPage, pageIndex, } = body


            cy.log(JSON.stringify(data))
            cy.log(JSON.stringify(itemsPerPage))
            cy.log(JSON.stringify(pageIndex))
        })
    })

    it('getMyCalendar ', function () {
        cy.get('[value="My calendar"]').click()
        cy.wait(1000)

        let url = 'https://dev-entity.azurewebsites.net/api/v1/Call/getMyCalendars'

        let header = {
            'sec-ch-ua':'"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
            'Accept':'application/json',
            'Referer':'https://crm-alpha.pharmapoc.com/',
            'sec-ch-ua-mobile':'?0',
            'Authorization':'Bearer Vy4VxSVHzb0vAKIi4gKP9HpDsQcrZd2oWoCARtL8JiQ',
            'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
            'sec-ch-ua-platform':'"macOS"',
        }

        let body = {"data":[],"itemsPerPage":100,"pageIndex":1,"sorts":null,"text":""}

        let requestBody = {
            method: 'GET',
            url: url,
            headers: header,
            body: body
        }

        cy.request(requestBody).then(req => {
            let myCalendarsApi = req.body.data
            myCalendarsApi = myCalendarsApi.map(call => {
                let {id, firstName, lastName} = call
                return {
                    fullName : firstName + " " + lastName,
                }
            })

            calendarWebPage.getMyCalendars().then(abc => {
                // cy.log(JSON.stringify(abc))
                expect(abc).to.be.deep.eq(myCalendarsApi);
            })
            // cy.log(JSON.stringify(myCalendarsApi))
        })

    });

    it('should ', function () {
        cy.get('[value="My calendar"]').click()
        cy.wait(1000)

        calendarWebPage.getMyCalendars().then(abc => {
            cy.log(abc)
            cy.log(JSON.stringify(abc))
        })
    });

    // Handle await với single method
    it('Handling async request in cypress', async () => {
        // Chờ cho đến khi nào thằng này được resolved xong mấy lấy kết quả ra dùng await/ async
        // Chỉ áp dụng cho single request: chỉ get hoặc post/ put/ delete
        // Nếu không dùng await thì nó sẽ không hiểu response là gì
        // Cách này y chang khi dùng then (thay vì dùng then)
        let response = await cy.request({
            url: "abc",
            method: 'POST'
        })

        expect(response.status).to.eq(200)
        expect(response.body.length).to.eq(100)
    });

//     Handle with multiple method
    it.only('Multiple method ', function () {
        let url = 'https://jsonplaceholder.typicode.com/posts'
        // let url = Cypress.env("baseURL")
        let postBody = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
        let headers = {
            'Content-type': 'application/json; charset=UTF-8',
        }

        cy.createPost(postBody).then(res => {
            cy.getPost((Number(res.body.id)-1).toString()).then(res => {
                cy.request({
                    method: 'PUT',
                    url: url + "/" +res.body.id,
                    body: {
                        id: 1,
                        title: 'fooaaaaaaaaa',
                        body: 'bar',
                        userId: 1,
                    },
                    headers: headers
                }).then(res => {
                    cy.request({
                        method: 'DELETE',
                        url: url + "/" +res.body.id,
                    })
                })
            })
        })
    });


});