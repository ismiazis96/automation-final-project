

class trendingPage{
    goToTrending() {
        cy.xpath(`//a[@id='endpoint'][@title='Trending']`).click();
    }
    listMenuTrendingMovies() {
        cy.xpath(`//yt-tab-shape[@role="tab"][4]`).click();
    }

    // goToTrendingMovies() {
    //     cy.xpath(`//ytd-video-renderer[@class='style-scope ytd-expanded-shelf-contents-renderer'][3]//a[@id='video-title']`).click({ multiple: true })
    // }

    goToTrendingMovies() {
        cy.xpath(`//ytd-video-renderer[@class='style-scope ytd-expanded-shelf-contents-renderer']//a[@id='video-title']`).eq(2).click();
    }

    assertionPage() {
        cy.xpath(`//div[@id='title'][@class='style-scope ytd-watch-metadata']`).should('be.visible');
    }
 
}

export default new trendingPage();