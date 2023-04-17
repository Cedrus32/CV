import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqid from "uniqid";
import Form from './Form';
import Button from './Button';

class FormSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forms: [],
            addBtn: null,
            
            // testCount: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if (this.props.formType === 'p') {
            this.setState({forms: [<Form key={uniqid()} formType={this.props.formType} formLabels={this.props.formContent.labels}/>]});
        } else {
            this.setState({addBtn: <Button do='addSection' handleClick={this.handleClick} buttonContent='Add'/>})
        }
    }

    handleClick(e) {
        // console.log(e);
        console.log('props', this.props);
        console.log('state', this.state);
        
        let formsCopy = this.state.forms;
        formsCopy.push(<Form key={uniqid()} formType={this.props.formType} formLabels={this.props.formContent.labels}/>);
        this.setState({forms: formsCopy});

        // this.setState({testCount: this.state.testCount + 1});
    }

    componentDidUpdate() {
        console.log('component did update');
    }

    render() {
        return (
            <>
                <h1 className='form-header'>{this.props.formContent.title}</h1>
                {this.state.forms}
                {this.state.addBtn}

                {/* {this.state.testCount} */}
            </>
        );
    }
}
FormSection.propTypes = {
    formType: PropTypes.string.isRequired,
    formContent: PropTypes.object.isRequired,
};

export default FormSection;
