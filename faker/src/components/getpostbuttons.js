import React from 'react'
import styled from 'styled-components'

const QuidelButtons = styled.button`
  background-color: #fff;
	color: #FF8552;
	overflow: hidden;
  transition: box-shadow 0.5s ease-in-out;
  float: left;
	min-width: 150px;
	max-width: 250px;
	display: block;
	margin: 1em;
	padding: 1em 2em;
  border: none;
	vertical-align: middle;
	position: relative;
	z-index: 1;
	-webkit-backface-visibility: hidden;
	-moz-osx-font-smoothing: grayscale;

  &:hover{
    box-shadow: 0px 0px 0px 2px #FF8552;
  }

  &:focus{
    outline: none;
    box-shadow: 0px 0px 0px 2px #FF8552;
  }
`

const GetButton = props =>
  <div className="box">
    <QuidelButtons onClick={() => props.onClick()} id={props.id}>
      <span>{props.text}</span>
    </QuidelButtons>
  </div>

export default GetButton
