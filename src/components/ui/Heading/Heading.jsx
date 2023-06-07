import React from 'react';
import styles from './heading.module.scss'

export const Heading = ({children}) => {
    return (
        <div className={styles.heading}>
            {children}
        </div>
    );
};