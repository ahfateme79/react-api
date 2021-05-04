import React from 'react';
import styles from './main.module.css'

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            ff: false,
            modal: [],
            title: [],
        }
        this.modall = this.modall.bind(this);
        this.close = this.close.bind(this);
    }
    componentDidMount() {
        fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    products: result,
                })
            })
    }
    modall = (i) => {
        this.setState({
            ff: true,
            modal: this.state.products[i].description,
            title: this.state.products[i].category
        })
        //alert(this.state.products[i].description)
    };
    close = (i) => {
        this.setState({
            ff: false
        })
    }
    render() {
        return (
            <>
                {
                    this.state.products.map((n, i) => {
                        return (
                            <div className={styles.cart}>
                                <figure>
                                    <img src={n.image} alt="" />
                                </figure>
                                <div className={styles.proDetail}>
                                    <h4>{(n.title).substring(0, 11)}</h4>
                                    <span>${n.price}</span>
                                </div>
                                <div className={styles.btns}>
                                    <button className={styles.add}>+</button>
                                    <button onClick={() => this.modall(i)}>more</button>
                                </div>
                                <div className={[styles.bg, this.state.ff ? styles.open : styles.close].join(' ')}>
                                    <div className={styles.modal}>
                                        <h5>{this.state.title}</h5>
                                        <p>{this.state.modal}</p>
                                        <div>
                                            <button onClick={() => this.close(i)}>close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </>
        )
    }
}