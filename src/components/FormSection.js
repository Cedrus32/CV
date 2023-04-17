import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Button from './Button';

class FormSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forms: [],
            addBtn: null,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if (this.props.formType === 'p') {
            this.setState({forms: [<Form key={0} formType={this.props.formType} formContent={this.props.formContent}/>]});
        } else {
            this.setState({addBtn: <Button do='addSection' handleClick={this.handleClick} buttonContent='Add'/>})
        }
    }

    handleClick(e) {
        console.log(e);
        console.log(this.props);
        console.log(this.state);
    }

    render() {
        return (
            <>
                <h1 className='form-header'>{this.props.formContent.title}</h1>
                {this.state.forms}
                {this.state.addBtn}
            </>
        );
    }
}
FormSection.propTypes = {
    formType: PropTypes.string.isRequired,
    formContent: PropTypes.object.isRequired,
};

export default FormSection;
