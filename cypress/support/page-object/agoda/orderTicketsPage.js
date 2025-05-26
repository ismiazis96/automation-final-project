

class orderTicket{
    tablist() {
        cy.xpath(`//div[@id='Tabs-Container']//li[@id='tab-flight-tab']`).click();
    }

    formBooking() {
        cy.xpath(`//div[@class='AutocompleteSearch NewDesign'][1]`).click();
        cy.xpath(`//input[@id='flight-origin-search-input']`).type('jakarta');
        cy.xpath(`//div[@class='Popup__content']//li[@data-selenium='autosuggest-item'][1]`).click();
        cy.xpath(`//div[@class='AutocompleteSearch NewDesign'][2]`).click();
        cy.xpath(`//input[@id='flight-destination-search-input']`).type('singapura');
        cy.xpath(`//div[@class='Popup__content']//li[@data-selenium='autosuggest-item'][1]`).click();
    }

}

export default new orderTicket();