import { authenticationPage } from "../support/page-objects/PageIndex";

describe("Authentication Tests", () => {
  const validCredentials = {
    username: Cypress.env("username"),
    password: Cypress.env("password"),
  };

  const invalidCredentials = {
    username: "cypressTesting@fnix.nl",
    password: "test123",
  };

  beforeEach(() => {
    cy.interceptGoogleAnalytics();
    cy.visit("/auth_ecommerce");
    cy.waitOnInterceptedGoogleAnalytics();
  });

  it("Should be able to login successfully with valid credentials", () => {
    authenticationPage.login(
      validCredentials.username,
      validCredentials.password
    );

    authenticationPage.validateElementsAfterSuccessfulLogin();
  });

  it("Should not be able to Login with invalid username", () => {
    authenticationPage.login(
      invalidCredentials.username,
      validCredentials.password
    );

    authenticationPage.validateErrorMessage();
  });

  it("Should not be able to Login with invalid password", () => {
    authenticationPage.login(
      validCredentials.username,
      invalidCredentials.password
    );

    authenticationPage.validateErrorMessage();
  });

  it("Should not be able to Login with invalid username and password", () => {
    authenticationPage.login(
      invalidCredentials.username,
      invalidCredentials.password
    );

    authenticationPage.validateErrorMessage();
  });

  it("Should not be able to Login with empty username", () => {
    authenticationPage
      .getPasswordField()
      .should("be.visible")
      .type(validCredentials.password);
    authenticationPage.getSubmitButton().should("be.visible").click();

    authenticationPage.validateErrorMessage();
  });

  it("Should not be able to Login with empty password", () => {
    authenticationPage
      .getEmailField()
      .should("be.visible")
      .type(validCredentials.username);
    authenticationPage.getSubmitButton().should("be.visible").click();

    authenticationPage.validateErrorMessage();
  });

  it("Should not be able to Login with empty username and password", () => {
    authenticationPage.getSubmitButton().should("be.visible").click();

    authenticationPage.validateErrorMessage();
  });
});
