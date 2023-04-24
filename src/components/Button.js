import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        return (
            <button type='button' data-form-key={this.props.formKey} onClick={this.props.handleClick}>{this.props.buttonContent}</button>
        )
    }
}
Button.propTypes = {
    formKey: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
    buttonContent: PropTypes.string.isRequired,
}

export default Button;
