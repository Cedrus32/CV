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
        let newID = uniqid();
        let newForm = {id: newID,
                       object: <Form formKey={newID} formType={this.props.formType} formLabels={this.props.formContent.labels} handleClick={this.removeForm}/>
                      };
        this.setState({forms: [...this.state.forms, newForm]});
    }
    removeForm(e) {
        let formsCopy = this.state.forms;
        let targetIndex = formsCopy.findIndex(object => object.id === e.target.id );
        formsCopy.splice(targetIndex, 1);
        this.setState({forms: formsCopy});
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
        return (
            <section id={this.props.formType}>
                <h1 className='form-header'>{this.props.formContent.title}</h1>
                {this.state.forms.map(form => (
                    <div key={form.id}>
                        {form.object}
                    </div>
                ))}
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
