import React from 'react'
import './App.css'
import Header from './components/header/header'
import Services from './components/services/services'
import Register from './components/register/register'
import Login from './components/login/login'
import Departments from './components/departments/departments';

import Footer from './components/footer/footer';
import IsMobileMediaQuery from './is-mobile-media-query'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {

    const isMobile = IsMobileMediaQuery();

    return (
        <Router>
            <div className={'app-container'}>
            <Header isMobile={isMobile}/>
            <Switch>
                <Route exact path="/" component={Services}/>
            </Switch>
            <Departments/>
            <Footer/>
            </div>)
        </Router>
    )
    
}

export default App