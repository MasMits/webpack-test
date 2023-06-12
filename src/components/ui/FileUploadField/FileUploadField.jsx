import React, {useState} from 'react';
import styles from './file-upload-field.module.scss'
import {useDispatch} from "react-redux";
import {validationSchema} from "../../../utils/formValidation";
import {setFieldError, setFieldValue} from "../../../store/slices/form.slice";

export const FileUploadField = ({file}) => {
    const [previewUrl, setPreviewUrl] = useState('');
    const [name, setName] = useState('Upload your photo');
    const dispatch = useDispatch();

    const handleFileChange = async (e) => {
        const uploadedFile = e.target.files[0];
        validationSchema
            .validateAt('file', {['file']: uploadedFile})
            .then(() => {
                previewFile(uploadedFile);
                const blobFile = URL.createObjectURL(uploadedFile);
                dispatch(setFieldValue({field: 'file', value: blobFile}));
                dispatch(setFieldError({field: 'file', error: ''}));
            })
            .catch(error => {
                dispatch(setFieldError({field: 'file', error: error.message}));
                console.log(error.message);
            })
    }

    const previewFile = (file_) => {
        setName(file_.name);
        const reader = new FileReader();
        reader.readAsDataURL(file_);
        reader.onloadend = () => {
            setPreviewUrl(reader.result);
        };
    };

    return (
        <div>
            <div className={styles["file-upload-wrapper"]} aria-label={name}>
                <input name="file-upload-field" type="file" accept="image/*" className={styles["file-upload-field"]}
                       onChange={handleFileChange}/>
                <div className={styles['img-container']}>
                    {previewUrl && (
                        <img src={previewUrl} alt="Preview" className={styles.img} />
                    )}
                </div>
                <div className={styles["helper-text"]}>{file.error}</div>
            </div>
        </div>
    );
};

