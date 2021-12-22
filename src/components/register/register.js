import React from 'react'
import './register.css'

class Register extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('render: register')
        return (
            <div className={'register-container'}>
                <div className={'input-group'}>
                    <label className={'input-label input-label-text'}>First Name:</label>
                    <input className={'input-text input-textbox'} type={"text"}/>
                </div>
                <div className={'input-group'}>
                    <label className={'input-label input-label-text'}>Last Name:</label>
                    <input className={'input-text input-textbox'} type={"text"}/>
                </div>
            </div>
        )
    }
}

export default Register