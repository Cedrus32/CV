import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Button from './Button';

const FormSection = (props) => {
    let formType = props.formType;
    let meta = props.meta;
    let forms = props.forms;
    let addForm = props.addForm;
    let removeForm = props.removeForm;
    let changeValue = props.changeValue;

    let sectionID;
    if (formType === 'p') {
        sectionID = 'personal-form';
    } else if (formType === 'w') {
       sectionID = 'work-form';
    } else if (formType === 'e') {
        sectionID = 'education-form';
    }

    let formElements = [];
    forms.forEach((object, index) => {
        formElements.push(<Form key={object.formKey} formKey={object.formKey} formType={formType} formIndex={index} formLabels={meta.labels} formIDs={meta.ids} removeForm={removeForm} changeValue={changeValue}/>);
    });

    let addBtn;
    if (formType !== 'p') {
        addBtn = <Button formType={formType} buttonContent='Add' handleClick={addForm}/>
    }

    return (
        <section id={sectionID}>
            <h1 className='form-header'>{meta.title}</h1>
            {formElements}
            {addBtn}
        </section>
    )
}
FormSection.propTypes = {
    formType: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired,
    forms: PropTypes.array.isRequired,
    addForm: PropTypes.func,
    removeForm: PropTypes.func,
    changeValue: PropTypes.func.isRequired,
}

export default FormSection;
