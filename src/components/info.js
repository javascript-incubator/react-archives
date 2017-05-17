import React from 'react'
import styled from 'styled-components'
import RouteInput from './routeinput'
import GetButton from './getpostbuttons'
import { Pulse } from 'better-react-spinkit'
import Credits from './credits'

const Heading = styled.div`
  font-size: 30px;
`

const StyledInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`

const AppInfo = ({
    value,
    changeEmitter,
    api,
    postJson,
    getJson,
    loading
  }) =>
  <StyledInfo>
    <Heading>Serve your Fake JSON API @</Heading>
    <RouteInput value={value} changeEmitter={text => changeEmitter(text)} api={api}/>
    {!loading && <Buttons>
      <GetButton text="Get" onClick={() => getJson()} id="Get"/>
      <GetButton text="Post" onClick={() => postJson()} id="Post"/>
    </Buttons>}
    {loading && <Pulse size={70} color="#297373"/>}
    <Credits/>
  </StyledInfo>

export default AppInfo
