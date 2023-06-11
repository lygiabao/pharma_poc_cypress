const homeLogo1Css = '[class*="mt-20 w-full"]'
const homeLogo2Css = '[class*="flex items-center justify-between"]'
const homeLogo3Css = 'My team\'s performance'
const itemSelectedCss = '[data-testid="performance-item"]'
const addKpiSectionCss = '[data-testid="performance-add"]'
const deleteKpiIconCss = '[class*="poc-button poc-button"]'
const deleteKpiButtonCss = '.poc-button-icon'
const addKpiButtonCss = '[data-testid="select-trigger-performance-add-select"]'
const kpiListCss = '[class*="poc-select-popover"]'
const removeKpiLogo = '.poc-modal-footer'
const confirmRemoveKpiCss = '[class*="poc-modal-ok"]'
const kpiName = '[data-testid="performance-item-label"]'
const kpiValueCss = '[class*="poc-select-dropdown"] > div'
const goMyProfileButton = '[data-testid="performance-open-profile"] > svg'

class HomeWebPage {
    verifyHomePageScreen() {
        cy.get(homeLogo1Css).should("be.visible")
        cy.get(homeLogo2Css).should("be.visible")
        cy.contains(homeLogo3Css).should("be.visible")
    }

    getKpiName() {
        let kpiNameList
        cy.get(kpiName).then($kpiName => {
            kpiNameList=$kpiName.text()
        })


        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(kpiNameList))
        })
    }


    compareKpiValue(valueName) {
        cy.get(kpiName).should(() => {}).then($kpiName => {
            if ($kpiName.length) {
                cy.get(kpiName).invoke('text').then($kpiName => {
                    if (!$kpiName.includes(valueName)) {
                        this.addKpiSection(valueName)
                    }
                })
            } else {
                this.addKpiSection(valueName)
            }
        })
    }

    addKpiSection(valueName) {
        cy.get(addKpiSectionCss).should(() => {
        }).then(($button) => {
            if (!$button.length) {
                cy.log("kpi exists")
                cy.get(deleteKpiButtonCss).eq(0).click()
                this.removeKpiScreen()
            }

            cy.log("kpi not exists")
            cy.get(addKpiSectionCss).eq(0).click()
            cy.get(kpiListCss).should("be.visible")
            cy.contains(valueName).click({force: true})
        })
    }

    removeKpiScreen() {
        cy.get(removeKpiLogo).should("be.visible")
        cy.get(confirmRemoveKpiCss).click()
    }

    refreshPage() {
        cy.reload()
    }

    clickMyProfile() {
        cy.get(goMyProfileButton).click()
    }

    removeEachKpi() {
        cy.get(deleteKpiButtonCss).should(() => {
        }).then(($removeButton) => {
            if($removeButton.length) {
                cy.get(deleteKpiButtonCss).then($remove => {
                    cy.get($remove).eq(0).click()
                    this.removeKpiScreen()
                })
            } else {
                cy.log("not exist KPI value")
            }
        })
    }

    removeAllKpi() {
        cy.get(deleteKpiButtonCss).then($remove => {
            cy.log($remove.length)
            for (let i = 0; i <= $remove.length; i++) {
                cy.get($remove).eq(i).click()
                this.removeKpiScreen()
                cy.wait(1000)
            }
        })

        // cy.get(deleteKpiButtonCss).each($remove => {
        //     cy.get($remove).should('have.class', 'poc-button-icon').click()
        //     this.removeKpiScreen()
        //     cy.wait(1000)
        // })
    }
}

module.exports = HomeWebPage