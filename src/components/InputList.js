import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputList extends Component {
    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}:</label>
                <div>
                    <div className='btn-container'>
                        <button>+</button>
                        <button>-</button>
                    </div>
                    <div className='item-container'></div>
                </div>
            </div>
        )
    }
}
InputList.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default InputList;
