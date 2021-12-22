import React from 'react'
import MenuIcon from '../../assets/images/menu-icon.png'
import './navigation-menu-mobile.css';

class NavigationMenuMobile extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={'navigation-mobile-menu'}>
                <img className={'navigation-mobile-menu-icon'} src={MenuIcon}/>
            </div>
        )
    }
}

export default NavigationMenuMobile