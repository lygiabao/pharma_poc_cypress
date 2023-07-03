const homeLogo1Css = '[class*="mt-20 w-full"]'
const homeLogo2Css = '[class*="flex items-center justify-between"]'
const homeLogo3Css = 'My team\'s performance'|'My performance'
const addKpiSectionCss = '[data-testid="performance-add"]'
const deleteKpiButtonCss = '.poc-button-icon'
const addKpiButtonCss = '[data-testid="select-trigger-performance-add-select"]'
const kpiListCss = '[class*="poc-select-popover"]'
const removeKpiLogoCss = '.poc-modal-footer'
const removeKpiTextLogo = 'Are you sure you want to remove this KPI ?'
const confirmRemoveKpiCss = '[class*="poc-modal-ok"]'
const kpiName = '[data-testid="performance-item-label"]'
const goMyProfileButton = '[data-testid="performance-open-profile"] > svg'
const employeeLogo1Css = '[data-testid="employee-profile-chart"]'
const employeeLogo2Css = '[data-testid="employee-profile-table"]'
const employeeLogo3Css = '[data-testid="breadcrumb-text"]'
const editButtonCss = '[data-testid="employee-open-update-modal"]'
const verifyEditInfoLogo1Css = '[class="poc-modal-header mb-20 uppercase"]'
const verifyEditInfoLogo2Css = '[class="poc-modal-footer"]'
const cancelButtonCss = 'Cancel'
const updateButtonCss = 'Update'
const updateSuccessLogo1Css = '[class*="poc-toast-content text-text-primary"]'
const updateSuccessLogo2Css = 'Successful'
const emailTextBoxCss = '[data-testid="employee-update-email"]'
const userProfileCss = '[data-testid="header-customer-trigger"] span'
const analyticPageCss = 'Analytics'
const analyticLogo1Css = '[id="ReportKpis"]'
const analyticLogo2Css = '[id="Card-colChartFee"]'
const analyticLogo3Css = '[id="rdDataTableDiv-tablePlaceClosed"]'
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
        cy.get(removeKpiLogoCss).should("be.visible")
        cy.contains(removeKpiTextLogo).should("be.visible")
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
                    this.getKpiValue("MTG Sales").then($value => {
                        mtgSales = $value
                    })

                    this.addKpiSection("Sales Month Target")
                    this.getKpiValue("Sales Month Target").then($value => {
                        saleMonthTarget = $value
                    })

                    this.addKpiSection("MTD Sales Achievements (%)")
                    this.getKpiValue("MTD Sales Achievements (%)").then($value => {
                        mtdSalesAchievements = $value
                    })

                    this.addKpiSection("Average Sales / Day (MTD)")
                    this.getKpiValue("Average Sales / Day (MTD)").then($value => {
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

        this.clickAnalyticPage()
        this.verifyAnalyticPageScreen()

        cy.get('[id="Card-col1"] [id="Stat--amount"] span').eq(1).then(salesThisMonth => {
            cy.log("salesThisMonth" + salesThisMonth)
            // expect(salesThisMonth.text()).to.eq(mtdSales.replace("KES", "").trim())
        })

        cy.get('[id="Card-colMonthtoGo"] [id="Stat--amount"] span').eq(1).then(monthToGo => {
            cy.log(monthToGo)
            // expect(monthToGo.text()).to.eq(mtgSales.replace("KES", "").trim())
        })

        cy.get('[id="Card-colTargetSale"] [id="Stat--amountTargetSale"] span').eq(1).then(target => {
            cy.log(target)
            // expect(target.text()).to.eq(saleMonthTarget.replace("KES", "").trim())
        })

        cy.get('[id="Card-colTargetAchi."] [id="Stat--amount"] span').eq(2).then(targetAchievement => {
            cy.log(targetAchievement)
            // expect(targetAchievement.text()).to.eq(mtdSalesAchievements.replace("KES", "").trim())
        })

        cy.get('[id="StatPrevMonth-amount"] span').eq(2).then(avgDailySales => {
            cy.log(avgDailySales)
            // expect(avgDailySales.text()).to.eq(avgSales.replace("KES", "").trim())
        })
    }

    verifyEmployeePageScreen() {
        cy.get(employeeLogo1Css).should("be.visible")
        cy.get(employeeLogo2Css).should("be.visible")
        cy.get(employeeLogo3Css).should("be.visible")
    }

    clickEditProfileButton() {
        cy.get(editButtonCss).click()
    }

    verifyEditInfoScreen() {
        cy.get(verifyEditInfoLogo1Css).should("be.visible")
        cy.get(verifyEditInfoLogo2Css).should("be.visible")
    }

    clickCancelButton() {
        cy.contains(cancelButtonCss).click()
    }

    clickUpdateButton() {
        cy.contains(updateButtonCss).click()
    }

    verifyUpdateSuccessToast() {
        cy.get(updateSuccessLogo1Css).should("be.visible")
        cy.contains(updateSuccessLogo2Css).should("be.visible")
    }

    inputEmailTextBox() {
        cy.get(emailTextBoxCss).clear().type("pharma@gmail.com")
    }

    getUserProfile() {
        let profileName
        cy.get(userProfileCss).then(name => {
            profileName = name.text()
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(profileName))
        })
    }

    clickAddKpiSection() {
        cy.get(addKpiButtonCss).should(() => {
        }).then($kpi => {
            if(!$kpi.length) {
                cy.get(deleteKpiButtonCss).eq(0).click()
                this.confirmRemoveKpi()
            }
        })

        cy.get(addKpiButtonCss).eq(0).click()
    }

    verifyKpiListScreen() {
        cy.get(kpiListCss).should("be.visible")
    }

    getKpiList() {
        let allKpi = []
        cy.get('[class*="inline-flex w-full items-center"]').each(kpiList => {
            let kpi = {}
            cy.wrap(kpiList).then(api => {
                kpi.kpiName = api.text()
                allKpi.push(kpi)
            })
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(allKpi))
        })
    }

    getAreaProfile() {
        let areaProfile
        cy.get('[data-testid="employee-joining-date-value"]').eq(0).then(area => {
            areaProfile = area.text()
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(areaProfile))
        })
    }

    clickAnalyticPage() {
        cy.contains(analyticPageCss).click()
    }

    verifyAnalyticPageScreen() {
        cy.get(analyticLogo1Css).should("be.visible")
        cy.get(analyticLogo2Css).should("be.visible")
        cy.get(analyticLogo3Css).should("be.visible")
    }

    getAnalytic() {
        cy.get('[id="Card-col1"] [id="Stat--amount"] span').eq(1).then(salesThisMonth => {
            cy.log("salesThisMonth" + salesThisMonth)
            // expect(salesThisMonth.text()).to.eq(mtdSales.replace("KES", "").trim())
        })

        cy.get('[id="Card-colMonthtoGo"] [id="Stat--amount"] span').eq(1).then(monthToGo => {
            cy.log(monthToGo)
            // expect(monthToGo.text()).to.eq(mtgSales.replace("KES", "").trim())
        })

        cy.get('[id="Card-colTargetSale"] [id="Stat--amountTargetSale"] span').eq(1).then(target => {
            cy.log(target)
            // expect(target.text()).to.eq(saleMonthTarget.replace("KES", "").trim())
        })

        cy.get('[id="Card-colTargetAchi."] [id="Stat--amount"] span').eq(2).then(targetAchievement => {
            cy.log(targetAchievement)
            // expect(targetAchievement.text()).to.eq(mtdSalesAchievements.replace("KES", "").trim())
        })

        cy.get('[id="StatPrevMonth-amount"] span').eq(2).then(avgDailySales => {
            cy.log(avgDailySales)
            // expect(avgDailySales.text()).to.eq(avgSales.replace("KES", "").trim())
        })
    }
}

module.exports = HomeWebPage