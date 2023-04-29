import React, { Component } from 'react';
import uniqid from 'uniqid';
import FormSection from './FormSection';
import Header from './Header';
import DisplaySection from './DisplaySection';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personalForms: [],
            workForms: [],
            educationForms: [],
            targetFormIndex: null,
            targetItemIndex: null,
        }
        this.meta = {
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
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.addForm = this.addForm.bind(this);
    }

    componentDidMount() {
        this.addForm();
    }

    addForm(e) {
        let formType;
        if (e !== undefined) {
            formType = e.target.dataset.formType;
        } else {
            formType = 'p'
        }
        let formMeta = this.meta[formType];
        let formKey = uniqid();
        let formItems = [];
        console.log(formType);
        console.log(formMeta);
        for (let i = 0; i < formMeta.ids.length; i++) {
            let itemKey = `${formKey}-${i}`;
            formItems.push({itemKey: itemKey, itemValue: ''});
        }
        if (formType === 'p') {
            this.setState({personalForms: [...this.state.personalForms, {formKey: formKey, formItems: formItems}]});
        } else if (formType === 'w') {
            this.setState({workForms: [...this.state.workForms, {formKey: formKey, formItems: formItems}]});
        } else if (formType === 'e') {
            this.setState({educationForms: [...this.state.educationForms, {formKey: formKey, formItems: formItems}]});
        }
    }
    
    render() {
        return (
            <>
                <section id='interact'>
                    <FormSection formType='p' meta={this.meta.p} forms={this.state.personalForms} didMount={this.componentDidMount}/>
                    <FormSection formType='w' meta={this.meta.w} forms={this.state.workForms} addForm={this.addForm} removeForm={this.removeForm}/>
                    <FormSection formType='e' meta={this.meta.e} forms={this.state.educationForms} addForm={this.addForm} removeForm={this.removeForm}/>
                </section>
                <section id='display'>
                    <Header displayContent={this.state.personalForms}/>
                    <DisplaySection sectionType='w' displayContent={this.state.workForms}/>
                    <DisplaySection sectionType='e' displayContent={this.state.educationForms}/>
                </section>
            </>
        )
    }
}

export default App;
