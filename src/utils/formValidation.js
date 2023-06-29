import * as yup from 'yup';

let emailRegEx =
    /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

let phoneRegEx = /^[\+]{0,1}380([0-9]{9})$/;

export const validationSchema = yup.object().shape({
    name: yup.string()
        .required('Name is required')
        .min(2, "Minimum 2 characters")
        .max(60, "Maximum 60 characters"),
    email: yup.string()
        .required('Email is required')
        .matches(emailRegEx, "Invalid email address. Please try again)")
        .min(2, "Minimum 2 characters")
        .max(100, "Maximum 100 characters"),
    phone: yup.string()
        .required('Phone is required')
        .matches(phoneRegEx, "Phone number is incorrect. Please try again)"),
    file: yup
        .mixed()
        .test('fileType', 'Invalid file format. Only JPEG/JPG files are allowed.', (value) => {
            if (value) {
                return value && ['image/jpeg', 'image/jpg'].includes(value.type);
            }
            return true;
        })
        .test('fileSize', 'File size exceeds the limit of 5MB.', (value) => {
            if (value) {
                return value && value.size <= 5242880; // 5MB in bytes
            }
            return true;
        })
        .test('imageDimensions', 'Minimum image size required is 70x70px.', async (value) => {
            if (value) {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.onload = function () {
                        if (img.width >= 70 && img.height >= 70) {
                            resolve(true);
                        } else {
                            reject({message:'Minimum image size required is 70x70px.'});
                        }
                    };
                    img.onerror = function () {
                        reject(false);
                    };
                    const reader = new FileReader();
                    reader.onloadend = function () {
                        img.src = reader.result;
                    };
                    reader.readAsDataURL(value);
                });
            }
            return true;
        }),
});