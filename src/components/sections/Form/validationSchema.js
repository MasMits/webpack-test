import * as yup from 'yup';
import { nameValidation } from '../../../validators/nameValidation';
import { emailValidation } from '../../../validators/emailValidation';
import { phoneValidation } from '../../../validators/phoneValidation';
import { fileValidation } from '../../../validators/fileValidation';

export const validationSchema = yup.object().shape({
    name: nameValidation,
    email: emailValidation,
    phone: phoneValidation,
    file: fileValidation,
});
