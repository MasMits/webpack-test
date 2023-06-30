import React from 'react';
import styles from './spinner.module.scss'

export const Spinner = () => {
    return (
        <svg className={styles.pl} viewBox="0 0 160 160">
            <g className={styles.pl__ring_rotate}>
                <circle className={styles.pl__ring_stroke} cx="80" cy="80" r="72"/>
            </g>
        </svg>
    );
};

