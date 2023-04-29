import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Button from './Button';

class FormSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forms: [],
            targetFormIndex: null,
            targetItemIndex: null,
        }

        this.removeForm = this.removeForm.bind(this);
        this.changeFocus = this.changeFocus.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }
    
    removeForm(e) {
        this.setState({forms: this.state.forms.filter(form => form.formKey !== e.target.dataset.formKey)});
    }

    changeFocus(e) {
        this.setState({targetFormIndex: this.state.forms.findIndex(object => object.formKey === e.target.dataset.inputKey.split('-')[0])});
        this.setState({targetItemIndex: parseInt(e.target.dataset.inputKey.split('-')[1])});
    }
    changeValue(e) {
        let formsCopy = this.state.forms;
        formsCopy[this.state.targetFormIndex].formItems[this.state.targetItemIndex].value = e.target.value;
        this.setState({forms: formsCopy});
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

        let formElements = [];
        this.props.forms.forEach(object => {
            formElements.push(<Form key={object.formKey}
                                    formKey={object.formKey}
                                    formType={this.props.formType}
                                    formLabels={this.props.meta.labels}
                                    formIDs={this.props.meta.ids}
                                    removeForm={this.props.removeForm}
                                    changeFocus={this.changeFocus}
                                    changeValue={this.changeValue}/>);
        });
        
        let addBtn;
        if (this.props.formType !== 'p') {
            addBtn = <Button handleClick={this.props.addForm} buttonContent='Add'/>
        }
        
        return (
            <section id={sectionID}>
                <h1 className='form-header'>{this.props.meta.title}</h1>
                {formElements}
                {addBtn}
            </section>
        );
    }
}
FormSection.propTypes = {
    formType: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired,
    forms: PropTypes.array.isRequired,
    addForm: PropTypes.func,
    removeForm: PropTypes.func,
    didMount: PropTypes.func,
};

export default FormSection;
