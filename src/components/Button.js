import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        return (
            <button className={this.props.cssClass} type='button' onClick={this.props.handleClick}>{this.props.buttonContent}</button>
        )
    }
}
Button.propTypes = {
    cssClass: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    buttonContent: PropTypes.string.isRequired,
    do: PropTypes.string.isRequired
}

export default Button;
