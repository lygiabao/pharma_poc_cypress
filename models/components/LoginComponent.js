export class LoginComponent {
    static usernameTextBoxCss = () => cy.get('#username')
    static passwordTextBoxCss = () => cy.get('#password')
    static loginButtonCss = () => cy.get('#login')
    static homePageLogo1Css = () => cy.get('.sales-rep-home')
    static homePageLogo2Css = () => cy.get('.kpi-list__header')

    constructor(component) {
        this.component = component;
    }

    inputUsernameTexBox(){
        return this.component.usernameTextBoxCss()
    }
}