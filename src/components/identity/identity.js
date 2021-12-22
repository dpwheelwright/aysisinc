import React from 'react'
import './identity.css';
import {Link} from "react-router-dom";

class Identity extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={'identity-container'}>
                <Link className={"identity-button"} to="/login">Login</Link>
                <Link className={'identity-button'} to="register">Register</Link>
            </div>
        )
    }
}

export default Identity;