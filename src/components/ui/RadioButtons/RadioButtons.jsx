import React from 'react';
import styles from './radio-buttons.module.scss'
import {useDispatch} from "react-redux";

export const RadioButtons = ({list, value, onChange}) => {
    const dispatch = useDispatch();

    return (
        <form className={styles.form}>
            <div className={styles.heading}> Select your position</div>
            {list.map((option) =>
                <label className={styles.label} key={option}>
                    <input type="radio" name="radio" className={styles.input}
                           checked={value === option}
                           onChange={() => dispatch(onChange(option))}
                    />
                    <span className={styles.span}>{option}</span>
                </label>
            )}
        </form>
    );
};

