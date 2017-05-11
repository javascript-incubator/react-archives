import React from 'react';
import ReactCoder from 'react-coder'
import styled from 'styled-components'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/theme/icecoder.css'

export const StyledCode = styled(ReactCoder)`
  width: 50%;
  margin: 0;
  font-size: 14px;
  background: black;
  color:white;
  font-family: monospace;
  resize: none;
  &:focus{
    outline: 0
  }
`
const Options = {
  lineNumbers: true,
  mode: 'javascript',
  theme:'icecoder'
};

const Editor = ({ value, changeEmitter }) =>
  <StyledCode value={value} onChange={(e) => changeEmitter(e)} options={Options}/>

export default Editor;
