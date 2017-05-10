import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
	body {
		background: #E1FAF9;
    font-family: 'Open Sans', sans-serif;
	}
`

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const AppBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 2;
`
