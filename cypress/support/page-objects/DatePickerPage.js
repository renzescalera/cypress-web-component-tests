class DatePicker {
  constructor(cy) {
    this.cy = cy;
  }

  convertMonthNumberToWordingFormat(monthNumber) {
    switch (monthNumber) {
      case "1":
        return "Jan";
      case "2":
        return "Feb";
      case "3":
        return "Mar";
      case "4":
        return "Apr";
      case "5":
        return "May";
      case "6":
        return "Jun";
      case "7":
        return "Jul";
      case "8":
        return "Aug";
      case "9":
        return "Sep";
      case "10":
        return "Oct";
      case "11":
        return "Nov";
      case "12":
        return "Dec";
      default:
        return this.cy.log("Invalid month number");
    }
  }

  desiredDateRangeFormat = (
    month,
    day,
    year,
    futureMonth,
    futureDay,
    futureYear
  ) => {
    const expectedStartMonth = month.padStart(2, "0");
    const expectedStartDay = day.padStart(2, "0");

    const expectedEndMonth = futureMonth.padStart(2, "0");
    const expectedEndDay = futureDay.padStart(2, "0");

    const expectedDateOutput = `${expectedStartMonth}/${expectedStartDay}/${year} - ${expectedEndMonth}/${expectedEndDay}/${futureYear}`;

    return expectedDateOutput;
  };

  navigateToTheDesiredMonthAndYear(startDate, endDate) {
    // Convert the input dates to Date objects
    const start = new Date(startDate);
    const end = new Date(endDate);
    // Calculate the difference in years and months
    const yearsDifference = end.getFullYear() - start.getFullYear();
    const monthsDifference = end.getMonth() - start.getMonth();
    // If the months difference is negative, adjust the years difference
    const totalMonthsDiff = yearsDifference * 12 + monthsDifference;

    // Navigating to the desired month and year
    for (let i = 0; i < totalMonthsDiff; i++) {
      cy.get(`.${yearsDifference > 0 ? "next" : "prev"}`)
        .should("be.visible")
        .click();
    }
  }

  getRangeDatePickerField() {
    return this.cy.get("#range-date-calendar");
  }

  getLeftCalendarInDatePicker() {
    return this.cy.get(".left .month");
  }

  getDesiredDayInDatePicker(day, calendar = "left") {
    return this.cy.get(`.${calendar} .available:not(.off)`).contains(day);
  }

  getApplyButtonInDatePicker() {
    return this.cy.get(".applyBtn");
  }
}

export default DatePicker;
