import React from 'react';
import PropTypes from 'prop-types';
import Form from './FormFunc';
import Button from './ButtonFunc';

const FormSection = (props) => {
    let {formType, meta, forms} = props;
    // console.log(formType, meta, forms);
    let sectionID;
    if (formType === 'p') {
        sectionID = 'personal-form';
    } else if (formType === 'w') {
       sectionID = 'work-form';
    } else if (formType === 'e') {
        sectionID = 'education-form';
    }
    // console.log(sectionID);

    let formElements = [];
    forms.forEach(object => {
        formElements.push(<Form key={object.formKey} formKey={object.formKey} formType={formType} formLabels={meta.labels} formIDs={meta.ids}/>);
    });

    let addBtn;
    if (formType !== 'p') {
        addBtn = <Button formType={formType} buttonContent='Add'/>
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
}

export default FormSection;
