import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div `
  background-color:${props => props.color};
  font-size: 30px;
  padding: 10px;
  padding-left: 30px;
  color:#fff;
`

const AppHeader = props => <StyledHeader color={props.colors.Primary}>Faker</StyledHeader>

export default AppHeader
