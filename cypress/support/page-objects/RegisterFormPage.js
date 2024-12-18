class RegisterForm {
  constructor(cy) {
    this.cy = cy;
  }

  getfirstNameField() {
    return this.cy.get("#firstName");
  }

  getLastNameField() {
    return this.cy.get("#lastName");
  }

  getPhoneNumberField() {
    return this.cy.get("#phone");
  }

  getCountryField() {
    return this.cy.get("#countries_dropdown_menu");
  }

  getEmailField() {
    return this.cy.get("#emailAddress");
  }

  getPasswordField() {
    return this.cy.get("#password");
  }

  getTermsAndConditionsCheckbox() {
    return this.cy.get("#exampleCheck1");
  }

  getRegisterButton() {
    return this.cy.get("#registerBtn");
  }

  getSuccessfulMessage() {
    return this.cy.get("#message");
  }

  completeRegisterForm(registerDataObject) {
    const { firstName, lastName, phoneNumber, country, email, password } =
      registerDataObject;

    this.getfirstNameField().type(firstName);
    this.getLastNameField().type(lastName);
    this.getPhoneNumberField().type(phoneNumber);
    this.getCountryField().type(country);
    this.getEmailField().type(email);
    this.getPasswordField().type(password);

    this.getTermsAndConditionsCheckbox().check();
  }
}

export default RegisterForm;
