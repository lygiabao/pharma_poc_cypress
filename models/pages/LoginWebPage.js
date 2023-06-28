const profileIconCss = '[data-testid="header-customer-trigger"]'
const profileLogoCss = '[class="poc-popover-dropdown"]'
const logoutButtonCss = 'Logout'
const changePwdCss = 'Change Password'
const changePwdLogo1Css = '[class="change-password"]'
const changePwdLogo2Css = '[id="app"]'
const passwordTextBoxCss = '[id="password"]'
const newPasswordTextBoxCss = '[id="newPassword"]'
const confirmPasswordTextBoxCss = '[id="confirmPassword"]'
const changePwdButtonCss = '[type="submit"]'

class LoginWebPage {

    clickProfileIcon() {
        cy.get(profileIconCss).click()
    }

    verifyProfileScreen() {
        cy.get(profileLogoCss).should("be.visible")
    }

    clickLogoutButton() {
        cy.contains(logoutButtonCss).click()
    }

    clickChangePasswordButton() {
        cy.contains(changePwdCss).click()
    }

    verifyChangePwdScreen() {
        cy.get(changePwdLogo1Css).should("be.visible")
        cy.get(changePwdLogo2Css).should("be.visible")
    }

    inputCurrentPwdTextBox() {
        cy.get(passwordTextBoxCss).type("Dat@POC@2020")
    }

    inputNewPwdTextBox() {
        cy.get(newPasswordTextBoxCss).type("ABC123")
    }

    inputConfirmPwdTextBox() {
        cy.get(confirmPasswordTextBoxCss).type("ABC456")
    }

    clickChangePwdButton() {
        cy.get(changePwdButtonCss).click()
    }

    verifyPwdNotMatchToast() {

    }
}

module.exports = LoginWebPage