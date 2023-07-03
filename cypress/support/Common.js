export class Common {

    static loginPage () {
        cy.origin('https://poc-staging-identity.azurewebsites.net', () => {
        // cy.origin('https://dev-poc-identity.azurewebsites.net', () => {
            cy.wait(500)
            const LOGIN_ACCOUNT = {
                username: "cipla.pocam",
                password: "Dat@POC@2020"
            }
            const {username, password} = LOGIN_ACCOUNT;
            cy.get('#selectCountryCode').select('en');
            cy.get('#username').type(username);
            cy.get('#password').type(password);
            cy.get('#login').click();
        })

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });
    }

    static stringFormat() {
        String.prototype.format = function () {
            const args = arguments;
            return this.replace(/{([0-9]+)}/g, function (match, index) {
                return typeof args[index] == 'undefined' ? match : args[index];
            });
        };
    }

    static generateRandomUser = usernameLength => {
        const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const allChars_length = allChars.length;
        let randomUsername = '';
        for (let i = 0; i < usernameLength; i++) {
            randomUsername += allChars.charAt(Math.floor(Math.random() * allChars_length))
        }
        return randomUsername;
    }

    static generateRandomPhoneNumber = phoneNumberLength => {
        const allChars = "0123456789";
        const allChars_length = allChars.length;
        let randomPhoneNumber = '';
        for (let i = 0; i < phoneNumberLength; i++) {
            randomPhoneNumber += allChars.charAt(Math.floor(Math.random() * allChars_length))
        }
        return randomPhoneNumber;
    }

    static getApiHeader() {
        return {
            'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
            'Accept': 'application/json',
            'Referer': 'https://crm-beta.pharmapoc.com/',
            'sec-ch-ua-mobile': '?0',
            'Authorization': 'Bearer xbnE6bgAet_MvafNB9H6Hc_9I-kYCtFhN_1Njh2D1GY',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"'
        }
    }
}