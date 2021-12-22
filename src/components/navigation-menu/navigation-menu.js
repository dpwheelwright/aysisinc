import React from 'react'
import './navigation-menu.css';
import MediaQuery from 'react-responsive'
import MenuIcon from '../../assets/images/menu-icon.svg'
import { Link } from "react-router-dom";

class NavigationMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav>
                <ul className='navigation-menu'>
                        <li className='navigation-menu-item'><a href='#'>About Us</a></li>
                        <li className='navigation-menu-item'><a href='#'>FAQ</a></li>
                        <li className='navigation-menu-item'><a href='#'>Services</a></li>
                        <li className='navigation-menu-item'><a href='#'>Contact Us</a></li>
                </ul>
            </nav>
        )
    }
}
export default NavigationMenu