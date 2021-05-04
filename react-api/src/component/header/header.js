import React from 'react';
import Nav from '../navigation/navigation';
import Details from './details';
import master from './header.module.css';

const link = ['Best Sellers', 'Gift Ideas', 'New Releases', "Today's Deals", 'Customer Service']

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div className={master.details} >
                    <ul>
                        {
                            link.map((n, index) => {
                                return <Details key={index} link={n} />
                            })
                        }
                    </ul>
                </div>
                <h1>Eflyer</h1>
                <Nav />
                <div className={master.heading}>
                    <h2>GET START<br/>YOUR FAVRIOT SHOPING</h2>
                    <button>BUY NOW</button>
                </div>
            </header>
        );
    }
}