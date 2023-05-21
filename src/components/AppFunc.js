import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import FormSection from './FormSectionFunc';

const App = () => {
    const [pForms, setPForms] = useState([]);
    const [wForms, setWForms] = useState([]);
    const [eForms, setEForms] = useState([]);

    const meta = {
        p: {
            title: 'Personal Details',
            labels: ['Name', 'Website', 'Location', 'Phone', 'Email', 'Objective for Applying'],
            ids: ['name', 'website', 'location', 'phone', 'email', 'objective']
        },
        w: {
            title: 'Work Experience',
            labels: ['Position', 'Company', 'Location', 'Start', 'End', 'Responsibilities'],
            ids: ['position', 'company', 'location', 'start-date', 'end-date', 'responsibilities']
        },
        e: {
            title: 'Education',
            labels: ['Field of Study', 'Institution', 'Location', 'Graduated', 'Activities and Awards'],
            ids: ['field-of-study', 'institution', 'location', 'graduated-date', 'activities-and-awards']
        }
    };

    // componentDidMount
    useEffect(() => {addForm()}, []);

    // addForm
    function addForm(e) {
        console.log('ADD FORM');
        console.log(e);

        let formType;
        if (e !== undefined) {
            formType = e.target.dataset.formType
        } else {
            formType = 'p';
        }
        // console.log(formType);
        let formMeta = meta[formType];
        // console.log(formMeta);
        let formKey = uniqid();
        let formItems = [];
        for (let i = 0; i < formMeta.ids.length; i++) {
            let itemKey = `${formKey}-${i}`;
            formItems.push({itemKey: itemKey, itemID: formMeta.ids[i], itemValue: ''});
        }
        // console.log(formItems);
        if (formType === 'p') {
            setPForms([...pForms, {formKey: formKey, formItems: formItems}]);
        } else if (formType ==='w') {
            setWForms([...wForms, {formKey: formKey, formItems: formItems}]);
        } else if (formType === 'e') {
            setEForms([...eForms, {formKey: formKey, formItems: formItems}]);
        }
    }
    // removeForm
    function removeForm(e) {
        let formType = e.target.dataset.formType;
        if (formType === 'w') {
            setWForms(wForms.filter(form => form.formKey !== e.target.dataset.formKey));
        } else if (formType === 'e') {
            setEForms(eForms.filter(form => form.formKey !== e.target.dataset.formKey));
        }
    }
    // changeFocus
    // changeValue
    
    return (
        <>
            <section id='interact'>
                <FormSection formType='p' meta={meta.p} forms={pForms}/>
                <FormSection formType='w' meta={meta.w} forms={wForms} addForm={addForm} removeForm={removeForm}/>
                <FormSection formType='e' meta={meta.e} forms={eForms} addForm={addForm} removeForm={removeForm}/>
            </section>
            <section id='display'></section>
        </>
    )
}

export default App;
