import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    let formType = props.formType;
    let formKey = props.formKey;
    let className = props.className;
    let buttonContent = props.buttonContent;
    let handleClick = props.handleClick;

    return (
        <button type='button' data-form-type={formType} data-form-key={formKey} className={className} onClick={handleClick}>{buttonContent}</button>
    )
}
Button.propTypes = {
    formType: PropTypes.string,
    formKey: PropTypes.string,
    className: PropTypes.string,
    buttonContent: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
}

export default Button;
