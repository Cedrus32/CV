import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

class Display extends Component {
    render() {
        let displayValues = [];
        let dateValues = [];
        if (this.props.displayContent !== undefined) {
            for (let i = 0; i < this.props.displayContent.formItems.length; i++) {
                if (this.props.displayContent.formItems[i].itemID.includes('date') && this.props.displayContent.formItems[i].itemValue !== '') {
                    dateValues.push(this.props.displayContent.formItems[i].itemValue);
                } else if (!this.props.displayContent.formItems[i].itemID.includes('date')) {
                    displayValues.push(<span key={uniqid()} id={this.props.displayContent.formItems[i].itemID}>{this.props.displayContent.formItems[i].itemValue}</span>);
                }
            }
            if (this.props.displayType !== 'p') {
                if (dateValues.length > 0) {
                    displayValues.push(<span key={uniqid()} id='date'>{dateValues.join(' - ')}</span>);
                } else {
                    displayValues.push(<span key={uniqid()} id='date'>{''}</span>);
                }
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
