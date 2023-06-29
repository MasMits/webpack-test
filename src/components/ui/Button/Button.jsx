import React from 'react';
import styles from './button.module.scss'

export const Button = ({onClick, children, disabled}) => {
    console.log(disabled);
    return (
        <button className={styles['action-btn']} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};