import React, { Component } from 'react';

const Intro = () => (
  <p className = "App-intro">
    A Web Application with nothing but React!
  </p>
);

/*
 Okay Chapter II we can only render a complete tag as JSX ie
 ()=>(<p>Hi</p><bold>I am Rajat</bold>) is not allowed
 ()=>(<span><p>Hi</p><bold>I am Rajat</bold></span>) is allowed
 **Adjecent JSX tags must be wrapped in an enclosing tag
*/
/* Also this is also possible */
// const Intro = () => <p className = "App-intro">
//   A Web Application with nothing but React!
// </p>
/* As the arrow and the returned entity is in the same line,
 but this will not work 😞 that's why we need brackets
*/
// const Intro = () =>
// <p className = "App-intro">
//   A Web Application with nothing but React!
// </p>
/* Let's export it 📦 */

export default Intro;

/*💓 export, it gives superpower to my separation of concerns principle*/
