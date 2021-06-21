import React, { Component } from 'react';

class Combined extends Component{
  render(){
    return(<div>{this.props.children}</div>);
  }
}

const I = () => <span>I</span>
const Am = () => <span>am</span>
const Rock = () => <span>Rock</span>

export default Combined;
export {I,Am,Rock};


/*
For now we are rendering the dumb components inside the another dumb component
But the real fun will begin when there's a smart component involved
*/
