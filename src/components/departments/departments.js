import React from 'react';
import DODLogo from '../../assets/images/dod-logo.jpeg';
import AirForceDepartment from '../../assets/images/airforce-department.jpeg';
import NavyDepartment from '../../assets/images/navy-department.png';
import DFASDepartment from '../../assets/images/dfas-department.png';
import DCMADepartment from '../../assets/images/dcma-department.png';

import './departments.css';

class Departments extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'departments-container'}>
                <img className={'department-image'} src={DODLogo}/>
                <img className={'department-image'} src={AirForceDepartment}/>
                <img className={'department-image'} src={NavyDepartment}/>
                <img className={'department-image'} src={DFASDepartment}/>
                <img className={'department-image'} src={DCMADepartment}/>
            </div>
        )
    }
}

export default Departments;