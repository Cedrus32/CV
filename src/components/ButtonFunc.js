import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    let formType = props.formType;
    let formKey = props.formKey;
    let className = props.className;
    let buttonContent = props.buttonContent;

    return (
        <button type='button' data-form-type={formType} data-form-key={formKey} className={className}>{buttonContent}</button>
    )
}
Button.propTypes = {
    formType: PropTypes.string,
    formKey: PropTypes.string,
    className: PropTypes.string,
    buttonContent: PropTypes.string.isRequired,
}

export default Button;
