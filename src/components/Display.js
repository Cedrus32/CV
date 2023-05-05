import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

class Display extends Component {
    render() {
        // todo display without 'name' 'website' etc. -- just one-by-one in an array
        let displayValues = [];
        if (this.props.displayContent !== undefined) {
            for (let i = 0; i < this.props.displayContent.formItems.length; i++) {
                displayValues.push(<span key={uniqid()}>{this.props.displayContent.formItems[i].itemValue}</span>);
            }
        }
        return (
            <div>
                {displayValues} 
            </div>
        )
    }
}

Display.propTypes = {
    displayContent: PropTypes.object,
};

export default Display;
