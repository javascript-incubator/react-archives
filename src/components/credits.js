import React from 'react'
import styled from 'styled-components'

const StyledCredits = styled.div`
  margin-top: 30px;
  padding: 0 1em;
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
  cursor: pointer;
`
const OpenGithub = () => window.open('https://github.com/rajatsharma305');
const Credits = () => <StyledCredits onClick={() => OpenGithub()}>Made with 💖 // Rajat Sharma</StyledCredits>

export default Credits
