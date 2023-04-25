import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import Form from './Form';
import Button from './Button';

class FormSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forms: [],
            addBtn: null,
        }

        this.addForm = this.addForm.bind(this);
        this.removeForm = this.removeForm.bind(this);
    }

    componentDidMount() {
        if (this.props.formType === 'p') {
            this.addForm();
        } else {
            this.setState({addBtn: <Button handleClick={this.addForm} buttonContent='Add'/>})
        }
    }
    
    addForm() {
        let newKey = uniqid();
        this.setState({forms: [...this.state.forms, {formKey: newKey, object: <Form key={newKey} formKey={newKey} formType={this.props.formType} formLabels={this.props.formContent.labels} formIDs={this.props.formContent.ids} handleClick={this.removeForm}/>}]});
    }
    removeForm(e) {
        this.setState({forms: this.state.forms.filter(form => form.formKey !== e.target.dataset.formKey)});
    }

    componentDidUpdate() { // ! testing only
        console.log('******');
        console.log(this.props.formType, 'component did update');
        console.log('state', this.state);
        // this.state.forms.forEach(form => (
        //     console.log(form.id, form.items)
        // ));
        console.log('******');
    }

    render() {
        let sectionID;
        if (this.props.formType === 'p') {
            sectionID = 'personal';
        } else if (this.props.formType === 'w') {
            sectionID = 'work';
        } else if (this.props.formType === 'e') {
            sectionID = 'education';
        }

        let formObjects = [];
        this.state.forms.forEach(form => {
            formObjects.push(form.object);
        });
        
        return (
            <section id={sectionID}>
                <h1 className='form-header'>{this.props.formContent.title}</h1>
                {formObjects}
                {this.state.addBtn}
            </section>
        );
    }
}
FormSection.propTypes = {
    formType: PropTypes.string.isRequired,
    formContent: PropTypes.object.isRequired,
};

export default FormSection;
