

class filterItemsPage {
    searchItems() {
        cy.xpath(`//input[@id='twotabsearchtextbox']`).type('chair');
        cy.xpath(`//div[@class='nav-right']//input[@type='submit']`).click();
    }

    sortFeatureItems() {
        cy.get('#a-autoid-0-announce').click();
        cy.xpath(`//div[@id='a-popover-2']//li[3]`).click();
    }

    selectItems() {
        cy.xpath(`//div[@class='s-main-slot s-result-list s-search-results sg-row']//div[@role='listitem'][5]`).click();
    }

    assertionPage() {
        cy.xpath(`//div[@id='titleSection']//span[@id='productTitle']`).should('contain','        Office Chair Leather Home Desk 360° Rotating Office Chair       ');
        cy.xpath(`//div[@id='corePriceDisplay_desktop_feature_div']//span[@class='a-price-whole']`).should('contain','39,480');
    }


}

export default new filterItemsPage()