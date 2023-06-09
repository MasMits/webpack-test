import React, {useState} from 'react';
import styles from './file-upload-field.module.scss'

export const FileUploadField = ({file, setFile}) => {
    const [previewUrl, setPreviewUrl] = useState('');
    const [name, setName] = useState('Upload your photo');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
        previewFile(file);
        setName(file.name);
        console.log(file)
        console.log(file.name)
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewUrl(reader.result);
        };
    };

    return (
        <div>
            <div className={styles["file-upload-wrapper"]} data-text={name}>
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

