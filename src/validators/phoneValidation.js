import * as yup from 'yup';

let phoneRegEx = /^[\+]{0,1}380([0-9]{9})$/;

export const phoneValidation = yup.string()
    .required('Phone is required')
    .matches(phoneRegEx, "Phone number is incorrect. Please try again)");
