import React from 'react';
import styles from './Tooltip.module.scss'

export const Tooltip = ({children}) => {
    function truncateString(str) {
        if (str.length <= 14) return str;
        return str.slice(0, 14) + '...';
    }
    const copyToClipboard = () => {
        navigator.clipboard.writeText(children);
    };

    return (
        <div className={styles.text_container}>
            <div className={styles.text}>
                <div onClick={copyToClipboard}>{truncateString(children)}</div>
                <span className={styles.tooltip}>{children}</span>
            </div>
        </div>
    );
}


