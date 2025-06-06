

class orderTicket{
    tablist() {
        cy.xpath(`//div[@id='Tabs-Container']//li[@id='tab-flight-tab']`).click();
    }

    formBooking({
        tujuanAwal=Cypress.env('FLIGHT_ORIGIN'),
        tujuanAkhir=Cypress.env('FLIGHT_DESTINATION')
    }) {
        cy.xpath(`//div[@class='AutocompleteSearch NewDesign'][1]`).click();
        cy.xpath(`//input[@id='flight-origin-search-input']`).type(tujuanAwal);
        cy.xpath(`//div[@class='Popup__content']//li[@data-selenium='autosuggest-item'][1]`).click();
        cy.xpath(`//div[@class='AutocompleteSearch NewDesign'][2]`).click();
        cy.xpath(`//input[@id='flight-destination-search-input']`).type(tujuanAkhir);
        cy.xpath(`//div[@class='Popup__content']//li[@data-selenium='autosuggest-item'][1]`).click();
        cy.xpath(`//div[@class='PriceSurgePicker-Day PriceSurgePicker-Day__Wide today']/following-sibling::div[1]`).click();
        cy.xpath(`//button[@data-selenium="searchButton"]`).click();

        // wrap value untuk di pake lain tempat
        cy.wrap(
            `${tujuanAwal}`
          ).as("tujuanAwal");

          cy.wrap(
            `${tujuanAkhir}`
          ).as("tujuanAkhir");  

    }

    filterData() {
        // filter pilih maskapai
        cy.xpath(`//div[@data-testid="filter-container"]//button/span[starts-with(@label,"Tampilkan semua")]`).click();
        cy.xpath(`//div[@data-component='flight-filter-item-airline']//label[@data-element-value='Batik Air (Malaysia)']//input[@type='checkbox']`).check();

        // filter dulu berdasarkan yang paling awal keberangaktan
        cy.xpath(`//div[@data-element-name="flight-sort"]`).click();
        cy.xpath(`//div[@data-testid="floater-container"]//li[@role="presentation"][4]`).click();
        cy.xpath(`//div[@data-element-name="flight-sort"]`).click();
    }

    selectFlight() {
        cy.get('[data-testid="flightCard-flight-detail"]')
			.closest('[data-testid="flightCard-flight-detail"]')
			.as("penerbanganDipilih");

		cy.get("@penerbanganDipilih").first().click();
        cy.xpath(`//button[@data-component="flight-card-bookButton"]`).click({ multiple: true });
    }

    contactInformation({
        firsname=Cypress.env('contactFirstName'),
        lastname=Cypress.env('contactLastName'),
        email=Cypress.env('contactEmail'),
        phoneNumber=Cypress.env('contactPhoneNumber')
    }) {
        cy.xpath(`//input[@id='contact.contactFirstName']`).type(firsname);
        cy.xpath(`//input[@id='contact.contactLastName']`).type(lastname);
        cy.xpath(`//input[@id='contact.contactEmail']`).type(email);
        cy.xpath(`//input[@id='contact.contactPhoneNumber']`).type(phoneNumber);
    }

    formPassenger({
        passengerFirstname=Cypress.env('PASSENGER_FIRSTNAME'),
        passengerLastname=Cypress.env('PASSENGER_LASTNAME'),
        passengerDate=Cypress.env('PASSENGER_DATE'),
        passengerMonth=Cypress.env('PASSENGER_MONTH'),
        PassengerYears=Cypress.env('PASSENGER_YEARS'),
        passengerNationality=Cypress.env('PASSENGER_NATIONAL'),
        passengerGender=Cypress.env('PASSENGER_GENDER')
    }) {
        
        cy.then(() => {
            if(passengerGender === 'Pria'){
                cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passengerGender"]//input[@aria-label="Pria" and @type="radio"]`).click();
                cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passengerGender"]//input[@aria-label="Pria" and @type="radio"]`).click();
            }else{
                cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passengerGender"]//input[@aria-label="Wanita" and @type="radio"]`).check();
            }
        });
        
        cy.xpath(`//input[@id='flight.forms.i0.units.i0.passengerFirstName']`).type(passengerFirstname);
        cy.xpath(`//input[@id='flight.forms.i0.units.i0.passengerLastName']`).type(passengerLastname);

        // wrap as full name
      cy.wrap(
        `${passengerFirstname} ${passengerLastname}`
      ).as("fullName");
      
        cy.xpath(`//input[@data-testid='flight.forms.i0.units.i0.passengerDateOfBirth-DateInputDataTestId']`).type(passengerDate);
        cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passengerDateOfBirth-MonthInputDataTestId"]`).click();
        cy.xpath(`//div[@data-testid="floater-container"]//span[contains(text(), '${passengerMonth}')]`).click()
        cy.xpath(`//input[@data-testid='flight.forms.i0.units.i0.passengerDateOfBirth-YearInputDataTestId']`).type(PassengerYears);
        cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passengerNationality"]`).click();
        cy.xpath(`//input[@placeholder="Cari"]`).type(passengerNationality);
        cy.xpath(`//ul[@role='listbox']`).click();

        

    }

    formPassport({        
        passportNumber=Cypress.env('PASSPORT_NUMBER'),
        passportCountry=Cypress.env('PASSPORT_COUNTRY'),
        passportDate=Cypress.env('PASSPORT_DATE'),
        passportMonth=Cypress.env('PASSPORT_MONTH'),
        PassportYears=Cypress.env('PASSPORT_YEARS')
    }) {
 
        cy.xpath(`//input[@id="flight.forms.i0.units.i0.passportNumber"]`).click().type(passportNumber);
        cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passportCountryOfIssue"]//button`).click();
        cy.xpath(`//input[@placeholder="Cari"]`).type(passportCountry);
        cy.xpath(`//ul[@role='listbox']`).click();
        cy.xpath(`//input[@data-testid='flight.forms.i0.units.i0.passportExpiryDate-DateInputDataTestId']`).type(passportDate);
        cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passportExpiryDate-MonthInputDataTestId"]`).click();
        cy.xpath(`//div[@data-testid="floater-container"]//span[contains(text(),'${passportMonth}')]`).click();
        cy.xpath(`//input[@datatestid="flight.forms.i0.units.i0.passportExpiryDate-YearInputDataTestId"]`).type(PassportYears);

    }

    addOn() {
        cy.xpath(`//button[@data-component="flight-continue-to-addOns-button"]`).click({ force: true });
        cy.wait(5000);
        cy.xpath(`//div[@data-testid="radio-button-option-no"]`).click();
        cy.wait(5000);
        cy.xpath(`//button[@data-testid="continue-to-payment-button"]`).click();
    }

    // pagePaymentAssertion() {
        
    //     cy.xpath(`//div[@data-component='passenger-summary-list']//strong[@data-component="name-container-name"]`).should('be.visible');
    //     cy.xpath(`//div[@data-component='flight-booking-itineraryHeader']//h5[1]`).should('be.visible');
    //     cy.xpath(`//div[@data-component='flight-booking-itineraryHeader']//h5[2]`).should('be.visible');
    //     cy.xpath(`//dd[@data-component='mob-flight-price-total-desc']//span`).should('be.visible');
    // }

    pagePaymentAssertion() {
        cy.get("@fullName").then((fullName) => {
            cy.xpath(`//div[@data-component='passenger-summary-list']//strong[@data-component="name-container-name"]`).invoke("text").should("contain", fullName);
        });

        cy.get("@tujuanAwal").then((tujuanAwal) => {
            cy.xpath(`//div[@data-component='flight-booking-itineraryHeader']//h5[1]`).invoke("text").should("contain", tujuanAwal);
        });

        cy.get("@tujuanAkhir").then((tujuanAkhir) => {
            cy.xpath(`//div[@data-component='flight-booking-itineraryHeader']//h5[2]`).invoke("text").should("contain", tujuanAkhir);
        });
        cy.xpath(`//dd[@data-component='mob-flight-price-total-desc']//span`).should('be.visible');
    }

}

export default new orderTicket();