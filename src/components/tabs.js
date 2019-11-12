import React from 'react';
import styles from './tabs.css';

export class Tabs extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 'about-us'
        }
    }
    onTabSelected = (tab) => {
        this.setState({selectedTab: tab});
    };
    render() {
        return (
        <div>
            <ul className={styles['tabs']}>
                <li className={styles['tab']} onClick={() => this.onTabSelected('about-me')}>About Us</li>
                <li className={styles['tab']} onClick={() => this.onTabSelected('services')}>Services</li>
                <li className={styles['tab']} onClick={() => this.onTabSelected('faq')}>FAQ</li>
                <li className={styles['tab']} onClick={() => this.onTabSelected('clients')}>Clients</li>
                <li className={styles['tab']} onClick={() => this.onTabSelected('contact-us')}>Contact Us</li>
            </ul>
            {this.state.selectedTab === 'about-me' && <div className={styles['tab-content']}>
                <p className={styles['tab-content-text']}>About Me</p>
            </div>}
            {this.state.selectedTab === 'services' && <div className={styles['tab-content']}>
                <p className={styles['tab-content-text']}>Services</p>
            </div>}
            {this.state.selectedTab === 'faq' && <div className={styles['tab-content']}>
                <p className={styles['tab-content-text']}>FAQ</p>
            </div>}
            {this.state.selectedTab === 'clients' && <div className={styles['tab-content']}>
                <p className={styles['tab-content-text']}>Clients</p>
            </div>}
            {this.state.selectedTab === 'contact-us' && <div className={styles['tab-content']}>
                <p className={styles['tab-content-text']}>Contact Us</p>
            </div>}
        </div>
        )
    }
}