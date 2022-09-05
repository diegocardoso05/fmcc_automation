describe('Automation FMCC', () => {

    const errorMessage = 'This field is required'

    it('Form Quick Quote', () => {
        //input
        
        cy.InputQuickQuote();
        cy.Submit('#quick-quote-content')

        //validate
        cy.AttrEqualTo('data-customerName', 'TESTE QA')
        cy.AttrEqualTo('data-dealername', 'DIEGO')
        cy.AttrEqualTo('data-vehicle-year', '2017')
        cy.AttrEqualTo('data-vehicle-make', 'Ford')
        cy.AttrEqualTo('data-vehicle-model', 'FIESTA')
        cy.AttrEqualTo('data-vehicle-netcapcost', '$ 40,000.00')
        cy.AttrEqualTo('data-services-term', '36')
        cy.AttrEqualTo('data-services-residual', '6.00 %')
        cy.AttrEqualTo('data-services-residualamount', '$ 2,400.00')
        cy.AttrEqualTo('data-services-paymenttiming', 'Advance')
        cy.AttrEqualTo('data-monthlypaymentwithtax', '$ 1,132.19')
        cy.AttrEqualTo('data-monthlypaymentwithouttax', '$ 1,154.83')

    });
    it('Effective Rate', () => {
        cy.InputEffective();
        cy.Submit('#effective-rate-content')
        //validate
        cy.AttrEqualTo('data-customerName', 'TESTE QA')
        cy.AttrEqualTo('data-dealername', 'DIEGO')
        cy.AttrEqualTo('data-vehicle-year', '2017')
        cy.AttrEqualTo('data-vehicle-make', 'Ford')
        cy.AttrEqualTo('data-vehicle-model', 'F-450- 4X2')
        cy.AttrEqualTo('data-vehicle-vin', 'ST736PQ938')
        cy.AttrEqualTo('data-saleprice-trac', '$ 15,000.00')
        cy.AttrEqualTo('data-saleprice-tracadvance', '$ 15,000.00')
        cy.AttrEqualTo('data-saleprice-tracarrears', '$ 15,000.00')
        cy.AttrEqualTo('data-saleprice-retail', '$ 15,000.00')
        cy.AttrEqualTo('data-saleprice-alternateretail', '$ 15,000.00')
        cy.AttrEqualTo('data-fleetconcessions-trac', '$ 2,800.00')
        cy.AttrEqualTo('data-fleetconcessions-tracadvance', '$ 2,800.00')
        cy.AttrEqualTo('data-fleetconcessions-tracarrears', '$ 2,800.00')
        cy.AttrEqualTo('data-fleetconcessions-retail', '$ 2,800.00')
        cy.AttrEqualTo('data-fleetconcessions-alternateretail', '$ 2,800.00')
        cy.AttrEqualTo('data-downpayment-trac', '$ 2,800.00')
        cy.AttrEqualTo('data-downpayment-tracadvance', '$ 100.00')
        cy.AttrEqualTo('data-downpayment-tracarrears', '$ 100.00')
        cy.AttrEqualTo('data-downpayment-retail', '$ 100.00')
        cy.AttrEqualTo('data-downpayment-alternateretail', '$ 100.00')
        cy.AttrEqualTo('data-servicecontract-trac', '$ 1.00')
        cy.AttrEqualTo('data-ratefees-alternateretail', '4.00%')

    });

    it('Payment Comparison', () => {
        cy.InputPayment()

        cy.Submit('#payment-comparison')
        //validate
        cy.AttrEqualTo('data-customerName', 'TESTE QA')
        cy.AttrEqualTo('data-dealername', 'DIEGO')
        cy.AttrEqualTo('data-vehicle-year', '2017')
        cy.AttrEqualTo('data-vehicle-make', 'Ford')
        cy.AttrEqualTo('data-vehicle-model', 'F-450 4X4')
        cy.AttrEqualTo('data-vehicle-vin', 'ST736PQ938')
        cy.AttrEqualTo('data-retail-sellingprice', '$ 15,000.00')
        cy.AttrEqualTo('data-retail-cashdownpayment', '$ 100.00')
        cy.AttrEqualTo('data-retail-tradeequity', '$ 5.00')
        cy.AttrEqualTo('data-retail-retailrebate', '$ 3.00')
        cy.AttrEqualTo('data-retail-taxrate', '1.00 %')
        cy.AttrEqualTo('data-retail-amountfinanced', '$ 15,042.00')
        cy.AttrEqualTo('data-retail-retailterm', '4')
        cy.AttrEqualTo('data-retail-customerretailrate', '5.00 %')
        cy.AttrEqualTo('data-retail-financecharge', '$ 157.01')
        cy.AttrEqualTo('data-retail-paymentwithtax', '$ 3,799.75')
        cy.AttrEqualTo('data-commercial-cashdownpayment', '$ 100.00')
        cy.AttrEqualTo('data-commercial-tradeequity', '$ 5.00')
        cy.AttrEqualTo('data-commercial-commercialleaserebate', '$ 1.00')
        cy.AttrEqualTo('data-commercial-taxrate', '1.00 %')
        cy.AttrEqualTo('data-commercial-netcapcost', '$ 15,042.00')
        cy.AttrEqualTo('data-commercial-leaseterm', '36')
        cy.AttrEqualTo('data-leaseTerm', '36')
        cy.AttrEqualTo('data-commercial-residual', '30.00 %')
        cy.AttrEqualTo('data-commercial-paymentsinadvance', 'Yes')
        cy.AttrEqualTo('data-commercial-customerleaserate', '4.20 %')
        cy.AttrEqualTo('data-commercial-residualamount', '$ 4,512.60')
        cy.AttrEqualTo('data-commercial-basepayment', '$ 326.46')
        cy.AttrEqualTo('data-commercial-commercialpaymentwithtax', '$ 326.46')
        cy.AttrEqualTo('data-notes', 'Test test, test')

    });

    it('Capital Cost', () => {
         
        cy.InputCapital()
        cy.Submit('#capital-cost')
        
        //Validate
        cy.AttrEqualTo('data-customerName', 'TESTE QA')
        cy.AttrEqualTo('data-offeringnumber','234534234')
        cy.AttrEqualTo('data-vehicle-year', '2017')
        cy.AttrEqualTo('data-vehicle-make', 'Ford')
        cy.AttrEqualTo('data-vehicle-model', 'F-450 4X4')
        cy.AttrEqualTo('data-vehicle-vin', 'ST736PQ938')
        cy.AttrEqualTo('data-paymenttiming', 'Advance')
        cy.AttrEqualTo('data-equipments-factoryinvoice', '$ 15,000.00')
        cy.AttrEqualTo('data-equipments-totalinvoice', '$ 15,100.00')
        cy.AttrEqualTo('data-equipments-totalcost', '$ 100.00')
        cy.AttrEqualTo('data-equipments-vehiclemarkup', '$ 10.00')
        cy.AttrEqualTo('data-equipments-addequipment', '$ 1.00')
        cy.AttrEqualTo('data-equipments-capinitial', '$ 2.00')
        cy.AttrEqualTo('data-upfront-localtax', '$ 10.00')
        cy.AttrEqualTo('data-upfront-statetax', '$ 10.00')
        cy.AttrEqualTo('data-upfront-fettax', '$ 5.00')
        cy.AttrEqualTo('data-upfront-othertax', '$ 5.00')
        cy.AttrEqualTo('data-upfront-upfronttax', '$ 30.00')
        cy.AttrEqualTo('data-upfront-capitalizedcost', '$ 15,143.00')
        cy.AttrEqualTo('data-upfront-servicecontract', '$ 1.00')
        cy.AttrEqualTo('data-upfront-gap', '$ 2.00')
        cy.AttrEqualTo('data-upfront-capitalizedcostreduction', '$ 1.00')
        cy.AttrEqualTo('data-upfront-rebates', '$ 1.00')
        cy.AttrEqualTo('data-upfront-tradeallowance', '$ 2.00')
        cy.AttrEqualTo('data-upfront-tradeowed', '$ 3.00')
        cy.AttrEqualTo('data-upfront-nettradeallowance', '$ 1.00')
        cy.AttrEqualTo('data-upfront-finalnetcapcost', '$ 15,150.00')
        cy.AttrEqualTo('data-upfront-percentfinalnetcapcost', '100.33%')
        cy.AttrEqualTo('data-upfront-assumedrp', '30.00 %')
        cy.AttrEqualTo('data-upfront-assumedrpvalue', '$ 4,545.00')
        cy.AttrEqualTo('data-upfront-vehiclemsrp', '$ 1.00')
        cy.AttrEqualTo('data-customerrate', '1.00 %')
        cy.AttrEqualTo('data-term', '36')
        cy.ValidateSupplementdate()
        cy.ValidateCommencementdate()
        cy.AttrEqualTo('data-citytax', '5.00 %')
        cy.AttrEqualTo('data-countytax', '1.00 %')
        cy.AttrEqualTo('data-statetax', '10.00 %')
        cy.AttrEqualTo('data-othertax', '1.00 %')
        cy.AttrEqualTo('data-totaltax', '17')
        cy.AttrEqualTo('data-advance-basepayment', '$ 302.68')
        cy.AttrEqualTo('data-advance-tax', '$ 51.45')
        cy.AttrEqualTo('data-advance-paymentincluding', '$ 354.13')
        cy.AttrEqualTo('data-advance-manufacturerrepurchase', 'Yes')
        cy.AttrEqualTo('data-arrears-basepayment', '$ 302.93')
        cy.AttrEqualTo('data-arrears-tax', '$ 51.49')
        cy.AttrEqualTo('data-arrears-paymentincluding', '$ 354.42')

    });

    it('Shows messages for all required fields quick-quote', () => {
        cy.get('.tab-group').contains('Quick Quote').click()
        cy.Submit('#quick-quote-content')
        cy.contains('.fds-banner-notification__wrapper', 'Ooops! Something is missing.').should('be.visible')
        cy.contains('#input--quick-quote-costumer-name-error', errorMessage).should('be.visible')
        cy.contains('#input--quick-quote-dealer-name-error', errorMessage).should('be.visible')
        cy.contains('#input--quick-quote-vi-year-error', errorMessage).should('be.visible')
        cy.contains('#input--quick-quote-vi-model-error', errorMessage).should('be.visible')
        cy.contains('#input--quick-quote-vi-net-cap-cost-error', errorMessage).should('be.visible')
        cy.contains('#input--quick-quote-st-term-error', errorMessage).should('be.visible')
        cy.contains('#input--quick-quote-st-residual-error', errorMessage).should('be.visible')
        cy.contains('#input--quick-quote-st-customer-rate-error', errorMessage).should('be.visible')
        cy.contains('#input--quick-quote-st-dealer-participation-error', errorMessage).should('be.visible')
        cy.contains('#dropdown--quick-quote-st-payment-timing-error', errorMessage).should('be.visible')
        cy.contains('#input--quick-quote-st-tax-rate-error', errorMessage).should('be.visible')

    });

    it('Shows messages for all required fields Payment Comparison', () => {
        cy.get('.tab-group').contains('Payment Comparison').click()
        cy.Submit('#payment-comparison')
        cy.contains('.fds-banner-notification__wrapper', 'Ooops! Something is missing.').should('be.visible')
        cy.contains('#input--payment-comparison-costumer-name-error', errorMessage).should('be.visible')
        cy.contains('#input--payment-comparison-dealer-name-error', errorMessage).should('be.visible')
        cy.contains('#input--payment-comparison-vehicle-year-error', errorMessage).should('be.visible')
        cy.contains('#input--payment-comparison-vehicle-model-error', errorMessage).should('be.visible')
        cy.contains('#input--payment-comparison-vehicle-vin-error', errorMessage).should('be.visible')
        cy.contains('#input--payment-comparison-sellingPrice-error', errorMessage).should('be.visible')
        cy.contains('#input--payment-comparison-leaseTerm-error', errorMessage).should('be.visible')
        cy.contains('#input--payment-comparison-retail-term-error', errorMessage).should('be.visible')
        cy.contains('#input--payment-comparison-cashdown-error', errorMessage).should('be.visible')
        cy.contains('#input--payment-comparison-commerciallease-error', errorMessage).should('be.visible')
        cy.contains('#input--payment-comparison-retail-rebate-error', errorMessage).should('be.visible')
        cy.contains('#input--payment-comparison-trade-equity-error', errorMessage).scrollIntoView().should('be.visible')
        cy.contains('#radio--payment-comparison-taxes-upfront-error', errorMessage).should('be.visible')
        cy.contains('#input--payment-comparison-residual-error', errorMessage).should('be.visible')
        cy.contains('#input--payment-comparison-customer-lease-rate-error', errorMessage).should('be.visible')
        cy.contains('#input--payment-comparison-customer-retail-rate-error', errorMessage).should('be.visible')
        cy.contains('#radio--payment-comparison-payments-in-advance-error', errorMessage).should('be.visible')
        cy.contains('#input--payment-comparison-tax-rate-error', errorMessage).should('be.visible')

    });

    it('Shows messages for all required fields Effective Rate', () => {
        cy.get('.tab-group').contains('Effective Rate').click()
        cy.Submit('#effective-rate-content')
        cy.contains('.fds-banner-notification__wrapper', 'Ooops! Something is missing.').should('be.visible')
        cy.contains('#input--effective-rate-costumer-name-error', errorMessage).should('be.visible')
        cy.contains('#input--effective-rate-dealer-name-error', errorMessage).should('be.visible')
        cy.contains('#input--effective-rate-vi-year-error', errorMessage).should('be.visible')
        cy.contains('#input--effective-rate-vi-model-error', errorMessage).should('be.visible')
        cy.contains('#input--effective-rate-vi-vin-error', errorMessage).should('be.visible')
        cy.contains('#input--effective-rate-st-sellingPrice-error', errorMessage).should('be.visible')
        cy.contains('#input--effective-rate-st-leaseTerm-error', errorMessage).should('be.visible')
        cy.contains('#input--effective-rate-st-retailTerm-error', errorMessage).should('be.visible')
        cy.contains('#input--effective-rate-st-alternateRetailTerm-error', errorMessage).should('be.visible')
        cy.contains('#input--effective-rate-st-cashDownPayment-error', errorMessage).should('be.visible')
        cy.contains('#input--effective-rate-st-serviceContract-error', errorMessage).should('be.visible')
        cy.contains('#input--effective-rate-st-fleetConcessions-error', errorMessage).scrollIntoView().should('be.visible')
        cy.contains('#input--effective-rate-st-tradeEquity-error', errorMessage).should('be.visible')
        cy.contains('#input--effective-rate-st-residual-error', errorMessage).should('be.visible')
        cy.contains('#input--effective-rate-st-customerLeaseRate-error', errorMessage).should('be.visible')
        cy.contains('#input--effective-rate-st-customerRetailRate-error', errorMessage).should('be.visible')
        cy.contains('#input--effective-rate-st-monthlyMaintenanceCharge-error', errorMessage).should('be.visible')
        cy.contains('#input--effective-rate-cd-sellingPrice-error', errorMessage).should('be.visible')
        cy.contains('#input--effective-rate-cd-fleetConcessions-error', errorMessage).should('be.visible')
        cy.contains('#input--effective-rate-cd-cashDownPayment-error', errorMessage).should('be.visible')
        cy.contains('#input--effective-rate-cd-serviceContract-error', errorMessage).should('be.visible')
        cy.contains('#input--effective-rate-cd-residualAmount-error', errorMessage).should('be.visible')
        cy.contains('#input--effective-rate-cd-competitorPaymentLabel-error', errorMessage).should('be.visible')
        cy.contains('#dropdown--effective-rate-st-payment-timing-error', errorMessage).should('be.visible')
        cy.contains('#input--effective-rate-cd-upfrontFees-error', errorMessage).should('be.visible')
        cy.contains('#input--effective-rate-cd-monthlyManagementFees-error', errorMessage).should('be.visible')
        cy.contains('#input--effective-rate-cd-monthlyMaintenanceCharge-error', errorMessage).should('be.visible')
        cy.contains('#input--effective-rate-cd-leaseEndServiceCharge-error', errorMessage).should('be.visible')

    });
    it.only('Shows messages for all required fields Capital Cost', () => {
        cy.get('.tab-group').contains('Capital Cost').click()
        cy.Submit('#capital-cost')
        cy.contains('.fds-banner-notification__wrapper', 'Ooops! Something is missing.').should('be.visible')
        cy.contains('#input--capital-cost-costumer-name-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-offering-number-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-vehicle-year-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-vehicle-model-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-vehicle-vin-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-factory-invoice-error', errorMessage).scrollIntoView().should('be.visible')
        cy.contains('#input--capital-cost-add-equip-excluded-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-capitalized-initial-title-tax-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-capitalized-initial-title-notax-error', errorMessage).should('be.visible')
        cy.contains('#radio--capital-cost-up-front-taxes-paid-by-dealer-error', errorMessage).should('be.visible')
        cy.contains('#radio--capital-cost-are-taxes-capitalized-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-up-front-local-tax-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-up-front-state-tax-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-up-front-fet-tax-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-up-front-other-tax-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-maintenance-plan-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-service-contract-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-gap-error', errorMessage).scrollIntoView().should('be.visible')
        cy.contains('#input--capital-cost-vehicle-markup-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-capitalized-cost-reduction-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-rebates-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-trade-allowance-error', errorMessage).scrollIntoView().should('be.visible')
        cy.contains('#input--capital-cost-trade-owed-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-residual-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-customer-lease-rate-error', errorMessage).scrollIntoView().should('be.visible')
        cy.contains('#input--capital-cost-dealer-participation-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-term-error', errorMessage).should('be.visible')
        cy.contains('#radio--capital-cost-manufacturing-repurchase-error', errorMessage).should('be.visible')
        cy.contains('#datepicker--capital-cost-supplement-date-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-payment-due-day-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-vehicle-msrp-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-taxes-city-tax-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-taxes-state-tax-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-taxes-county-tax-error', errorMessage).should('be.visible')
        cy.contains('#input--capital-cost-taxes-other-tax-error', errorMessage).should('be.visible')

    });

    it('Clean Form - Quick Quote', () => {
        cy.InputQuickQuote()
        cy.get('#button--clear-form').click()
        cy.get('.fds-modal-dialog--title').contains('Clear Form')
        cy.get('#button--primary-dialog').click()

        cy.get('#input--quick-quote-costumer-name').should('have.value', '');
        cy.get('#input--quick-quote-dealer-name').should('have.value', '');
        cy.get('#input--quick-quote-vi-year').should('have.value', '');
        cy.get('#input--quick-quote-vi-net-cap-cost').should('have.value', '');
        cy.get('#input--quick-quote-st-term').should('have.value', '');
        cy.get('#input--quick-quote-st-residual').should('have.value', '');
        cy.get('#input--quick-quote-st-customer-rate').should('have.value', '');
        cy.get('#input--quick-quote-st-dealer-participation').should('have.value', '');
        cy.get('#dropdown--quick-quote-st-payment-timing').should('have.value', '');
        cy.get('#input--quick-quote-st-tax-rate').should('have.value', '');

    });

    it('Clean Form - Effective Rate', () => {
        cy.InputEffective()
        cy.Clear()
        cy.get('.fds-modal-dialog--title').contains('Clear Form')
        cy.get('#button--primary-dialog').click()

        cy.get('#input--effective-rate-costumer-name').should('have.value', '');
        cy.get('#input--effective-rate-dealer-name').should('have.value', '');
        cy.get('#input--effective-rate-vi-year').should('have.value', '');
        cy.get('#input--effective-rate-vi-model').should('have.value', '');
        cy.get('#input--effective-rate-vi-vin').should('have.value', '');
        cy.get('#input--effective-rate-st-sellingPrice').should('have.value', '');
        cy.get('#input--effective-rate-st-leaseTerm').should('have.value', '');
        cy.get('#input--effective-rate-st-retailTerm').should('have.value', '');
        cy.get('#input--effective-rate-st-alternateRetailTerm').should('have.value', '');
        cy.get('#input--effective-rate-st-cashDownPayment').should('have.value', '');
        cy.get('#input--effective-rate-st-serviceContract').should('have.value', '');
        cy.get('#input--effective-rate-st-fleetConcessions').should('have.value', '');
        cy.get('#input--effective-rate-st-tradeEquity').should('have.value', '');
        cy.get('#input--effective-rate-st-residual').should('have.value', '');
        cy.get('#input--effective-rate-st-customerLeaseRate').should('have.value', '');
        cy.get('#input--effective-rate-st-customerRetailRate').should('have.value', '');
        cy.get('#input--effective-rate-st-monthlyMaintenanceCharge').should('have.value', '');
        cy.get('#input--effective-rate-st-alternateRetailRate').should('have.value', '');
        cy.get('#input--effective-rate-cd-sellingPrice').should('have.value', '');
        cy.get('#input--effective-rate-cd-fleetConcessions').should('have.value', '');
        cy.get('#input--effective-rate-cd-cashDownPayment').should('have.value', '');
        cy.get('#input--effective-rate-cd-serviceContract').should('have.value', '');
        cy.get('#input--effective-rate-cd-residualAmount').should('have.value', '');
        cy.get('#input--effective-rate-cd-competitorPaymentLabel').should('have.value', '');
        cy.get('#dropdown--effective-rate-st-payment-timing').should('have.value', '');
        cy.get('#input--effective-rate-cd-upfrontFees').should('have.value', '');
        cy.get('#input--effective-rate-cd-monthlyManagementFees').should('have.value', '');
        cy.get('#input--effective-rate-cd-monthlyMaintenanceCharge').should('have.value', '')
        cy.get('#input--effective-rate-cd-leaseEndServiceCharge').should('have.value', '')

    });

    it('Clean Form - Payment Comparison', () => {
        cy.InputPayment()
        cy.Clear()
        cy.get('.fds-modal-dialog--title').contains('Clear Form')
        cy.get('#button--primary-dialog').click()

        cy.get('#input--payment-comparison-costumer-name').should('have.value', '')
        cy.get('#input--payment-comparison-dealer-name').should('have.value', '')
        cy.get('#input--payment-comparison-vehicle-year').should('have.value', '')
        cy.get('#input--payment-comparison-vehicle-model').should('have.value', '')
        cy.get('#input--payment-comparison-vehicle-vin').should('have.value', '')
        cy.get('#input--payment-comparison-sellingPrice').should('have.value', '')
        cy.get('#input--payment-comparison-leaseTerm').should('have.value', '')
        cy.get('#input--payment-comparison-retail-term').should('have.value', '')
        cy.get('#input--payment-comparison-cashdown').should('have.value', '')
        cy.get('#input--payment-comparison-commerciallease').should('have.value', '')
        cy.get('#input--payment-comparison-retail-rebate').should('have.value', '')
        cy.get('#input--payment-comparison-trade-equity').should('have.value', '')
        cy.get('#input--payment-comparison-residual').should('have.value', '')
        cy.get('#input--payment-comparison-customer-lease-rate').should('have.value', '')
        cy.get('#input--payment-comparison-customer-retail-rate').should('have.value', '')
        cy.get('#input--payment-comparison-tax-rate').should('have.value', '')
        cy.get('#textarea--payment-comparison-notes').should('have.value', '')

    });

    it('Clean Form - Capital Cost', () => {
        cy.InputCapital()
        cy.Clear()
        cy.get('.fds-modal-dialog--title').contains('Clear Form')
        cy.get('#button--primary-dialog').click()

        cy.get('#input--capital-cost-costumer-name').should('have.value', '')
        cy.get('#input--capital-cost-offering-number').should('have.value', '')
        cy.get('#input--capital-cost-vehicle-year').should('have.value', '')
        cy.get('#input--capital-cost-vehicle-model').should('have.value', '')
        cy.get('#input--capital-cost-vehicle-vin').should('have.value', '')
        cy.get('#input--fds-table-equipment-description-0').should('have.value', '')
        cy.get('#input--fds-table-equipment-value-0').should('have.value', '')
        cy.get('#input--capital-cost-factory-invoice').should('have.value', '')
        cy.get('#input--capital-cost-add-equip-excluded').should('have.value', '')
        cy.get('#input--capital-cost-capitalized-initial-title-tax').should('have.value', '')
        cy.get('#input--capital-cost-capitalized-initial-title-notax').should('have.value', '')
        cy.get('#input--capital-cost-up-front-local-tax').should('have.value', '')
        cy.get('#input--capital-cost-up-front-state-tax').should('have.value', '')
        cy.get('#input--capital-cost-up-front-fet-tax').should('have.value', '')
        cy.get('#input--capital-cost-up-front-other-tax').should('have.value', '')
        cy.get('#input--capital-cost-maintenance-plan').should('have.value', '')
        cy.get('#dropdown--capital-cost-dropdown-maintenance').should('have.value', '')
        cy.get('#input--capital-cost-service-contract').should('have.value', '')
        cy.get('#dropdown--capital-cost-dropdown-service').should('have.value', '')
        cy.get('#input--capital-cost-gap').should('have.value', '')
        cy.get('#dropdown--capital-cost-dropdown-gap').should('have.value', '')
        cy.get('#input--capital-cost-vehicle-markup').should('have.value', '')
        cy.get('#input--capital-cost-capitalized-cost-reduction').should('have.value', '')
        cy.get('#input--capital-cost-rebates').should('have.value', '')
        cy.get('#input--capital-cost-trade-allowance').should('have.value', '')
        cy.get('#input--capital-cost-trade-owed').should('have.value', '')
        cy.get('#input--capital-cost-residual').should('have.value', '')
        cy.get('#input--capital-cost-customer-lease-rate').should('have.value', '')
        cy.get('#input--capital-cost-dealer-participation').should('have.value', '')
        cy.get('#input--capital-cost-term').should('have.value', '')
        cy.get('#datepicker--capital-cost-supplement-date').should('have.value', '')
        cy.get('#input--capital-cost-payment-due-day').should('have.value', '')
        cy.get('#dropdown--capital-cost-payment-timing').should('have.value', '')
        cy.get('#input--capital-cost-vehicle-msrp').should('have.value', '')
        cy.get('#input--capital-cost-taxes-city-tax').should('have.value', '')
        cy.get('#input--capital-cost-taxes-state-tax').should('have.value', '')
        cy.get('#input--capital-cost-taxes-county-tax').should('have.value', '')
        cy.get('#input--capital-cost-taxes-other-tax').should('have.value', '')

    });

    it('Clear All Forms', () => {
        //Capital Cost
        cy.InputCapital()
        //Quick Quote
        cy.InputQuickQuote()
        //Payment Comparison
        cy.InputPayment()
        //Effective Rate
        cy.InputEffective()

         //validate
        cy.get('#button--clear-all-form').click()
        cy.get('.fds-modal-dialog--title').contains('Clear All Forms')
        cy.get('#button--primary-dialog').click()
        cy.get('.tab-group').contains('Capital Cost').click()
        cy.get('#input--capital-cost-costumer-name').should('have.value', '');
        cy.get('#input--capital-cost-offering-number').should('have.value', '');
        cy.get('.tab-group').contains('Quick Quote').click()
        cy.get('#input--quick-quote-costumer-name').should('have.value', '');
        cy.get('#input--quick-quote-dealer-name').should('have.value', '');
        cy.get('.tab-group').contains('Payment Comparison').click()
        cy.get('#input--payment-comparison-costumer-name').should('have.value', '');
        cy.get('#input--payment-comparison-dealer-name').should('have.value', '');
        cy.get('.tab-group').contains('Effective Rate').click()
        cy.get('#input--effective-rate-costumer-name').should('have.value', '');
        cy.get('#input--effective-rate-dealer-name').should('have.value', '');
    });
});