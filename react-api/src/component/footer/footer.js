import React from 'react';
import styles from './footer.module.css'


export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <h6>Eflyer</h6>
                <p>Help Line Number : <a href="#">+1 1800 1200 1200</a></p>
                <span>© 2021 </span>
            </footer>
        )
    }
}