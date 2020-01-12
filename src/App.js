import React from 'react';
import { Tabs } from './components/tabs';
import { Header } from './components/header';
import styles from './App.css';
import questionMark from './assets/images/question-mark-32x32.png';

export class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <Header/>
                <div className={styles['welcome-message']}>
                        <ul className={styles['welcome-message-column']}>
                            <li className={styles['welcome-message-column-list-item']}>
                                <img src={questionMark}/>
                                <span className={styles['welcome-message-column-list-item-text']}>Do you have contracts with any of the above agencies? Are you having issues trying to understand the invoicing requirements of the contract?</span>
                            </li>
                            <li className={styles['welcome-message-column-list-item']}>
                                <img src={questionMark}/>
                                <span className={styles['welcome-message-column-list-item-text']}>Are you having difficulties in reading through the FAR clauses, understanding the Defense Finance and Accounting Service (DFAS) payment process, invoicing the Veteran Administration?</span>
                            </li>
                            <li className={styles['welcome-message-column-list-item']}>
                                <img src={questionMark}/>
                                <p className={styles['welcome-message-column-list-item-text']}>Perhaps, your invoices are being rejected and you just can't figure out why.</p>
                            </li    >
                        </ul>
                        <p className={styles['welcome-message-column']}>
                        Well, you've come to the right place. We can help you understand your contract requirements,
                        which type of invoice to submit and even provide training for submitting your documents
                        through Wide Area Workflow (WAWF), IPP and TUNGSTEN. Our staff has more than sixty-five years of combined
                        experience in DoD contracts and payments.  We can provide you with the tools and information necessary
                        for your business to be successful in this competitive environment. We can provide answers to all of your
                        WAWF invoicing and contract related questions.  We can also process your invoices through the various Government
                        invoicing systems if you don't have the staff or expertise to invoice properly. Contact us today.
                        </p>

                </div>
                <Tabs/>
            </div>
        )

    }
}