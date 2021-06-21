// eslint-disable-next-line
import React, { Component } from 'react';

// const LiveDate = () => (
//   <p className = "App-intro">
//     {new Date()}
//   </p>
// );
//
// LiveDate.propTypes = {
//   message: React.PropTypes.string
// }

/*
Oh yeah I forgot these functions are called stateless for a reason 😄
That I cannot use these anymore, end of Functional Fun
But don't worry we still be using a lot of these in our application
*/
class LiveDate extends Component{
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
      <p className = "App-intro" onMouseEnter={this.update.bind(this)}>
        {this.props.message+this.state.live}
      </p>
    );
  }
}

LiveDate.propTypes = {
  message: React.PropTypes.string
}

LiveDate.defaultProps = {
  message: 'Current Time is '
}

export default LiveDate;
