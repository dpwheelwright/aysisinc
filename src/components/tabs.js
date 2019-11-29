import React from 'react';
import styles from './tabs.css';
import renee from '../assets/images/renee.jpg';
import jerry from '../assets/images/jerry.jpg';
import { TabFAQ } from './tab-faq';
import fidelity from '../assets/images/fidelity-partners.jpg';

export class Tabs extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 'about-me'
        }
    }
    onTabSelected = (tab) => {
        this.setState({selectedTab: tab});
    };
    render() {
        return (
        <div>
            <ul className={styles['tabs']}>
                <li className={this.state.selectedTab !== 'about-me' ? styles['tab'] : styles['tab-active']} onClick={() => this.onTabSelected('about-me')}>About Us</li>
                <li className={this.state.selectedTab !== 'services' ? styles['tab'] : styles['tab-active']} onClick={() => this.onTabSelected('services')}>Services</li>
                <li className={this.state.selectedTab !== 'faq' ? styles['tab'] : styles['tab-active']} onClick={() => this.onTabSelected('faq')}>FAQ</li>
                <li className={this.state.selectedTab !== 'clients' ? styles['tab'] : styles['tab-active']} onClick={() => this.onTabSelected('clients')}>Clients</li>
            </ul>
            {this.state.selectedTab === 'about-me' && <div className={styles['tab-content']}>
                <div className={styles['tab-content-about-us']}>
                    <img src={renee}></img>
                    <p>
                    Based in Schertz, Texas just outside San Antonio, Aysis Inc. is a Small, Minority Woman owned enterprise founded in 2006 by Ms. Renee Wheelwright. Ms. Wheelwright retired with more than 25 years of Federal Government experience, with a vast amount of knowledge in Finance and Accounting. This experience coupled with her supporting staff, culminates a knowledge pool unsurpassed. Agency experience includes, United States Air Force, United States Army and Defense Finance and Accounting Service (DFAS).  Ms. Wheelwright has partnered with the local Procurement Technical Assistance Office (PTAC) in providing Wide Area Workflow (WAWF) Vendor training.
                    </p>
                </div>
                <div className={styles['tab-content-about-us']}>
                <img src={jerry}></img>
                    <p>
                    Mr. Jerry Wheelwright is our senior consultant. Jerry has more than forty years of Government Accounting and Vendor Pay experience. Having retired from the United States Air Force with more than twenty-four years in Accounting and Finance, he continued his career with the Defense Finance and Accounting Service (DFAS) both in the Quality Assurance  and Vendor Pay divisions.  As the Site Manager for Vendor Pay in San Antonio, he was instrumental in the deployment of Wide Area Workflow (WAWF) for the Army Medical Command and the Air Force Air Training Command. Jerry retired in 2005 from DFAS and started Aysis Inc with his wife Renee.
                    </p>
                </div>
            </div>}
            {this.state.selectedTab === 'services' && <div className={styles['tab-content']}>
                <p className={styles['tab-content-text']}>
                We can provide consulting services to keep you up to date on the various WAWF system changes. Our consultants will guide you though the steps for each phase of each application, 
                as it pertains to Electronic Document Access (EDA), MyInvoice and Wide Area Workflow(WAWF).  
                Are you already using WAWF ? Perhaps there are some questions that you just can't resolve using conventional "Help" services. 
                This is where  we can assist you. We will not only research and answer your questions, but will also provide supporting guidance. 
                If your company requires guidance and interpretation of the new requirements of E-Commerce and the electronic requirement for invoice submission, we can help. 
                Often time just knowing which type of invoice to submit will eliminate payment delays. Cash flow is an important phase in your billing cycle, 
                certainly you wouldn't want to delay your payment because you didn't follow the directions of your contract. 
                If your company does not have the personnel or resources to invoice DoD or VA contracts, or you have tried to use their 
                various billing systems in the past and ran into road blocks or just couldn't get past the hurdles, perhaps we can assist 
                your company to provide expedited, accurate invoicing so that your company gets paid in the minimal time frame. 
                Please contact us for more information on our available services.

 
                </p>
            </div>}
            {this.state.selectedTab === 'faq' && <div className={styles['tab-content']}>
                <TabFAQ/>
            </div>}
            {this.state.selectedTab === 'clients' && <div className={styles['tab-content']}>
                <ul>
                    <li>
                        <img src={fidelity}/>
                        <p></p>
                    </li>
                </ul>
            </div>}
        </div>
        )
    }
}