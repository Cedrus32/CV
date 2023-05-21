import React from 'react';
import PropTypes from 'prop-types';
import InputItem from './InputItemFunc';
import Button from './ButtonFunc';

const Form = (props) => {
    let {formKey, formType, formLabels, formIDs} = props;
    console.log(formKey, formType, formLabels, formIDs);
    let inputElements = [];
    for (let i = 0; i < formIDs.length; i++) {
        let objectKey = `${formKey}-${i}`;
        let objectLabel = formLabels[i];
        let objectID = formIDs[i];
        inputElements.push(<InputItem key={objectKey} itemKey={objectKey} formType={formType} itemID={objectID} itemLabel={objectLabel}/>);
    }

    let removeBtn;
    if (formType !== 'p') {
        removeBtn = <Button formKey={formKey} formType={formType} className='remove' buttonContent='Remove'/>
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
}

export default Form;
