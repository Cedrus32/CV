import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqid from "uniqid";
import Form from './Form';
import Button from './Button';

class FormSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forms: [], //// add unique id to items -> {form: <Form />, id: {uniqid()}}
                       //   todo pass the unique id to the remove button so that it can remove that form from this state with Array.find method
            addBtn: null,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if (this.props.formType === 'p') {
            this.addForm();
        } else {
            this.setState({addBtn: <Button cssClass='add' do='addSection' handleClick={this.handleClick} buttonContent='Add'/>})
        }
    }

    handleClick(e) {
        console.log(e.target);
        // console.log('state', this.state);
        console.log('props', this.props);
        
        if (e.target.classList.contains('add')) {
            this.addForm();
        } else if (e.target.classList.contains('remove')) {
            this.removeForm(e.target.id);
        }
    }
    
    addForm() {
        let formsCopy = this.state.forms;
        let newID = uniqid();
        formsCopy.push({id: newID, item: <Form key={newID} cssClass={'remove'} formKey={newID} handleClick={this.handleClick} formType={this.props.formType} formLabels={this.props.formContent.labels}/>});
        this.setState({forms: formsCopy});
    }
    removeForm(itemID) {
        let formsCopy = this.state.forms;
        let targetIndex = formsCopy.findIndex(object => object.id === itemID );
        formsCopy.splice(targetIndex, 1);
        this.setState({forms: formsCopy});
    }

    componentDidUpdate() { // ! testing only
        console.log(this.props.formType, 'component did update');
        console.log('state', this.state);
    }

    render() {
        return (
            <section id={this.props.formType}>
                <h1 className='form-header'>{this.props.formContent.title}</h1>
                {this.state.forms.map(object => (
                    <div key={uniqid()} className='form'>
                        {object.item}
                    </div>
                ))}
                {this.state.addBtn}
            </section>
        );
    }
}
FormSection.propTypes = {
    cssClass: PropTypes.string,
    formType: PropTypes.string.isRequired,
    formContent: PropTypes.object.isRequired,
};

export default FormSection;
