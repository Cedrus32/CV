import React from 'react';
import PropTypes from 'prop-types';
import InputItem from './InputItemFunc';
import Button from './ButtonFunc';

const Form = (props) => {
    let formKey = props.formKey;
    let formType = props.formType;
    let formLabels = props.formLabels;
    let formIDs = props.formIDs;
    let removeForm = props.removeForm;
    let changeFocus = props.changeFocus;
    let changeValue = props.changeValue;
 
    let inputElements = [];
    for (let i = 0; i < formIDs.length; i++) {
        let objectKey = `${formKey}-${i}`;
        let objectLabel = formLabels[i];
        let objectID = formIDs[i];
        inputElements.push(<InputItem key={objectKey} itemKey={objectKey} formType={formType} itemID={objectID} itemLabel={objectLabel} changeFocus={changeFocus} changeValue={changeValue}/>);
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
    formLabels: PropTypes.array.isRequired,
    formIDs: PropTypes.array.isRequired,
    removeForm: PropTypes.func,
    changeFocus: PropTypes.func.isRequired,
    changeValue: PropTypes.func.isRequired,
}

export default Form;
