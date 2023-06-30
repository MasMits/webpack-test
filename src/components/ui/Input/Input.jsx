import React from 'react';
import {useDispatch} from "react-redux";
import styles from './input.module.scss'
import {validationSchema} from "../../../utils/formValidation";
import {
    setFieldValue,
    setFieldError,
} from "../../../store/slices/form.slice";

export const Input = ({value, validateAt, placeHolder, helperText = ''}) => {
    const dispatch = useDispatch();
    const handleChange = event => {
        const newValue = event.target.value;
        dispatch(setFieldValue({field: validateAt, value: newValue}));
        validationSchema
            .validateAt(validateAt, {[validateAt]: newValue})
            .then(() => {
                dispatch(setFieldError({field: validateAt, error: ''}));
            })
            .catch(error => {
                dispatch(setFieldError({field: validateAt, error: error.message}));
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
            <div className={styles["helper-text"]}>{value.error || helperText}</div>
        </div>
    );
};

