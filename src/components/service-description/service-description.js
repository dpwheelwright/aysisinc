import React from 'react';
import './service-description.css';

class ServiceDescription extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'service-description-container'}>
                <div className={'service-description-header'}>
                    <img className={'service-description-icon'} src={this.props.icon}/>
                    <p className={'service-description-text'}>{this.props.text}</p>
                </div>
                <p className={'service-description-sub-text'}>{this.props.subText}</p>
            </div>
        )
    }
}

export default ServiceDescription