import React from 'react';
import Searcher from '../img/search.svg'
import styles from './navigation.module.css'


export default class Search extends React.Component {
    render() {
        return (
            <div className={styles.Search}>
                <input type="text" placeholder="search..."/>
                <button><img src={Searcher} alt=""/></button>
            </div>
        );
    }
}