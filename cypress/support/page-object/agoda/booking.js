const element = require('../../element/bookingPage.json');

class orderTicket{
    tablist() {
        cy.xpath(`${element.pilihMenu.menu}`).click();
    }

    formBooking({
        tujuanAwal=Cypress.env('FLIGHT_ORIGIN'),
        tujuanAkhir=Cypress.env('FLIGHT_DESTINATION')
    }) {
        
        cy.xpath(`${element.booking.from}`).type(tujuanAwal);
        cy.xpath(`${element.booking.selectFrom}`).click();
        cy.xpath(`${element.booking.to}`).type(tujuanAkhir);
        cy.xpath(`${element.booking.selectTo}`).click();
        cy.xpath(`${element.booking.date}`).click();
        cy.xpath(`${element.booking.buttonSearch}`).click();

        // wrap value untuk di pake lain tempat
        cy.wrap(
            `${tujuanAwal}`
          ).as("tujuanAwal");

          cy.wrap(
            `${tujuanAkhir}`
          ).as("tujuanAkhir");  

    }

    filterData() {
        cy.xpath(`${element.filter.showData}`).click();
        cy.xpath(`${element.filter.checkMaskapai}`).check();
        cy.xpath(`${element.filter.clickSort}`).click();
        cy.xpath(`${element.filter.selectSort}`).click({ force: true });
        cy.xpath(`${element.filter.clickSort}`).click();
    }

    selectFlight() {
        cy.get(element.selectFlight.selectFlight)
			.closest(element.selectFlight.selectFlight)
			.as("penerbanganDipilih");

		cy.get("@penerbanganDipilih").first().click();
        cy.xpath(`${element.selectFlight.btnFlight}`).click({ multiple: true });
    }

    contactInformation({
        firsname=Cypress.env('contactFirstName'),
        lastname=Cypress.env('contactLastName'),
        email=Cypress.env('contactEmail'),
        phoneNumber=Cypress.env('contactPhoneNumber')
    }) {
        cy.xpath(`${element.contact.firstname}`).type(firsname);
        cy.xpath(`${element.contact.lastname}`).type(lastname);
        cy.xpath(`${element.contact.email}`).type(email);
        cy.xpath(`${element.contact.phone}`).type(phoneNumber);
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
        
        cy.xpath(`${element.passenger.firsname}`).type(passengerFirstname);
        cy.xpath(`${element.passenger.lastname}`).type(passengerLastname);

        // wrap as full name
      cy.wrap(
        `${passengerFirstname} ${passengerLastname}`
      ).as("fullName");
      
        cy.xpath(`${element.passenger.date}`).type(passengerDate);
        cy.xpath(`${element.passenger.btnMonth}`).click();
        cy.xpath(`//div[@data-testid="floater-container"]//span[contains(text(), '${passengerMonth}')]`).click()
        cy.xpath(`${element.passenger.years}`).type(PassengerYears);
        cy.xpath(`${element.passenger.btnNationality}`).click();
        cy.xpath(`${element.passenger.typeNationality}`).type(passengerNationality);
        cy.xpath(`${element.passenger.selectNationality}`).click();

        

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
        cy.xpath('//div[@role="radiogroup"]//div[@data-testid="radio-button-option-no"]').click({ multiple: true, force: true });
        // cy.wait(5000);
        cy.xpath(`//button[@data-testid="continue-to-payment-button"]`).click();
    }

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