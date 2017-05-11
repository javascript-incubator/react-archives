import React from 'react'
import styled, { keyframes } from 'styled-components'


const slideInUp = keyframes`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const NotificationWrapper = styled.div `
  background-color: ${props => props.danger ? '#C3979F':'#78FFD6' }
  color: black;
  padding: 20px;
  position: absolute;
  bottom: 50px;
  right: 50px;
  z-index: 1000;
  cursor: pointer;
  animation: ${slideInUp} 2s cubic-bezier(0.24, 1.16, 0, 1.01);
`
const Notification = props =>
  <NotificationWrapper
    onClick={() => props.removeNotification()}
    danger={props.danger}
  >
    {props.notificationMessage}
  </NotificationWrapper>

export default Notification
