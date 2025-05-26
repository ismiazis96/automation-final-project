
describe('FInal Project', () => {
    it.skip('search video pada youtube.com', () => {

        // cy.visit('https://www.youtube.com');
        cy.visit(Cypress.env(`BASE_URL1`));
        // klik trending
        cy.get(':nth-child(4) > #items > :nth-child(1) > #endpoint > tp-yt-paper-item.style-scope > .title').click();
        // pilih movies
        cy.get('.yt-tab-shape-wiz__tab--last-tab > .yt-tab-shape-wiz__tab').click();
        // ambil trending yang no 3
        cy.contains('Jalan Pulang - Official Trailer').invoke('text').then((text) => {
            cy.log('Teks yang didapat:', text);
            // expectTitle= text;
            // cy.wrap(expectTitle).as(title);
            cy.wrap(text).as('newTitle');

          });

        cy.contains('Jalan Pulang - Official Trailer').click();

            cy.get('@newTitle').then((title) => { // Ambil alias
            cy.log(title); // Output: 'a'
            cy.get('[title="Jalan Pulang - Official Trailer"]').should('contain',title);

            });   
    });

    it('youtube search', () => {
        cy.visit(Cypress.env(`BASE_URL_YOUTUBE`));
        cy.xpath(`//a[@id='endpoint'][@title='Trending']`).click();
        cy.xpath(`//yt-tab-shape[@role="tab"][4]`).click();
        cy.wait(5000);
        cy.xpath(`//ytd-video-renderer[@class='style-scope ytd-expanded-shelf-contents-renderer'][3]//a[@id='video-title']`).click();
        cy.xpath(`//div[@id='title'][@class='style-scope ytd-watch-metadata']`).should('be.visible');
    });

    it('Filter sort by price High to Low items Chair with AmazonDotCom', () => {
        cy.visit(Cypress.env('BASE_URL_AMAZON'));
        cy.wait(5000);
        cy.xpath(`//input[@id='twotabsearchtextbox']`).type('chair');
        cy.xpath(`//div[@class='nav-right']//input[@type='submit']`).click();
        cy.wait(5000);
        cy.get('#a-autoid-0-announce').click();
        cy.xpath(`//div[@id='a-popover-2']//li[3]`).click();
        cy.xpath(`//div[@class='s-main-slot s-result-list s-search-results sg-row']//div[@role='listitem'][5]`).click();
        cy.xpath(`//div[@id='titleSection']//span[@id='productTitle']`).should('contain','        Office Chair Leather Home Desk 360° Rotating Office Chair       ');
        cy.xpath(`//div[@id='corePriceDisplay_desktop_feature_div']//span[@class='a-price-whole']`).should('contain','39,480');
    });

    it.skip('Order Ticket flight with AgodaDotCom', () => {
        cy.visit(Cypress.env(`BASE_URL_AGODA`));
        cy.xpath(`//div[@id='Tabs-Container']//li[@id='tab-flight-tab']`).click();
        cy.xpath(`//div[@class='AutocompleteSearch NewDesign'][1]`).click();
        cy.xpath(`//input[@id='flight-origin-search-input']`).type('jakarta');
        cy.xpath(`//div[@class='Popup__content']//li[@data-selenium='autosuggest-item'][1]`).click();
        cy.xpath(`//div[@class='AutocompleteSearch NewDesign'][2]`).click();
        cy.xpath(`//input[@id='flight-destination-search-input']`).type('singapura');
        cy.xpath(`//div[@class='Popup__content']//li[@data-selenium='autosuggest-item'][1]`).click();
        //cy.xpath(`//div[@data-selenium='date-selector-title']`).click();
        // cy.get('#flight-departure > .Box-sc-kv6pi1-0').click();
        cy.get('#flight-departure > .Box-sc-kv6pi1-0 > .IconBox__child > .SearchBoxTextDescription > .SearchBoxTextDescription__title').click();
        cy.wait(2000);
        cy.xpath(`//div[@class='PriceSurgePicker-Day PriceSurgePicker-Day__Wide selected checkIn startDateOnly']`).click();
        cy.xpath(`//button[@data-selenium="searchButton"]`).click();


    });


});