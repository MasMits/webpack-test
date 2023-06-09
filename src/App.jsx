import React from 'react';
import {Header} from "./components/Header";
import {Banner} from "./components/sections/Banner";
import {UsersCardSection} from "./components/sections/UserCardSection";
import styles from './App.module.scss'
import {Form} from "./components/sections/Form";

function App() {
    console.log(process.env.HOST);
    return (
        <div className={styles.App}>
            <Header/>
            <div className={styles.content}>
                <Banner/>
                <UsersCardSection/>
                <Form/>
            </div>
        </div>
    );
}

export default App;
