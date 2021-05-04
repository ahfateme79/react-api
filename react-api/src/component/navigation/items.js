import React from 'react';

export default class Items extends React.Component {
    render() {
        return (
            <li><a href="#">{this.props.item}</a></li>
        );
    }
}