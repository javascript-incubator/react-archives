import React, { PureComponent, Component, PropTypes } from 'react'; //eslint-disable-line
import styled from 'styled-components';
import MarsIcon from './assets/mars.png';

const LittleIcon = styled.img`
  height:1em;
  width:1em;
  margin: 5px;
`;

export default () => <LittleIcon src={MarsIcon} />;
