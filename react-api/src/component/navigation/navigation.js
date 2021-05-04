import React from 'react';
import Menu from './menu';
import Search from './search';
import styles from './navigation.module.css'
import Shopcart from '../img/cart.svg'

const Nav = () => {
    return (
        <nav>
            <Menu />


            <Search />
            <div className={styles.sign}>
                <div>
                    <img src={Shopcart} alt="" />
                    <span></span>
                </div>
                <a href="#">Sign in</a>
            </div>
        </nav>
    );
}
export default Nav