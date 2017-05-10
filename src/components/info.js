import React from 'react'
import styled from 'styled-components'
import RouteInput from './routeinput'
import GetButton from './getpostbuttons'
import { Pulse } from 'better-react-spinkit'
import Notification from './notifiction'
import Credits from './credits'

const Heading = styled.div `
  font-size: 30px;
`

const StyledInfo = styled.div `
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Buttons = styled.div `
  display: flex;
  flex-direction: row;
`

const AppInfo = ({
    value,
    changeEmitter,
    api,
    postJson,
    getJson,
    loading,
    routeError,
    notificationMessage,
    notify,
    removeNotification,
    failure
  }) =>
  <StyledInfo>
    <Heading>Serve your Fake JSON API @</Heading>
    <RouteInput value={value} changeEmitter={text => changeEmitter(text)} api={api} routeError={routeError}/>
    {!loading && <Buttons>
      <GetButton text="Get" onClick={() => getJson()}/>
      <GetButton text="Post" onClick={() => postJson()}/>
    </Buttons>}
    {loading && <Pulse size={50} color="#0AD3FF"/>}
    {notify && <Notification danger={failure} notificationMessage={notificationMessage} removeNotification={() => removeNotification()}/>}
    <Credits/>
  </StyledInfo>

export default AppInfo
