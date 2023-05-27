import React from 'react';
import PropTypes from 'prop-types';

const Field = (props) => {
    let {itemKey, formType, formIndex, fieldIndex, itemID, itemLabel, changeValue} = props;

    // console.log(formType, formIndex, itemIndex);

    let element;
    let inputType = getType(itemID)
    if (inputType === 'textarea') {
        element = <textarea key={itemKey} data-form-type={formType} data-form-index={formIndex} data-field-index={fieldIndex} id={itemID} onChange={changeValue}></textarea>
    } else {
        element = <input key={itemKey} data-input-key={itemKey} data-form-type={formType} data-form-index={formIndex} data-field-index={fieldIndex} type={inputType} id={itemID} onChange={changeValue}></input>


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
Field.propTypes = {
    itemKey: PropTypes.string.isRequired,
    formType: PropTypes.string.isRequired,
    formIndex: PropTypes.number.isRequired,
    fieldIndex: PropTypes.number.isRequired,
    itemID: PropTypes.string.isRequired,
    itemLabel: PropTypes.string.isRequired,
    changeValue: PropTypes.func.isRequired,
}

export default Field;
