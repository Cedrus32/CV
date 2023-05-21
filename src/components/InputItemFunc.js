import React from 'react';
import PropTypes from 'prop-types';

const InputItem = (props) => {
    let {itemKey, formType, itemID, itemLabel} = props;

    let element;
    let inputType = getType(itemID)
    if (inputType === 'textarea') {
        element = <textarea key={itemKey} data-input-key={itemKey} data-form-type={formType} id={itemID}></textarea>
    } else {
        element = <input key={itemKey} data-input-key={itemKey} data-form-type={formType} type={inputType} id={itemID}></input>
    }

    function getType(id) {
        if (id === 'website') {
            return 'url';
        } else if (id === 'phone') {
            return 'tel';
        } else if (id === 'email') {
            return 'email';
        } else if (id === 'start-date' || id === 'end-date' || id === 'graduated-date') {
            return 'date';
        } else if (id === 'responsibilities' || id === 'activities-and-awards') {
            return 'textarea';
        } else {
            return 'text';
        }
    }

    return (
        <div>
            <label htmlFor={itemID}>{itemLabel}</label>
            {element}
        </div>
    )
}
InputItem.propTypes = {
    itemKey: PropTypes.string.isRequired,
    formType: PropTypes.string.isRequired,
    itemID: PropTypes.string.isRequired,
    itemLabel: PropTypes.string.isRequired,
}

export default InputItem;
