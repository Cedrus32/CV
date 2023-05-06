import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

class Display extends Component {
    render() {
        let displayValues = [];
        if (this.props.displayContent !== undefined) {
            for (let i = 0; i < this.props.displayContent.formItems.length; i++) {
                displayValues.push(<span key={uniqid()}>{this.props.displayContent.formItems[i].itemValue}</span>);
            }
        }
        return (
            <div className={this.props.displayType}>
                {displayValues} 
            </div>
        )
    }
}

Display.propTypes = {
    displayType: PropTypes.string,
    displayContent: PropTypes.object,
};

export default Display;
