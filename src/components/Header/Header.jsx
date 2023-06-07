import React from 'react';
import logo from "../../img/logo.svg";
import {Button} from "../ui/Buttons";
import styles from './header.module.scss'

export const Header = () => {
    return (
        <div className={styles.header}>
            <img src={logo} alt="logo_test_task"/>
            <div className={styles['header-btn-container']}>
                <Button> User </Button>
                <Button> Sign up </Button>
            </div>
        </div>
    );
};
