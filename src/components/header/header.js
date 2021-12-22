import React from 'react';
import Logo from '../logo/logo';
import NavigationMenu from '../navigation-menu/navigation-menu';
import NavigationMenuMobile from '../navigation-menu-mobile/navigation-menu-mobile';
import './header.css';
import Banner from '../../assets/images/business-building.png'
import Identity from '../identity/identity'


class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={'header-container'}>
                <div className={'header-nav'}>
                    <Logo/>
                    {this.props.isMobile == false && <NavigationMenu/>}
                    {this.props.isMobile && <NavigationMenuMobile/>}
                </div>
                <img className={'banner'} src={Banner}/>
            </div>

        )
    }
}

export default Header