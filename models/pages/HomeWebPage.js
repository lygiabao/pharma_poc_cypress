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
const goMyProfileButtonTest = '[data-testid="{0}-open-{1}"] > svg'

class HomeWebPage {
    verifyHomePageScreen() {
        cy.get(homeLogo1Css).should("be.visible")
        cy.get(homeLogo2Css).should("be.visible")
        cy.contains(homeLogo3Css).should("be.visible")
    }

    removeAllKpi() {
        this.removeEachKpi()
        cy.wait(1000)
        this.removeEachKpi()
        cy.wait(1000)
        this.removeEachKpi()
        cy.wait(1000)
        this.removeEachKpi()
        cy.wait(1000)
        this.removeEachKpi()
        cy.wait(1000)
        this.removeEachKpi()
        cy.wait(1000)
    }

    fallBackKpi() {
        cy.get(kpiName).should(() => {
        }).then($kpi => {
            if($kpi.length) {
                cy.get(kpiName).then($kpiName => {
                    this.removeAllKpi()
                    for (let element of $kpiName) {
                        cy.get(element).each($element => {
                            cy.get(addKpiButtonCss).eq(0).click()
                            cy.get(kpiListCss).should("be.visible")
                            cy.contains($element.text()).click({force: true})
                            cy.wait(500)
                        })
                    }
                })
            }
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
                this.confirmRemoveKpi()
            }

            cy.log("kpi not exists")
            cy.get(addKpiSectionCss).eq(0).click()
            cy.get(kpiListCss).should("be.visible")
            cy.contains(valueName).click({force: true})
        })
    }

    confirmRemoveKpi() {
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
                this.refreshPage()
                cy.get(deleteKpiButtonCss).then($remove => {
                    cy.get($remove).eq(0).should('have.class', 'poc-button-icon').click()
                    this.confirmRemoveKpi()
                })
            } else {
                cy.log("not exist KPI value")
            }
        })
    }

    getKpiValue(kpiName) {
        let kpiValue
        cy.contains(kpiName).siblings("span").then($kpiValue => {
            kpiValue = $kpiValue.text()
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(kpiValue))
        })
    }

    openLogi() {
        cy.visit("https://analytic-gcp.pharmapoc.com/logi/rdPage.aspx?rdReport=SB-SalesDashboard-SQL&userId=853&companyId=462&tenant=app.pharmapoc.com");
        cy.get('[id="ReportKpis"]').should("be.visible")
        cy.get('[id="ReportKpisFees"]').should("be.visible")
        cy.get('[id="ReportDataPlaceClosed"]').should("be.visible")
    }

    logi_Crm() {
        let mtdSales, mtgSales, saleMonthTarget, mtdSalesAchievements, avgSales
        cy.get(kpiName).should(() => {
        }).then($kpi => {
            if($kpi.length) {
                cy.get(kpiName).then($kpiName => {
                    this.removeAllKpi()

                    this.addKpiSection("MTD Sales")
                    this.getKpiValue("MTD Sales").then($value => {
                        mtdSales = $value
                    })

                    this.addKpiSection("MTG Sales")
                    this.getKpiValue("MTG Sales").then().then($value => {
                        mtgSales = $value
                    })

                    this.addKpiSection("Sales Month Target")
                    this.getKpiValue("Sales Month Target").then().then($value => {
                        saleMonthTarget = $value
                    })

                    this.addKpiSection("MTD Sales Achievements (%)")
                    this.getKpiValue("MTD Sales Achievements (%)").then().then($value => {
                        mtdSalesAchievements = $value
                    })

                    this.addKpiSection("Average Sales / Day (MTD)")
                    this.getKpiValue("Average Sales / Day (MTD)").then().then($value => {
                        avgSales = $value
                    })

                    this.removeAllKpi()

                    for (let element of $kpiName) {
                        cy.get(element).each($element => {
                            cy.get(addKpiButtonCss).eq(0).click()
                            cy.get(kpiListCss).should("be.visible")
                            cy.contains($element.text()).click({force: true})
                            cy.wait(500)
                        })
                    }
                })
            } else {
                this.addKpiSection("MTD Sales")
                this.getKpiValue("MTD Sales").then($value => {
                    mtdSales = $value
                })

                this.addKpiSection("MTG Sales")
                this.getKpiValue("MTG Sales").then().then($value => {
                    mtgSales = $value
                })

                this.addKpiSection("Sales Month Target")
                this.getKpiValue("Sales Month Target").then().then($value => {
                    saleMonthTarget = $value
                })

                this.addKpiSection("MTD Sales Achievements (%)")
                this.getKpiValue("MTD Sales Achievements (%)").then().then($value => {
                    mtdSalesAchievements = $value
                })

                this.addKpiSection("Average Sales / Day (MTD)")
                this.getKpiValue("Average Sales / Day (MTD)").then().then($value => {
                    avgSales = $value
                })

                this.removeAllKpi()
            }
        })

        this.openLogi()

        cy.get('[id="Card-col1"]').eq(0).children("div[id=\"Stat\"]").children("div").children("span").eq(1).each(logiValue => {
            // cy.log("Sale this month: " + logiValue.text())
        })

        cy.get('[id="Card-colMonthtoGo"] span').eq(9).then(logiValue => {
            // cy.log("Month to go: " + logiValue.text())
            expect(logiValue.text()).to.eq(mtgSales.replace("KES", "").trim())
        })

        cy.get('[id="Card-colTargetSale"] span').eq(7).then(logiValue => {
            // cy.log("Target this month: " + logiValue.text())
            expect(logiValue.text()).to.eq(saleMonthTarget.replace("KES", "").trim())
        })

        cy.get('[id="Card-colTargetAchi."] span').eq(6).then(logiValue => {
            // cy.log("Target achievement: " + logiValue.text())
            expect(logiValue.text()).to.eq(mtdSalesAchievements.replace("KES", "").trim())
        })

        cy.get('[id="Card-col2"] span').eq(5).then(logiValue => {
            // cy.log("Avg daily sales: " + logiValue.text())
            expect(logiValue.text()).to.eq(avgSales.replace("KES", "").trim())
        })
    }
}

module.exports = HomeWebPage