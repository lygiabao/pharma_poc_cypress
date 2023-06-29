import LoginWebPage from "../../../models/pages/LoginWebPage";
import {Common} from "../../support/Common";
import HomeWebPage from "../../../models/pages/HomeWebPage";

describe('Login Page', () => {
    let loginWebPage = new LoginWebPage;
    let homeWebPage = new HomeWebPage;

    beforeEach(() => {
        cy.visit("https://crm-beta.pharmapoc.com/");
        cy.origin('https://poc-staging-identity.azurewebsites.net', () => {
            cy.get('[id="login-contact-pass"]').should("be.visible")
            cy.get('[class="contact-us"]').should("be.visible")
            cy.get('#selectCountryCode').select('en');

        })
    })

    it('Forgot Password', function () {
        cy.origin('https://poc-staging-identity.azurewebsites.net', () => {
            // loginWebPage.clickForgotPasswordButton();
            cy.get('[onclick="goToForgetPassword()"]').click()
            // loginWebPage.verifyForgotPasswordScreen();
            cy.get('[class="forget-password__form"]').should("be.visible")
            cy.get('[id="login-contact-pass"]').should("be.visible")
            // loginWebPage.clickBackToLoginPageButton();
            cy.get('[onclick="back()"]').click()
            // loginWebPage.verifyLoginScreen();
            cy.get('[id="login-contact-pass"]').should("be.visible")
            cy.get('[class="contact-us"]').should("be.visible")
            // loginWebPage.clickForgotPasswordButton();
            cy.get('[onclick="goToForgetPassword()"]').click()
            // loginWebPage.verifyForgotPasswordScreen();
            cy.get('[class="forget-password__form"]').should("be.visible")
            cy.get('[id="login-contact-pass"]').should("be.visible")
            // loginWebPage.inputUsernameTextBox("abc");
            cy.get('[id="username"]').type("abc")
            // loginWebPage.getSecurityCodeButton();
            cy.get('[id="submitButton"]').click()
            // loginWebPage.verifyErrorToast();
            cy.get('[class="mb-2 warning-message"]').should("be.visible")

            // loginWebPage.inputUsernameTextBox("cipla.pocam");
            cy.get('[id="username"]').clear().type("cipla.pocam")
            // loginWebPage.getSecurityCodeButton();
            cy.get('[id="submitButton"]').click()
            // loginWebPage.verifyConfirmNewPasswordScreen();
            cy.get('[id="confirmForgetPassword"]').should("be.visible")
            cy.get('[class="confirm-forget-password__form"]').should("be.visible")
            // loginWebPage.inputSecurityCodeTextBox();
            cy.get('[id="securityCode"]').type("12345")
            // loginWebPage.inputPasswordTextBox();
            cy.get('[id="password"]').type('Abc12345')
            // loginWebPage.inputConfirmPasswordTextBox();
            cy.get('[id="confirmPassword"]').type('Abc12345')
            // loginWebPage.clickConfirmButton();
            cy.get('[type="submit"]').click()
            // loginWebPage.verifySecurityCodeInvalid();
            cy.get('[id="validation-error"]').should("be.visible")
        })
    });

    it('Re-Login ', function () {
        Common.loginPage();
        homeWebPage.verifyHomePageScreen();
        loginWebPage.clickProfileIcon();
        loginWebPage.verifyProfileScreen();
        loginWebPage.clickLogoutButton();
        cy.origin('https://poc-staging-identity.azurewebsites.net', () => {
            cy.get('[id="login-contact-pass"]').should("be.visible")
            cy.get('[class="contact-us"]').should("be.visible")
        })
    });

    it('Change password', function () {
        Common.loginPage();
        homeWebPage.verifyHomePageScreen();
        loginWebPage.clickProfileIcon();
        loginWebPage.verifyProfileScreen();
        loginWebPage.clickChangePasswordButton();
        loginWebPage.verifyChangePwdScreen();
        loginWebPage.inputCurrentPwdTextBox();
        loginWebPage.inputNewPwdTextBox();
        loginWebPage.inputConfirmPwdTextBox();
        loginWebPage.clickChangePwdButton();
        loginWebPage.verifyPwdNotMatchToast();
    });
});