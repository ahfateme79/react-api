import React from 'react';

export default class Details extends React.Component {
    render() {
        return (
            <li><a href="#">{this.props.link}</a></li>
        );
    }
}