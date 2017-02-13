import React, { Component } from 'react';
import logo from '../logo.svg';

/*
 This header is a stateless component, ie.
 it has no state only prop 👾
 AKA Dumb Components or Functional Stateless Components,
 A Functional Component may not be as dumb as its name states it
 as it can always take an argument with itself making it to change
 according to the passed argument hence,
 not so dumb Dumb Functional Component 😏
*/
 const Header = () => (
   <div className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
     <h2>Pure React</h2>
   </div>
 );

/*
 Let's see how can we make a stateful component so that it renders the same Header
 Let's go Object Oriented on this and create a class, and this part stays commented
 because I ❤️ Functional Programming and there is only one case in which it can be
 uncommented that is it's constitution to my Application Performance Increment 🚀,
 which is highly unlikely going by the history of Classes you know what I mean. 😉
*/
//
// class Header extends Component{
//   render(){
//     return (
//       <div className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h2>Pure React</h2>
//       </div>
//     );
//   }
// }
/*
 What a waste of good writing space huh Classes 😒
 Hey wait there's also one other way of doing that, by using old JavaScript Syntax
 So, lets do that
*/
// var Header = React.createClass({
//   render:function(){
//     return (
//       <div className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h2>Pure React</h2>
//       </div>
//     );
//   }
// });
/*
 And finally let's export it 📦
*/

export default Header;
