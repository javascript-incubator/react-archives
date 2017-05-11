import React from 'react'
import styled from 'styled-components'

const GreyedLabel = styled.div`
  display: inline;
  /*float: right;*/
  padding: 0;
  cursor: pointer;
  width: 40%;
  color: #6a7989;
  font-weight: bold;
  font-size: 70.25%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const BorderInput = styled.input`
  display: block;
  /*float: right;*/
  padding: 0.8em;
  border: none;
  border-radius: 0;
  background: #fff;
  font-weight: bold;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-appearance: none;
  width: 100%;
  box-shadow: 0px 0px 0px 2px transparent;
  color: #C3979F;
  -webkit-transition: box-shadow 0.3s ease-in-out;
  transition: box-shadow 0.3s ease-in-out;

  &:focus{
    box-shadow: 0px 0px 0px 2px #C3979F;
    outline: none;
  }
`

const RelativeSpan = styled.span`
  position: relative;
  z-index: 1;
  display: inline-block;
  margin: 1em;
  max-width: 400px;
  /*width: 100%;*/
  /*width: calc(100% - 2em);*/
  width: 100%;
  vertical-align: top;
`

const RouteInput = props =>
  <RelativeSpan>
    <BorderInput
      type="text"
      id="Route"
      value={props.value}
      onChange={(e) =>props.changeEmitter(e.target.value)}
    />
    <GreyedLabel id="Url" onClick={() => window.open(`${props.api}${props.value}`)}>{`${props.api}${props.value}`}</GreyedLabel>
  </RelativeSpan>

export default RouteInput
