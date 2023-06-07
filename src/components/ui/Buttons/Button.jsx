import React from 'react';
import styles from './button.module.scss'

export const Button = ({onClick, children}) => {
    return (
        <button className={styles['action-btn']} onClick={onClick}>
            {children}
        </button>
    );
};