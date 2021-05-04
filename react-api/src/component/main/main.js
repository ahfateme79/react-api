import React from 'react';
//import Row from './row';
import styles from './main.module.css'
import Cart from './cart';

//const arr = ["1", "2", "3", "4"]
export default class Main extends React.Component {
    render() {
        return (
            <main>
                <div className={styles.products}>
                    <h3>Man & Woman Fashion</h3>
                    <div className={styles.row}>
                      <Cart />
                    </div>
                </div>
            </main>
        );
    }
}