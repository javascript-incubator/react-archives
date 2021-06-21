import React, { PureComponent, Component, PropTypes } from 'react'; //eslint-disable-line
import styled from 'styled-components';
import NASAIcon from './assets/logo.png';

const LittleIcon = styled.img`
  width:2em;
`;

export default () => <LittleIcon src={NASAIcon} />;
