import React from 'react';
import styles from './header.css';

export class Header extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div className={styles['header']}>
                <div className={styles['header-nav']}>

                </div>
            </div>
        )
    }
}