import React, { Component } from 'react';

const CurrentTime = ({message='Current Time is '}) => (
  <p className = "App-intro">
    {message + new Date()}
  </p>
);

CurrentTime.propTypes = {
  message: React.PropTypes.string
};

/*
Also we can also do this instead of default arguments,
but since we like default functional arguments so, hell no 🚫
*/

// CurrentTime.defaultProps = {
//   message: 'Current Time is '
// }

/* Since this is definitive code, for the sake of example 🍶*/


// class CurrentTime extends Component{
//   render(){
//     return (
//       <p className = "App-intro">
//         {this.props.message+new Date()}
//       </p>
//     );
//   }
// }
// CurrentTime.propTypes = {
//   message: React.PropTypes.string
// }
//
// CurrentTime.defaultProps = {
//   message: 'Current Time is '
// }

/*
 A very important announcement here props don't change,🔈
 they are meant to be static ⁉️
 so functions taking props and returing JSX must be pure functions
*/ 

export default CurrentTime;
