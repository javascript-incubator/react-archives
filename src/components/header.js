import React from 'react'
import styled from 'styled-components'
import Github from '../../public/github.png'

const StyledHeader = styled.div `
  background-color:${props => props.color};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  color:#fff;
`

const GithubImage = styled.img`
  height: 30px;
`

const AppHeader = props => <StyledHeader color={props.colors.Primary}>
  <div>Faker</div>
  <a href='https://github.com/rajatsharma305/faker' target='_blank'><GithubImage src={Github} /></a>
  </StyledHeader>

export default AppHeader
