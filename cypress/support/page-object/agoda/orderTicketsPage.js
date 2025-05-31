

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
        cy.xpath(`//div[@class="PriceSurgePicker-Day PriceSurgePicker-Day__Wide weekends"][@aria-label="Sun Jun 01 2025 "]`).click();
        // cy.xpath(`//div[@class='PriceSurgePicker-Day PriceSurgePicker-Day__Wide today']/following-sibling::div[1]`).click();
        cy.xpath(`//button[@data-selenium="searchButton"]`).click();
    }

    filterData() {
        // filter pilih maskapai
        cy.xpath(`//div[@class='a5d86-box a5d86-fill-inherit a5d86-text-inherit a5d86-self-center a5d86-flex      ']//button[@type='button']`).click();
        cy.xpath(`//div[@data-component='flight-filter-item-airline']//label[@data-element-value='Batik Air (Malaysia)']//input[@type='checkbox']`).check();

        // filter dulu berdasarkan yang paling awal keberangaktan
        cy.xpath(`//div[@data-element-name="flight-sort"]`).click();
        cy.xpath(`//div[@data-testid="floater-container"]//li[@role="presentation"][4]`).click();
        cy.xpath(`//div[@data-element-name="flight-sort"]`).click();
    }

    selectFlight() {
        cy.xpath(`//div[@class='sc-cjERFW fdGdnw']//div[@class="sc-cCYyox iNqLle"][1]`).click();
        cy.xpath(`//button[@data-component="flight-card-bookButton"]`).click();
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
        PassengerYears=Cypress.env('PASSENGER_YEARS'),
        passengerNationality=Cypress.env('PASSENGER_NATIONAL')
    }) {
        cy.xpath(`//input[@aria-label="Pria"][@type='radio']`).click();
        cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passengerGender"]//label[@data-element-name='0']`).click();
        // cy.get('[data-testid="0"] > .sc-fLQRDB > .a5d86-w-full > .sc-bALXmG').click();
        
        cy.xpath(`//input[@id='flight.forms.i0.units.i0.passengerFirstName']`).type(passengerFirstname);
        cy.xpath(`//input[@id='flight.forms.i0.units.i0.passengerLastName']`).type(passengerLastname);
        cy.xpath(`//input[@data-testid='flight.forms.i0.units.i0.passengerDateOfBirth-DateInputDataTestId']`).type(passengerDate);
        cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passengerDateOfBirth-MonthInputDataTestId"]`).click();
        cy.xpath(`//div[@data-testid="floater-container"]//ul[@role="listbox"]//li[@class='a5d86-box a5d86-fill-inherit a5d86-text-inherit      '][1]`).click();
        cy.xpath(`//input[@data-testid='flight.forms.i0.units.i0.passengerDateOfBirth-YearInputDataTestId']`).type(PassengerYears);
        cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passengerNationality"]`).click();
        cy.xpath(`//input[@placeholder="Cari"]`).type(passengerNationality);
        cy.xpath(`//div[@class='a5d86-box a5d86-fill-inherit a5d86-text-inherit a5d86-flex a5d86-overflow-y-auto      ']`).click();

    }

}

export default new orderTicket();