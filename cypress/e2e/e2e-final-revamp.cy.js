
const agoda = require('../support/page-object/agoda/orderTicketsPage');
const amazon = require('../support/page-object/amazon/filterItemsPage');
const youtube = require('../support/page-object/youtube/trendingPage');

describe('FInal Project', () => {

    it.skip('youtube search', () => {
        cy.visit(Cypress.env(`BASE_URL_YOUTUBE`));
        youtube.goToTrending();
        youtube.listMenuTrendingMovies();
        cy.wait(5000);
        youtube.goToTrendingMovies();
        youtube.assertionPage();
    });

    it.skip('Filter sort by price High to Low items Chair with AmazonDotCom', () => {
        cy.visit(Cypress.env('BASE_URL_AMAZON'));
        cy.wait(5000);
        amazon.searchItems();
        cy.wait(5000);
        amazon.sortFeatureItems();
        amazon.selectItems();
        amazon.assertionPage();
    });

    it.skip('Order Ticket flight with AgodaDotCom', () => {
        cy.visit(Cypress.env(`BASE_URL_AGODA`));
        agoda.tablist();
        agoda.formBooking();
        
        //cy.xpath(`//div[@data-selenium='date-selector-title']`).click();
        // cy.get('#flight-departure > .Box-sc-kv6pi1-0').click();
        cy.get('#flight-departure > .Box-sc-kv6pi1-0 > .IconBox__child > .SearchBoxTextDescription > .SearchBoxTextDescription__title').click();
        cy.wait(2000);
        cy.xpath(`//div[@class='PriceSurgePicker-Day PriceSurgePicker-Day__Wide selected checkIn startDateOnly']`).click();
        cy.xpath(`//button[@data-selenium="searchButton"]`).click();


        // filter pilih maskapai
        cy.contains('Tampilkan semua 20 maskapai').click();
        cy.xpath(`//div[@data-component='flight-filter-item-airline']//label[@data-element-value='Malaysia Airlines']//input[@type='checkbox']`).check();

        // pilih maskapai yang awal banget
        cy.xpath(`//div[@data-testid="flight-infinite-scroll"]//div[@class='GridItem__GridItemStyled-sc-3btv1u-0 fXrNCt'][1]`).click();
        cy.xpath(`//button[@data-component="flight-card-bookButton"]`).click();

        // form user booking
        cy.xpath(`//input[@id='contact.contactFirstName']`).type('Ismi');
        cy.xpath(`//input[@id='contact.contactLastName']`).type('Azis');
        cy.xpath(`//input[@id='contact.contactEmail']`).type('ismiazis@mail.com');
        cy.xpath(`//input[@id='contact.contactPhoneNumber']`).type('88811112323');
        cy.xpath(`//div[@data-testid='flight.forms.i0.units.i0.passengerGender']//label[@data-testid='0']`).check();

        // penumpang 1
        cy.xpath(`//input[@id='flight.forms.i0.units.i0.passengerFirstName']`).type('mahira ismi');
        cy.xpath(`//input[@id='flight.forms.i0.units.i0.passengerLastName']`).type('azis');
        









    });


});