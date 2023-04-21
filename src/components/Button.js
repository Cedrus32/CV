import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        return (
            <button type='button' onClick={this.props.handleClick}>{this.props.buttonContent}</button>
        )
    }
}
Button.propTypes = {
    handleClick: PropTypes.func.isRequired,
    buttonContent: PropTypes.string.isRequired,
}

export default Button;
