/* cari video trending dari kategori movies

pilih video trending no.3
share link dari video tersebut (dari page trending)
buka halaman video melalui link tersebut
di halaman video, expect title, dan youtube channelnya sama seperti yang di page trending

*/

describe('Youtube', () => {
    it('Search Youtube', () => {

        // cy.visit('https://www.youtube.com');
        cy.visit(Cypress.env(`BASE_URL1`));
        cy.wait(10000);
        cy.get(':nth-child(4) > #items > :nth-child(1) > #endpoint > tp-yt-paper-item.style-scope > .title').click();
        cy.get('.yt-tab-shape-wiz__tab--last-tab > .yt-tab-shape-wiz__tab').click();
        
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
});