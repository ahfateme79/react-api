import React from 'react';
import Items from './items';
import Btn from '../img/menu (3).svg'
import styles from './navigation.module.css'
import LeftButton from '../img/close.svg'
const item = ["HOME", 'ABOUT', 'PRODUCT', 'CONTACT']

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            toggle:false
        }
        this.handleclick=this.handleclick.bind(this)
    }

    handleclick=()=>{
        this.setState({
            toggle:!this.state.toggle,
        })
    }
    render() {
        return (
            <div className={styles.navbar}>
                <button className={[styles.btn,this.state.toggle?styles.pfix:null].join(' ')} onClick={this.handleclick}>{this.state.toggle?(<img src={LeftButton} alt=""/> ):(<img src={Btn} alt="" />)}</button>
                <div className={styles}>
                    <ul className={[styles.menu,this.state.toggle?styles.displayflex:styles.displaynone].join(' ')}>
                        {
                            item.map((n, index) => {
                                return <Items key={index} item={n} />
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}