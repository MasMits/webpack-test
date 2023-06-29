import React from 'react';
import styles from './spinner.module.scss'

export const Spinner = () => {
    return (
        <svg className={styles.pl} viewBox="0 0 160 160" width="160" height="160">
            <g className={styles.pl__ring_rotate}>
                <circle className={styles.pl__ring_stroke} cx="80" cy="80" r="72" fill="none" stroke="#00BDD3"
                        strokeWidth="16" strokeDasharray="452.39" strokeDashoffset="452" strokeLinecap="round"
                        transform="rotate(-45 80 80)"/>
            </g>
        </svg>
    );
};

