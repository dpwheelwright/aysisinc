import React from 'react'
import './services.css'
import ServiceDescription from '../../components/service-description/service-description';
import SmartPhoneIcon from '../../assets/images/smartphone.svg'
import BusinessProcessAutomationIcon from '../../assets/images/business-process-automation.svg'
import WebDevelopmentIcon from '../../assets/images/web-development.svg';
import DataAnalyticsIcon from '../../assets/images/data-analytics.svg';
import PresentationIcon from '../../assets/images/presentation-icon.png';
import StrategyIcon from '../../assets/images/strategy-icon.png';
import PartnershipIcon from '../../assets/images/partnership-icon.png';
import TeamIcon from '../../assets/images/team-icon.png';

class Services extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div className={'services-container'}>
            <ServiceDescription
                icon={PresentationIcon}
                text={'Consulting & Training'}
                subText={'Are you having difficulties in reading through the FAR clauses, understanding the Defense Finance and Accounting Service (DFAS) payment process, invoicing the Veteran Administration. We can help you understand your contract requirements, which type of invoice to submit and even provide training for submitting your documents through iRAPT (WAWF) - e-Business Suite, VIS and OB10'}/>
            <ServiceDescription
                icon={StrategyIcon}
                text={'Tools & Services'}
                subText={'Aysis Inc. can provide you with the tools and information necessary for your business to be successful in this competitive environment. We can provide answers to all of your invoicing and contract related questions. Our services also include invoicing for our client.'}/>
            <ServiceDescription
                icon={PartnershipIcon}
                text={'Partnership'}
                subText={'Our team will partner with your and/or your team to make sure you are involved in every stage of the process. We not only consult with our clients, but we partner with them to ensure that they are successful and will continue to be successful in the future.'}/>
            <ServiceDescription
                icon={TeamIcon}
                text={'Team Support'}
                subText={'With support from our team, combined with years of experience, we are here to help you. Along with our services, we will continue to provide support for any questions or concerns that may or may not pertain directly to your required service.'}/>
        </div>)
    }
}
export default Services