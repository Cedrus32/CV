import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import Button from './Button';

const Form = (props) => {
    let formKey = props.formKey;
    let formType = props.formType;
    let formIndex = props.formIndex;
    let formLabels = props.formLabels;
    let formIDs = props.formIDs;
    let removeForm = props.removeForm;
    let changeValue = props.changeValue;

    let inputElements = [];
    for (let i = 0; i < formIDs.length; i++) {
        let objectKey = `${formKey}-${i}`;
        let objectLabel = formLabels[i];
        let objectID = formIDs[i];
        inputElements.push(<Field key={objectKey} itemKey={objectKey} formType={formType} formIndex={formIndex} fieldIndex={i} itemID={objectID} itemLabel={objectLabel} changeValue={changeValue}/>);
    }

    let removeBtn;
    if (formType !== 'p') {
        removeBtn = <Button formKey={formKey} formType={formType} className='remove' buttonContent='Remove' handleClick={removeForm}/>
    }

    return (
        <form key={formKey}>
            {inputElements}
            {removeBtn}
        </form>
    )
}
Form.propTypes = {
    formKey: PropTypes.string.isRequired,
    formType: PropTypes.string.isRequired,
    formIndex: PropTypes.number.isRequired,
    formLabels: PropTypes.array.isRequired,
    formIDs: PropTypes.array.isRequired,
    removeForm: PropTypes.func,
    changeValue: PropTypes.func.isRequired,
}

export default Form;
