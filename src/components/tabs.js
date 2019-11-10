import React from 'react';
import styles from './tabs.css';

export class Tabs extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (<ul className={styles['tabs']}>
            <li className={styles['tab']}>About Us</li>
            <li className={styles['tab']}>Services</li>
            <li className={styles['tab']}>FAQ</li>
            <li className={styles['tab']}>Clients</li>
            <li className={styles['tab']}>Contact Us</li>
        </ul>)
    }
}