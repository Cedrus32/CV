import React from 'react';
import PropTypes from 'prop-types';
import Form from './FormFunc';
import Button from './ButtonFunc';

const FormSection = (props) => {
    // let {formType, meta, forms, addForm} = props;
    let formType = props.formType;
    let meta = props.meta;
    let forms = props.forms;
    let addForm = props.addForm;
    console.log(formType, meta, forms);

    let sectionID;
    if (formType === 'p') {
        sectionID = 'personal-form';
    } else if (formType === 'w') {
       sectionID = 'work-form';
    } else if (formType === 'e') {
        sectionID = 'education-form';
    }

    let formElements = [];
    forms.forEach(object => {
        formElements.push(<Form key={object.formKey} formKey={object.formKey} formType={formType} formLabels={meta.labels} formIDs={meta.ids}/>);
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
}

export default FormSection;
