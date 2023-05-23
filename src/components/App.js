import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import FormSection from './FormSection';
import DisplaySection from './DisplaySection';

const App = () => {
    const [pForms, setPForms] = useState([]);
    const [wForms, setWForms] = useState([]);
    const [eForms, setEForms] = useState([]);
    const [targetFormIndex, setTFI] = useState(null);
    const [targetItemIndex, setTII] = useState(null);

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

    function addForm(e) {
        // console.log('ADD FORM');
        // console.log(e);

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
            let itemKey = `${formKey}-${i}`;
            fields.push({itemKey: itemKey, itemID: formMeta.ids[i], itemValue: ''});
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

    function changeFocus(e) {
        // console.log('change focus');
        // let formType = e.target.dataset.formType;
        // if (formType === 'p') {
        //     setTFI(pForms.findIndex(object => object.formKey === e.target.dataset.inputKey.split('-')[0]));
        // } else if (formType === 'w') {
        //     setTFI(wForms.findIndex(object => object.formKey === e.target.dataset.inputKey.split('-')[0]));
        // } else if (formType === 'e') {
        //     setTFI(eForms.findIndex(object => object.formKey === e.target.dataset.inputKey.split('-')[0]));
        // }
        // setTII(parseInt(e.target.dataset.inputKey.split('-')[1]));
    }
    function changeValue(e) {
        let formType = e.target.dataset.formType;
        let fieldIndex = parseInt(e.target.dataset.inputKey.split('-')[1]);
        let formIndex;
        let formsCopy;
        if (formType === 'p') {
            formIndex = pForms.findIndex(object => object.formKey === e.target.dataset.inputKey.split('-')[0]);
            formsCopy = pForms;
        } else if (formType === 'w') {
            formIndex = wForms.findIndex(object => object.formKey === e.target.dataset.inputKey.split(('-')[0]));
            formsCopy = wForms;
        } else if (formType === 'e') {
            formIndex = eForms.findIndex(object => object.formKey === e.target.dataset.inputKey.split(('-')[0]));
            formsCopy = eForms;
        }
        console.log('formType:', formType, 'formIndex:', formIndex, 'fieldIndex:', fieldIndex);
        formsCopy[formIndex].fields[fieldIndex].itemValue = e.target.value;
        console.log(formsCopy);
        // console.log(formsCopy[formIndex].fields[fieldIndex].itemValue);
        if (formType === 'p') {
            setPForms(formsCopy);
        } else if (formType === 'w') {
            setWForms(formsCopy);
        } else if (formType === 'e') {
            setEForms(formsCopy);
        }

        // // console.log('value change');
        // let formType = e.target.dataset.formType;
        // let formsCopy;
        // if (formType === 'p') {
        //     formsCopy = pForms;
        // } else if (formType === 'w') {
        //     formsCopy = wForms;
        // } else if (formType === 'e') {
        //     formsCopy = eForms;
        // }
        // formsCopy[targetFormIndex].fields[targetItemIndex].itemValue = e.target.value;
        // // console.log(formsCopy[targetFormIndex].fields[targetItemIndex].itemValue)
        // if (formType === 'p') {
        //     setPForms(formsCopy);
        // } else if (formType === 'w') {
        //     setWForms(formsCopy);
        // } else if (formType === 'e') {
        //     setEForms(formsCopy);
        // }
    }

    return (
        <>
            <section id='interact'>
                <FormSection formType='p' meta={meta.p} forms={pForms} changeFocus={changeFocus} changeValue={changeValue}/>
                <FormSection formType='w' meta={meta.w} forms={wForms} addForm={addForm} removeForm={removeForm} changeFocus={changeFocus} changeValue={changeValue}/>
                <FormSection formType='e' meta={meta.e} forms={eForms} addForm={addForm} removeForm={removeForm} changeFocus={changeFocus} changeValue={changeValue}/>
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
