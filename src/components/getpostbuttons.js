import React from 'react'
import styled from 'styled-components'

const QuidelButtons = styled.button `
  background: #C3979F;
	color: #C3979F;
	overflow: hidden;
	-webkit-transition: color 0.3s;
	transition: color 0.3s;
	-webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
	transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
  &::after{
    content: '';
	  position: absolute;
	  z-index: -1;
	  border-radius: inherit;
    top: 2px;
	  left: 2px;
	  right: 2px;
	  bottom: 2px;
	  background: #fff;
  }
  &::before{
    content: '';
	  position: absolute;
	  z-index: -1;
    border-radius: inherit;
    background: #C3979F;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  -webkit-transform: translate3d(0, 100%, 0);
	  transform: translate3d(0, 100%, 0);
	 -webkit-transition: -webkit-transform 0.3s;
	 transition: transform 0.3s;
	 -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
	 transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
  }
  &:hover{
    color: #C3979F;
  }
  &:hover::before{
    -webkit-transform: translate3d(0, 0, 0);
	  transform: translate3d(0, 0, 0);
  }
`
const GetButton = props =>
  <div className="box">
    <QuidelButtons className="button button--quidel button--round-s" onClick={() => props.onClick()}>
      <span>{props.text}</span>
    </QuidelButtons>
  </div>

export default GetButton
