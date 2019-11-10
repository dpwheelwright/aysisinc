import React from 'react';
import { Tabs } from './components/tabs';
import { Header } from './components/header';
import styles from './App.css';

export class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <Header/>
                <Tabs/>
            </div>
        )

    }
}