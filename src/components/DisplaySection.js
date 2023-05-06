import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import Display from './Display';

class DisplaySection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mounted: false,
        }
    }

    componentDidMount() {
        this.setState({mounted: true});
    }

    render() {
        let sectionID;
        if (this.props.sectionType === 'p') {
            sectionID = 'personal-display';
        } else if (this.props.sectionType === 'w') {
            sectionID = 'work-display';
        } else if (this.props.sectionType === 'e') {
            sectionID = 'education-display';
        }

        let sectionTitle;
        if (this.props.sectionType === 'w' && this.props.displayContent.length > 0) {
            sectionTitle = <h2>Work Experience</h2>;
        } else if (this.props.sectionType === 'e' && this.props.displayContent.length > 0) {
            sectionTitle = <h2>Education Experience</h2>;
        }

        let displayElements = [];
        if (this.state.mounted) {
            this.props.displayContent.forEach(formContent => {
                displayElements.push(<Display key={uniqid()} displayType={this.props.sectionType} displayContent={formContent}/>);
            });
        }
        
        return (
            <section id={sectionID}>
                {sectionTitle}
                {displayElements}
            </section>
        )
    }
}
DisplaySection.propTypes = {
    sectionType: PropTypes.string,
    displayContent: PropTypes.array,
}

export default DisplaySection;
