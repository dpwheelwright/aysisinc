import React from 'react'
import './logo.css'
import {Link} from "react-router-dom";

class Logo extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (<div className={'logo-header'}>
            <span><p className={'logo'}>Aysis Inc</p></span>
        </div>)
    }
}

export default Logo