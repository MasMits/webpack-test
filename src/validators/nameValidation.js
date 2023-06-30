import * as yup from 'yup';

export const nameValidation = yup.string()
    .required('Name is required')
    .min(2, "Minimum 2 characters")
    .max(60, "Maximum 60 characters");
