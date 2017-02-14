import React, { Component } from 'react';
import Clicker from './clicker';

class TimeRecorder extends Component{
  constructor(){
    super();
    this.state = {
      live : new Date()
    }
  }

  update(e){
    this.setState({live : new Date()});
  }

  render(){
    return (
      <div className = "App-intro">
        <span>{this.state.live+' You can update this time by clicking'}</span><br/>
        <Clicker update={this.update.bind(this)}/><br/>
        <Clicker update={this.update.bind(this)}/><br/>
        <Clicker update={this.update.bind(this)}/><br/>
      </div>
    );
  }
}

export default TimeRecorder;
/*
An example of Master-Slave/ Dumb-Smart Component Combo,
here Clicker is a slave component which changes the state of TimeRecorder component
the clicker component takes the input from the user and calls the function of the TimeRecorder
*/
