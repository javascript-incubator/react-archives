import React, { Component } from 'react';

class Validator extends Component {
  render() {
    return( <h1> { this.props.text } </h1>);
  }
}


Validator.propTypes = {
    text(props, propName, component) {
        if(!propName in props) {
            return new Error('Unknown Prop');
        } else if(props[propName].length < 6) {
            return new Error('Prop too short');
        }
    }
}

export default Validator;
