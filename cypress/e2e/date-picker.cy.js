import { datePickerPage } from "../support/page-objects/PageIndex";

describe("Date Picker Test", () => {
  const dateToday = new Date();
  const month = String(dateToday.getMonth() + 1).padStart(2, "0");
  const day = String(dateToday.getDate()).padStart(2, "0");
  const year = dateToday.getFullYear();

  dateToday.setDate(dateToday.getDate() + 1);
  const oneDayAhead = String(dateToday.getDate()).padStart(2, "0");

  beforeEach(() => {
    cy.interceptGoogleAnalytics();
    cy.visit("/calendar");
    cy.waitOnInterceptedGoogleAnalytics();
  });

  it("Should select 2 days date range starting from today via calendar", () => {
    const currentDate = `${datePickerPage.convertMonthNumberToWordingFormat(
      month
    )} ${year}`;

    const formattedDateRange = datePickerPage.desiredDateRangeFormat(
      month,
      day,
      year,
      month,
      oneDayAhead,
      year
    );

    datePickerPage.getRangeDatePickerField().should("be.visible").click();

    datePickerPage
      .getLeftCalendarInDatePicker()
      .should("be.visible")
      .invoke("text")
      .then(($initialDateInDatepicker) => {
        const initialDate = $initialDateInDatepicker.split(" - ")[0];

        // Navigating to the desired month and year
        datePickerPage.navigateToTheDesiredMonthAndYear(
          initialDate,
          currentDate
        );

        // selecting the date range
        datePickerPage.getDesiredDayInDatePicker(day).click();
        datePickerPage.getDesiredDayInDatePicker(oneDayAhead).click();

        // click on apply button
        datePickerPage
          .getApplyButtonInDatePicker()
          .should("be.visible")
          .click();

        // Validating the selected date range
        datePickerPage
          .getRangeDatePickerField()
          .should("have.value", formattedDateRange);
      });
  });

  it("Should select 15 days date range starting from today via calendar", () => {
    dateToday.setDate(dateToday.getDate() + 15); // Add 15 days to the current date
    const fifteenDaysAhead = String(dateToday.getDate()).padStart(2, "0");
    const futureMonth = String(dateToday.getMonth() + 1).padStart(2, "0");

    const currentDate = `${datePickerPage.convertMonthNumberToWordingFormat(
      month
    )} ${year}`;

    const formattedDateRange = datePickerPage.desiredDateRangeFormat(
      month,
      day,
      year,
      futureMonth,
      fifteenDaysAhead,
      year
    );

    datePickerPage.getRangeDatePickerField().should("be.visible").click();

    datePickerPage
      .getLeftCalendarInDatePicker()
      .should("be.visible")
      .invoke("text")
      .then(($initialDateInDatepicker) => {
        const initialDate = $initialDateInDatepicker.split(" - ")[0];

        // Navigating to the desired month and year
        datePickerPage.navigateToTheDesiredMonthAndYear(
          initialDate,
          currentDate
        );

        // selecting the date range
        datePickerPage.getDesiredDayInDatePicker(day).click();
        datePickerPage
          .getDesiredDayInDatePicker(fifteenDaysAhead, "right")
          .click();

        // click on apply button
        datePickerPage
          .getApplyButtonInDatePicker()
          .should("be.visible")
          .click();

        // Validating the selected date range
        datePickerPage
          .getRangeDatePickerField()
          .should("have.value", formattedDateRange);
      });
  });

  it("Should select 2 days date range starting from today via input field", () => {
    const formattedDateRange = datePickerPage.desiredDateRangeFormat(
      month,
      day,
      year,
      month,
      oneDayAhead,
      year
    );

    // Enter the range date in the input field
    datePickerPage
      .getRangeDatePickerField()
      .should("be.visible")
      .clear()
      .type(formattedDateRange);

    // click on apply button
    datePickerPage.getApplyButtonInDatePicker().should("be.visible").click();

    // Validating the selected date range
    datePickerPage
      .getRangeDatePickerField()
      .should("have.value", formattedDateRange);
  });

  it("Should not be able to click Apply button without selecting a date range", () => {
    // Open the range date picker
    datePickerPage.getRangeDatePickerField().should("be.visible").click();

    // Select today's day in the calendar
    datePickerPage.getDesiredDayInDatePicker(day).should("be.visible").click();

    // Validate the Apply button is disabled
    datePickerPage
      .getApplyButtonInDatePicker()
      .should("be.visible")
      .and("be.disabled");
  });
});
