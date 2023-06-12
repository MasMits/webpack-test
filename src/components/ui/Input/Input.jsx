import React from 'react';
import {useDispatch} from "react-redux";
import styles from './input.module.scss'
import {validationSchema} from "../../../utils/formValidation";
import {
    setFieldValue,
    setFieldError,
} from "../../../store/slices/form.slice";

export const Input = ({value, placeHolder, helperText = ''}) => {
    const dispatch = useDispatch();
    const handleChange = event => {
        const newValue = event.target.value;
        dispatch(setFieldValue({field: placeHolder, value: newValue}));
        validationSchema
            .validateAt(placeHolder, {[placeHolder]: newValue})
            .then(() => {
                dispatch(setFieldError({field: placeHolder, error: ''}));
            })
            .catch(error => {
                dispatch(setFieldError({field: placeHolder, error: error.message}));
            })
    };

    const isError = value.error === '' ? '': styles.error;

    return (
        <div className={styles["input-container-container"]}>
            <div className={styles["input-container"]}>
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    value={value.value} onChange={handleChange}
                    aria-labelledby="label-fname"
                    className={styles.input + ' ' + isError}
                />
                <label className={styles["label"]} htmlFor="fname" id={styles["label-fname"]}>
                    <div className={styles.text}>{placeHolder}</div>
                </label>
            </div>
            <div className={styles["helper-text"]}>{value.error}</div>
        </div>
    );
};

