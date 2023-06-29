import React from 'react';
import styles from './radio-buttons.module.scss'
import {useDispatch} from "react-redux";

export const RadioButtons = ({value, onChange}) => {
    const dispatch = useDispatch();
    return (
        <form className={styles.form}>
            <div className={styles.heading}> Select your position</div>
            {value.options.map((option) =>
                <label className={styles.label} key={option.id}>
                    <input type="radio" name="radio" className={styles.input}
                           checked={value.activeOption === option.id}
                           onChange={() => dispatch(onChange(option.id))}
                    />
                    <span className={styles.span}>{option.name}</span>
                </label>
            )}
        </form>
    );
};

