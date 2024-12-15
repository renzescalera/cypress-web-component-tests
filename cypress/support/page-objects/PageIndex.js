import Authentication from "../page-objects/AuthenticationPage";
import DatePicker from "../page-objects/DatePickerPage";
import Visual from "../page-objects/VisualPage";

export const authenticationPage = new Authentication(cy);
export const datePickerPage = new DatePicker(cy);
export const visualPage = new Visual(cy);
