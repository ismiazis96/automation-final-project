
const agoda = require('../support/page-object/agoda/orderTicketsPage');
const amazon = require('../support/page-object/amazon/filterItemsPage');
const youtube = require('../support/page-object/youtube/trendingPage');

describe('FInal Project', () => {

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it('youtube search', () => {
        cy.visit(Cypress.env(`BASE_URL_YOUTUBE`));
        youtube.goToTrending();
        youtube.listMenuTrendingMovies();
        cy.wait(5000);
        youtube.goToTrendingMovies();
        youtube.assertionPage();
    });

    it('Filter sort by price High to Low items Chair with AmazonDotCom', () => {
        cy.visit(Cypress.env('BASE_URL_AMAZON'));
        cy.wait(5000);
        amazon.searchItems();
        cy.wait(5000);
        amazon.sortFeatureItems();
        amazon.selectItems();
        amazon.assertionPage();
    });

    it.skip('Order Ticket flight with AgodaDotCom', () => {
        

        // cy.visit(Cypress.env(`BASE_URL_AGODA`));
        cy.visit('https://www.agoda.com/id-id/');
        agoda.tablist();
        agoda.formBooking({});        
        agoda.filterData();
        cy.wait(5000);
        agoda.selectFlight();
        cy.wait(2000);        
        agoda.contactInformation({});
        
        // form passenger
        agoda.formPassenger({});
        
        // lanjut add on
        cy.get('[data-testid="kite-box"] > :nth-child(1) > .a5d86-bg-product-primary').click();
        cy.wait(5000);
        // cy.xpath(`//div[@data-testid="add-on-radio-select-TRIP_PROTECTION"]//div[@tabindex="0"]`).click();
        cy.xpath(`//div[@data-testid="radio-button-option-no"]`).click();
        cy.xpath(`//button[@data-testid="continue-to-payment-button"]`).click();

        

    });


});