
const agoda = require('../support/page-object/agoda/booking');
const amazon = require('../support/page-object/amazon/filterItemsPage');
const youtube = require('../support/page-object/youtube/trendingPage');

describe('FInal Project', () => {

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it('youtube search Trending', () => {
        cy.visit(Cypress.env(`BASE_URL_YOUTUBE`));
        youtube.goToTrending();
        youtube.listMenuTrendingMovies();
        // cy.wait(5000);
        youtube.goToTrendingMovies();
        youtube.assertionPage();
    });

    it('Filter sort by price High to Low items Chair with AmazonDotCom', () => {
        cy.visit(Cypress.env('BASE_URL_AMAZON'));
        // cy.wait(5000);
        amazon.searchItems();
        // cy.wait(5000);
        amazon.sortFeatureItems();
        amazon.selectItems();
        amazon.assertionPage();
    });

    it('Order Ticket flight with AgodaDotCom', () => {
        
        // cy.visit('https://www.agoda.com/id-id/');
        cy.visit(Cypress.env('BASE_URL_AGODA'));
        agoda.tablist();
        agoda.formBooking({});        
        agoda.filterData();
        // cy.wait(5000);
        agoda.selectFlight();
        // cy.wait(2000);        
        agoda.contactInformation({});
        // form passenger
        agoda.formPassenger({});    
        
        cy.get("body").then(($body) => {
            if ($body.find('input[data-testid="flight.forms.i0.units.i0.passportNumber"]').length > 0){
                agoda.formPassport({});
            } else {
                cy.log('Skip aja form passport')
            }

        });
        // cy.wait(10000);
        // lanjut add on
        agoda.addOn();

        // cek dulu apa ada element pop up
        cy.get('body').then(($body) => {
            const xpath = "//button[@aria-label='close']";
            const result = document.evaluate(
              xpath,
              $body[0],
              null,
              XPathResult.FIRST_ORDERED_NODE_TYPE,
              null
            );
            const closeBtn = result.singleNodeValue;
          
            if (closeBtn) {
              cy.wrap(closeBtn).click(); // klik kalau ada
            } else {
              cy.log('Tidak ada tombol close, lanjutkan saja');
            }
          });
        cy.wait(10000);
        agoda.pagePaymentAssertion();
        

    });


});

