import React from 'react';

const Clicker = (props) =>
  <button onClick={props.update}>Here</button>

export default Clicker;


/*
A Dumb component with nothing but prop, it's only use is to create action receivers for it's
Master Component
*/
