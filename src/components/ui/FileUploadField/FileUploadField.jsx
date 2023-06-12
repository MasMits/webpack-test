import React, {useCallback, useState} from 'react';
import styles from './file-upload-field.module.scss'
import {useDispatch} from "react-redux";

export const FileUploadField = ({file, setFile}) => {
    const [previewUrl, setPreviewUrl] = useState('');
    const [name, setName] = useState('Upload your photo');
    const dispatch = useDispatch();

    const handleFileChange = useCallback(async (e) => {
        const uploadedFile = e.target.files[0];
        const blobFile = await URL.createObjectURL(uploadedFile);
        dispatch(setFile(blobFile));
        previewFile(uploadedFile);
        setName(uploadedFile.name);
    }, [dispatch, setFile]);

    const previewFile = (file_) => {
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
            </div>
        </div>
    );
};

