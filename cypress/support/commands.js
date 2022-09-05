import capitalCost from "../fixtures/capital-cost.json"


beforeEach(() => {
    cy.visit('/')
    cy.contains('.idpDescription span', 'Dealer, Supplier, Other Login')
    cy.contains('.idpDescription span', 'Dealer, Supplier, Other Login').click()
    cy.get('.headerbar span').should('have.text', 'Web Single Sign-On')
    cy.get('#userName').type('##########')
    cy.get('#password').type('#########')
    cy.get('#btn-sign-in').click()
});

Cypress.Commands.add('Submit', (id) => {
    cy.get(`${id} > form`).submit()
    //cy.wait(2000)
})

Cypress.Commands.add('Clear', () => {
    cy.get('#button--clear-form').click()
})

Cypress.Commands.add('InputDate', () => {
    const dayjs = require('dayjs')
    const newDate = dayjs().add(1, 'day').format('YYYY-MM-DD')
    cy.get(`.id-${newDate}`).click()

})

Cypress.Commands.add('ValidateSupplementdate', () => {
    const dayjs = require('dayjs')
    const newDate = dayjs().add(1, 'day').format('MM/DD/YYYY')
    cy.get('.render-pdf').invoke('attr', 'data-supplementdate').should('equal', newDate)
})

Cypress.Commands.add('ValidateCommencementdate', () => {
    let payment_due_day
    payment_due_day = capitalCost.payment_due_day
    const dayjs = require('dayjs')
    const newDate = dayjs().date()
    // 26 < 27
    if (payment_due_day < newDate) {
        const payNextMonth = dayjs().date(payment_due_day).add(1, 'month').format('MM/DD/YYYY')
        cy.get('.render-pdf').invoke('attr', 'data-commencementdate').should('equal', payNextMonth)
    } else {
        // 29 >= 28
        const payInMonth = dayjs().date(payment_due_day).format('MM/DD/YYYY')
        cy.get('.render-pdf').invoke('attr', 'data-commencementdate').should('equal', payInMonth)
    }
    cy.get('.render-pdf').invoke('attr', 'data-paymentdueday').should('equal', payment_due_day)

})

Cypress.Commands.add('AttrEqualTo', (id, equalTo) => {
    cy.get('.render-pdf').invoke('attr', id).should('equal', equalTo)
})


Cypress.Commands.add('InputQuickQuote', () => {

    cy.fixture('quick-quote').then(data => {
        cy.get('.tab-group').contains('Quick Quote').click()
        cy.get('#input--quick-quote-costumer-name').type(data.costumer_name, { force: true })
        cy.get('#input--quick-quote-dealer-name').type(data.deale_name, { force: true })
        cy.get('#input--quick-quote-vi-year').type(data.year, { force: true })
        cy.get('#input--quick-quote-vi-model').type(data.model, { force: true })
        cy.get('#input--quick-quote-vi-net-cap-cost').type(data.net_cap_cost, { force: true })
        cy.get('#input--quick-quote-st-term').type(data.term, { force: true })
        cy.get('#input--quick-quote-st-residual').type(data.residual, { force: true })
        cy.get('#input--quick-quote-st-customer-rate').type(data.custmer_rate, { force: true })
        cy.get('#input--quick-quote-st-dealer-participation').type(data.dealer_participation, { force: true })
        cy.get('#dropdown--quick-quote-st-payment-timing').click()
        cy.get(`#quick-quote-st-payment-timing-${data.payment_timing}`).click()
        cy.get('#input--quick-quote-st-tax-rate').type(data.tax_rate, { force: true })
        cy.get('#quick-quote-content > form').click()
    })

})

Cypress.Commands.add('InputEffective', () => {

    cy.fixture('effective-rate').then(data => {
        cy.get('.tab-group').contains('Effective Rate').click()
        cy.get('#input--effective-rate-costumer-name').type(data.costumer_name, { force: true })
        cy.get('#input--effective-rate-dealer-name').type(data.deale_name, { force: true })
        cy.get('#input--effective-rate-vi-year').type(data.year, { force: true })
        cy.get('#input--effective-rate-vi-model').type(data.model, { force: true })
        cy.get('#input--effective-rate-vi-vin').type(data.vin, { force: true })
        cy.get('#input--effective-rate-st-sellingPrice').type(data.sellingPrice, { force: true })
        cy.get('#input--effective-rate-st-leaseTerm').type(data.leaseTerm, { force: true })
        cy.get('#input--effective-rate-st-retailTerm').type(data.retailTerm, { force: true })
        cy.get('#input--effective-rate-st-alternateRetailTerm').type(data.alternateRetailTerm, { force: true })
        cy.get('#input--effective-rate-st-cashDownPayment').type(data.cashDownPayment, { force: true })
        cy.get('#input--effective-rate-st-serviceContract').type(data.serviceContract, { force: true })
        cy.get('#input--effective-rate-st-fleetConcessions').type(data.fleetConcessions, { force: true })
        cy.get('#input--effective-rate-st-tradeEquity').type(data.tradeEquity, { force: true })
        cy.get('#input--effective-rate-st-residual').type(data.residual, { force: true })
        cy.get('#input--effective-rate-st-customerLeaseRate').type(data.customerLeaseRate, { force: true })
        cy.get('#input--effective-rate-st-customerRetailRate').type(data.customerRetailRate, { force: true })
        cy.get('#input--effective-rate-st-monthlyMaintenanceCharge').type(data.monthlyMaintenanceCharge, { force: true })
        cy.get('#input--effective-rate-st-alternateRetailRate').type(data.alternateRetailRate, { force: true })
        cy.get('#input--effective-rate-cd-sellingPrice').type(data.cd_sellingPrice, { force: true })
        cy.get('#input--effective-rate-cd-fleetConcessions').type(data.cd_fleetConcessions, { force: true })
        cy.get('#input--effective-rate-cd-cashDownPayment').type(data.cd_cashDownPayment, { force: true })
        cy.get('#input--effective-rate-cd-serviceContract').type(data.cd_serviceContract, { force: true })
        cy.get('#input--effective-rate-cd-residualAmount').type(data.cd_residualAmount, { force: true })
        cy.get('#input--effective-rate-cd-competitorPaymentLabel').type(data.cd_competitorPaymentLabel, { force: true })
        cy.get('#dropdown--effective-rate-st-payment-timing').click()
        cy.get(`#effective-rate-st-payment-timing-${data.payment_timing}`).click()
        cy.get('#input--effective-rate-cd-upfrontFees').type(data.upfrontFees, { force: true })
        cy.get('#input--effective-rate-cd-monthlyManagementFees').type(data.monthlyManagementFees, { force: true })
        cy.get('#input--effective-rate-cd-monthlyMaintenanceCharge').type(data.cd_monthlyMaintenanceCharge, { force: true })
        cy.get('#input--effective-rate-cd-leaseEndServiceCharge').type(data.leaseEndServiceCharge, { force: true })
        cy.get('#effective-rate-content > form').click({ force: true })
    })
})

Cypress.Commands.add('InputPayment', () => {

    cy.fixture('payment-comparison').then(data => {
        cy.get('.tab-group').contains('Payment Comparison').click()
        cy.get('#input--payment-comparison-costumer-name').type(data.costumer_name, { force: true })
        cy.get('#input--payment-comparison-dealer-name').type(data.dealer_name, { force: true })
        cy.get('#input--payment-comparison-vehicle-year').type(data.vehicle_year, { force: true })
        cy.get('#input--payment-comparison-vehicle-model').type(data.vehicle_model, { force: true })
        cy.get('#input--payment-comparison-vehicle-vin').type(data.vehicle_vin, { force: true })
        cy.get('#input--payment-comparison-sellingPrice').type(data.sellingPrice, { force: true })
        cy.get('#input--payment-comparison-leaseTerm').type(data.leaseTerm, { force: true })
        cy.get('#input--payment-comparison-retail-term').type(data.retail_term, { force: true })
        cy.get('#input--payment-comparison-cashdown').type(data.cashdown, { force: true })
        cy.get('#input--payment-comparison-commerciallease').type(data.commerciallease, { force: true })
        cy.get('#input--payment-comparison-retail-rebate').type(data.retail_rebate, { force: true })
        cy.get('#input--payment-comparison-trade-equity').type(data.trade_equity, { force: true })
        cy.get(`#radio--payment-comparison-taxes-upfront-${data.taxes_upfront}`).check({ force: true })
        cy.get('#input--payment-comparison-residual').type(data.residual, { force: true })
        cy.get('#input--payment-comparison-customer-lease-rate').type(data.lease_rate, { force: true })
        cy.get('#input--payment-comparison-customer-retail-rate').type(data.retail_rate, { force: true })
        cy.get(`#radio--payment-comparison-payments-in-advance-${data.payments_in_advance}`).check({ force: true })
        cy.get('#input--payment-comparison-tax-rate').type(data.tax_rate, { force: true })
        cy.get('#textarea--payment-comparison-notes').type(data.comparison_notes, { force: true })
        cy.get('#payment-comparison > form').click()
    })
})

Cypress.Commands.add('InputCapital', () => {

    cy.fixture('capital-cost').then(data => {
        cy.get('.tab-group').contains('Capital Cost').click()
        cy.get('#input--capital-cost-costumer-name').type(data.costumer_name, { force: true })
        cy.get('#input--capital-cost-offering-number').type(data.offering_number, { force: true })
        cy.get('#input--capital-cost-vehicle-year').type(data.year, { force: true })
        cy.get('#input--capital-cost-vehicle-model').type(data.model, { force: true })
        cy.get('#input--capital-cost-vehicle-vin').type(data.vin, { force: true })
        cy.get('#input--fds-table-equipment-description-0').type(data.equipment_description_0, { force: true })
        cy.get('#input--fds-table-equipment-value-0').type(data.equipment_value_0, { force: true })
        cy.get('#input--capital-cost-factory-invoice').type(data.factory_invoice, { force: true })
        cy.get('#input--capital-cost-add-equip-excluded').type(data.equip_excluded, { force: true })
        cy.get('#input--capital-cost-capitalized-initial-title-tax').type(data.initial_title_tax, { force: true })
        cy.get('#input--capital-cost-capitalized-initial-title-notax').type(data.initial_title_notax, { force: true })
        cy.get(`#radio--capital-cost-up-front-taxes-paid-by-dealer-${data.taxes_paid_by_dealer}`).check({ force: true })
        cy.get(`#radio--capital-cost-are-taxes-capitalized-${data.taxes_capitalized}`).check({ force: true })
        cy.get('#input--capital-cost-up-front-local-tax').type(data.front_local_tax, { force: true })
        cy.get('#input--capital-cost-up-front-state-tax').type(data.front_state_tax, { force: true })
        cy.get('#input--capital-cost-up-front-fet-tax').type(data.front_fet_tax, { force: true })
        cy.get('#input--capital-cost-up-front-other-tax').type(data.front_other_tax, { force: true })
        cy.get('#input--capital-cost-maintenance-plan').type(data.maintenance_plan, { force: true })
        cy.get('#dropdown--capital-cost-dropdown-maintenance').click()
        cy.get(`#capital-cost-dropdown-maintenance-${data.dropdown_maintenance}`).click()
        cy.get('#input--capital-cost-service-contract').type(data.service_contract, { force: true })
        cy.get('#dropdown--capital-cost-dropdown-service').click()
        cy.get(`#capital-cost-dropdown-service-${data.dropdown_service}`).click()
        cy.get('#input--capital-cost-gap').type(data.cost_gap, { force: true })
        cy.get('#dropdown--capital-cost-dropdown-gap').click()
        cy.get(`#capital-cost-dropdown-gap-${data.dropdown_gap}`).click()
        cy.get('#input--capital-cost-vehicle-markup').type(data.vehicle_markup, { force: true })
        cy.get('#input--capital-cost-capitalized-cost-reduction').type(data.cost_reduction, { force: true })
        cy.get('#input--capital-cost-rebates').type(data.rebates, { force: true })
        cy.get('#input--capital-cost-trade-allowance').type(data.trade_allowance, { force: true })
        cy.get('#input--capital-cost-trade-owed').type(data.trade_owed, { force: true })
        cy.get('#input--capital-cost-residual').type(data.residual, { force: true })
        cy.get('#input--capital-cost-customer-lease-rate').type(data.lease_rate, { force: true })
        cy.get('#input--capital-cost-dealer-participation').type(data.dealer_participation, { force: true })
        cy.get('#input--capital-cost-term').type(data.term, { force: true })
        cy.get(`#radio--capital-cost-manufacturing-repurchase-${data.manufacturing_repurchase}`).check({ force: true })
        cy.get('#datepicker--capital-cost-supplement-date').click()
        cy.InputDate()
        cy.get('#input--capital-cost-payment-due-day').type(data.payment_due_day, { force: true })
        cy.get('#dropdown--capital-cost-payment-timing').click()
        cy.get('#capital-cost-payment-timing-advance').click()
        cy.get('#input--capital-cost-vehicle-msrp').type(data.vehicle_msrp, { force: true })
        cy.get('#input--capital-cost-taxes-city-tax').type(data.city_tax, { force: true })
        cy.get('#input--capital-cost-taxes-state-tax').type(data.state_tax, { force: true })
        cy.get('#input--capital-cost-taxes-county-tax').type(data.county_tax, { force: true })
        cy.get('#input--capital-cost-taxes-other-tax').type(data.other_tax, { force: true })
        cy.get('#capital-cost > form').click({ force: true })
    })
})