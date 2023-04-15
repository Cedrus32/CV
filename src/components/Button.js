import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log('button clicked')
        console.log(e);
    }

    render() {
        return (
            <button type='button' onClick={this.handleClick}>{this.props.content}</button>
        )
    }
}
Button.propTypes = {
    content: PropTypes.string.isRequired
}

export default Button;
