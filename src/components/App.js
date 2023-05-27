import React, { useState, useEffect, useRef } from 'react';
import uniqid from 'uniqid';
import FormSection from './FormSection';
import DisplaySection from './DisplaySection';

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
    useEffect(() => {console.log('state change')}, [pForms]);

    function addForm(e) {
        let formType;
        if (e !== undefined) {
            formType = e.target.dataset.formType
        } else {
            formType = 'p';
        }
        let formMeta = meta[formType];
        let formKey = uniqid();
        let fields = [];
        for (let i = 0; i < formMeta.ids.length; i++) {
            fields.push({itemID: formMeta.ids[i], itemValue: ''});
        }

        if (formType === 'p') {
            setPForms([...pForms, {formKey: formKey, fields: fields}]);
        } else if (formType ==='w') {
            setWForms([...wForms, {formKey: formKey, fields: fields}]);
        } else if (formType === 'e') {
            setEForms([...eForms, {formKey: formKey, fields: fields}]);
        }
    }
    function removeForm(e) {
        let formType = e.target.dataset.formType;
        if (formType === 'w') {
            setWForms(wForms.filter(form => form.formKey !== e.target.dataset.formKey));
        } else if (formType === 'e') {
            setEForms(eForms.filter(form => form.formKey !== e.target.dataset.formKey));
        }
    }

    function changeValue(e) {
        // console.log('value change');
        // console.log(e.target.dataset);

        let formType = e.target.dataset.formType;
        let formIndex = e.target.dataset.formIndex;
        let fieldIndex = e.target.dataset.fieldIndex;
        let formsCopy;
        if (formType === 'p') {
            formsCopy = pForms;
        } else if (formType === 'w') {
            formsCopy = wForms;
        } else if (formType === 'e') {
            formsCopy = eForms;
        }
        formsCopy[formIndex].fields[fieldIndex].itemValue = e.target.value;
        // console.log(formsCopy[formIndex].fields[fieldIndex].itemValue)
        if (formType === 'p') {
            setPForms([...formsCopy]);
        } else if (formType === 'w') {
            setWForms([...formsCopy]);
        } else if (formType === 'e') {
            setEForms([...formsCopy]);
        }
    }

    return (
        <>
            <section id='interact'>
                <FormSection formType='p' meta={meta.p} forms={pForms}  changeValue={changeValue}/>
                <FormSection formType='w' meta={meta.w} forms={wForms} addForm={addForm} removeForm={removeForm}  changeValue={changeValue}/>
                <FormSection formType='e' meta={meta.e} forms={eForms} addForm={addForm} removeForm={removeForm} changeValue={changeValue}/>
            </section>
            <section id='display'>
                <DisplaySection sectionType='p' displayContent={pForms}/>
                <DisplaySection sectionType='w' displayContent={wForms}/>
                <DisplaySection sectionType='e' displayContent={eForms}/>
            </section>
        </>
    )
}

export default App;
