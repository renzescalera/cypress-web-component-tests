import { registerFormPage } from "../support/page-objects/PageIndex";
const { faker } = require("@faker-js/faker");

describe("Register Form Tests", () => {
  const registerInfoObject = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phoneNumber: faker.phone.number(),
    country: faker.location.country(),
    password: faker.internet.password(18),
  };

  registerInfoObject.email = faker.internet.email(
    registerInfoObject.firstName,
    registerInfoObject.lastName
  );

  beforeEach(() => {
    cy.visit("/register");

    registerFormPage.getSuccessfulMessage().should("not.be.visible");
  });

  it("Should be able to complete Register Form successfully", () => {
    registerFormPage.completeRegisterForm(registerInfoObject);
    registerFormPage.getRegisterButton().should("be.visible").click();
    registerFormPage.getSuccessfulMessage().should("be.visible");
  });
});
