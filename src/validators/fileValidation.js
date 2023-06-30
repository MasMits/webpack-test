import * as yup from 'yup';

export const fileValidation = yup
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
                        reject({ message: 'Minimum image size required is 70x70px.' });
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
    });
