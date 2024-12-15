import { visualPage } from "../support/page-objects/PageIndex";

describe("State Management / Visual Comparison Test", () => {
  beforeEach(() => {
    cy.interceptGoogleAnalytics();
    cy.visit("/visual");
    cy.waitOnInterceptedGoogleAnalytics();
  });

  it("Should modify the element to stable state and compare visual screenshot", () => {
    visualPage
      .getGif()
      .should("be.visible")
      .screenshot("initial-state")
      .then(() => {
        visualPage
          .getGif()
          .invoke(
            "attr",
            "src",
            "https://i.postimg.cc/YqPwSVxH/static-image.png"
          )
          .screenshot("desired-state");
      })
      .then(() => {
        visualPage.getGif().matchImageSnapshot("desired-state");
      });
  });
});
