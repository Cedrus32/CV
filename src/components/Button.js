import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        return (
            <button type='button' data-form-type={this.props.formType} data-form-key={this.props.formKey} className={this.props.className} onClick={this.props.handleClick}>{this.props.buttonContent}</button>
        )
    }
}
Button.propTypes = {
    formType: PropTypes.string,
    formKey: PropTypes.string,
    className: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
    buttonContent: PropTypes.string.isRequired,
}

export default Button;
