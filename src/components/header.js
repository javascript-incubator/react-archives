import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div `
  background-color:#023C40;
  font-size: 30px;
  padding: 10px;
  padding-left: 30px;
  color:#fff;
`

const AppHeader = props => <StyledHeader>Faker</StyledHeader>

export default AppHeader
