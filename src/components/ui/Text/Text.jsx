import React from 'react';
import styles from './text.module.scss'

export const Text = ({children}) => {
    return (
        <div className={styles.text}>
            {children}
        </div>
    );
};