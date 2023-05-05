import React, { Component } from 'react';
import uniqid from 'uniqid';
import FormSection from './FormSection';
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
        this.removeForm = this.removeForm.bind(this);
        this.changeFocus = this.changeFocus.bind(this);
        this.changeValue = this.changeValue.bind(this);
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
        for (let i = 0; i < formMeta.ids.length; i++) {
            let itemKey = `${formKey}-${i}`;
            formItems.push({itemKey: itemKey, itemID: formMeta.ids[i], itemValue: ''});
        }
        if (formType === 'p') {
            this.setState({personalForms: [...this.state.personalForms, {formKey: formKey, formItems: formItems}]});
        } else if (formType === 'w') {
            this.setState({workForms: [...this.state.workForms, {formKey: formKey, formItems: formItems}]});
        } else if (formType === 'e') {
            this.setState({educationForms: [...this.state.educationForms, {formKey: formKey, formItems: formItems}]});
        }
    }
    removeForm(e) {
        let formType = e.target.dataset.formType;
        if (formType === 'w') {
            this.setState({workForms: this.state.workForms.filter(form => form.formKey !== e.target.dataset.formKey)});
        } else if (formType === 'e') {
            this.setState({educationForms: this.state.educationForms.filter(form => form.formKey !== e.target.dataset.formKey)});
        }
    }

    changeFocus(e) {
        let formType = e.target.dataset.formType;
        if (formType === 'p') {
            this.setState({targetFormIndex: this.state.personalForms.findIndex(object => object.formKey === e.target.dataset.inputKey.split('-')[0])});
        } else if (formType === 'w') {
            this.setState({targetFormIndex: this.state.workForms.findIndex(object => object.formKey === e.target.dataset.inputKey.split('-')[0])});
        } else if (formType === 'e') {
            this.setState({targetFormIndex: this.state.educationForms.findIndex(object => object.formKey === e.target.dataset.inputKey.split('-')[0])});
        }
        this.setState({targetItemIndex: parseInt(e.target.dataset.inputKey.split('-')[1])});
    }
    changeValue(e) {
        let formType = e.target.dataset.formType;
        let formsCopy;
        if (formType === 'p') {
            formsCopy = this.state.personalForms;
        } else if (formType === 'w') {
            formsCopy = this.state.workForms;
        } else if (formType === 'e') {
            formsCopy = this.state.educationForms;
        }
        formsCopy[this.state.targetFormIndex].formItems[this.state.targetItemIndex].itemValue = e.target.value;
        if (formType === 'p') {
            this.setState({personalForms: formsCopy});
        } else if (formType === 'w') {
            this.setState({workForms: formsCopy});
        } else if (formType === 'e') {
            this.setState({educationForms: formsCopy});
        }
    }
    
    render() {
        return (
            <>
                <section id='interact'>
                    <FormSection formType='p' meta={this.meta.p} forms={this.state.personalForms} didMount={this.componentDidMount} changeFocus={this.changeFocus} changeValue={this.changeValue}/>
                    <FormSection formType='w' meta={this.meta.w} forms={this.state.workForms} addForm={this.addForm} removeForm={this.removeForm} changeFocus={this.changeFocus} changeValue={this.changeValue}/>
                    <FormSection formType='e' meta={this.meta.e} forms={this.state.educationForms} addForm={this.addForm} removeForm={this.removeForm} changeFocus={this.changeFocus} changeValue={this.changeValue}/>
                </section>
                <section id='display'>
                    <DisplaySection sectionType='p' displayContent={this.state.personalForms}/>
                    <DisplaySection sectionType='w' displayContent={this.state.workForms}/>
                    <DisplaySection sectionType='e' displayContent={this.state.educationForms}/>
                </section>
            </>
        )
    }
}

export default App;
