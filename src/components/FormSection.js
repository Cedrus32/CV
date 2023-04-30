import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Button from './Button';

class FormSection extends Component {
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
                                    changeFocus={this.props.changeFocus}
                                    changeValue={this.props.changeValue}/>);
        });
        
        let addBtn;
        if (this.props.formType !== 'p') {
            addBtn = <Button formType={this.props.formType} handleClick={this.props.addForm} buttonContent='Add'/>
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
    changeFocus: PropTypes.func.isRequired,
    changeValue: PropTypes.func.isRequired,
    didMount: PropTypes.func,
};

export default FormSection;
