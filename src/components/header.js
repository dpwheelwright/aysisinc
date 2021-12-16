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
        this.state = {
            logoSource: airforce
        };
        this.logoTimer;
        this.logoIndex = 0;
        this.logos = [
            airforce,
            dod,
            va,
            eda,
            dla,
            doa,
            ob
        ]
    }
    componentDidMount() {
        this.logoTimer = setInterval(() => {
            if (this.logoIndex === this.logos.length) {
                this.logoIndex = 0;
            } else {
                this.logoIndex += 1;
            }
            this.setState({ logoSource: this.logos[this.logoIndex]})
        }, 3000);
    }
    render() {
        return(
            <div className={styles['header']}>
                <div className={'header-top'}>

                </div>
                <div className={styles['header-nav']}>

                </div>
                <div className={styles['header-content']}>

                </div>
            </div>
        )
    }
}