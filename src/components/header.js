import React from 'react';
import styles from './header.css';
import airforce from '../assets/images/department-of-air-force.png';
import dod from '../assets/images/dod.png';
import va from '../assets/images/veteran-affairs.png';
import eda from '../assets/images/eda.png';
import dla from '../assets/images/dla.png';
import doa from '../assets/images/department-of-army.png';
import ob from '../assets/images/ob10.png';
import businessHeader from '../assets/images/business-header.png';

export class Header extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div className={styles['header']}>
                <div className={styles['header-nav']}>

                </div>
                <div className={styles['header-content']}>
                    <img src={businessHeader}/>
                </div>
            </div>
        )
    }
}