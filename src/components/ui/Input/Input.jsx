import React from 'react';
import {useDispatch} from "react-redux";
import styles from './input.module.scss'

export const Input = ({ value, onChange, placeHolder, helperText = ''}) => {
    const dispatch = useDispatch();
    const handleChange = (event) => {
        dispatch(onChange({field: placeHolder, value: event.target.value}));
    };
    return (
        <div className={styles["input-container-container"]}>
            <div className={styles["input-container"]}>
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    value={value.value} onChange={handleChange}
                    aria-labelledby="label-fname"
                    className={styles.input}
                />
                <label className={styles["label"]} htmlFor="fname" id={styles["label-fname"]}>
                    <div className={styles.text}>{placeHolder}</div>
                </label>
            </div>
            <div className={styles["helper-text"]}>{helperText}</div>
        </div>
    );
};

