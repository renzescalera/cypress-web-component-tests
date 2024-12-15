import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command";

addMatchImageSnapshotCommand();

Cypress.Commands.add("interceptGoogleAnalytics", () => {
  cy.intercept("POST", "https://www.google-analytics.com/j/collect?*").as(
    "googleAnalytics"
  );
});

Cypress.Commands.add("waitOnInterceptedGoogleAnalytics", () => {
  cy.wait("@googleAnalytics");
});
