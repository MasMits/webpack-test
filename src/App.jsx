import React, {useEffect} from 'react';
import logo from './logo.svg';
import styles from './App.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setTitle} from "./store/slices/todo-input.slice";

function App() {
    console.log(styles);
    console.log(process.env.HOST);
    const {title} = useSelector((state) => state.form);
    console.log(title)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle('Bye'))
    }, [])
    return (
        <div className={styles.App}>
            <header className={styles['App-header']}>
                <img src={logo} className={styles['App-logo']} alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className={styles['App-link']}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
