import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        // console.log(e);
        if (this.props.do === 'addSection') {
            console.log('render new section form');
        } else if (this.props.do === 'removeSection') {
            console.log('remove this section form');
        } else if (this.props.do === 'addListItem') {
            console.log('add blank list item');
        } else if (this.props.do === 'removeListItem') {
            console.log('remove selected list item');
        }
    }

    render() {
        return (
            <button type='button' onClick={this.handleClick}>{this.props.content}</button>
        )
    }
}
Button.propTypes = {
    content: PropTypes.string.isRequired,
    do: PropTypes.string.isRequired
}

export default Button;
