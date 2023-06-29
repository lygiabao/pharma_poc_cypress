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
const pwdNotMatchLogoCss = '[data-notify="container"]'
const pwdNotMatchTittleCss = 'Password not match'

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
        cy.get(passwordTextBoxCss).type("Dat@POC@2021")
    }

    inputNewPwdTextBox() {
        cy.get(newPasswordTextBoxCss).type("Lyhoangvu0101@")
    }

    inputConfirmPwdTextBox() {
        cy.get(confirmPasswordTextBoxCss).type("Lyhoangvu0101@")
    }

    clickChangePwdButton() {
        cy.get(changePwdButtonCss).click()
    }

    verifyPwdNotMatchToast() {
        cy.get(pwdNotMatchLogoCss).should("be.visible")
        cy.contains(pwdNotMatchTittleCss).should("be.visible")
    }
}

module.exports = LoginWebPage