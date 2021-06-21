import React, { PureComponent, Component } from 'react'; //eslint-disable-line
import { browserHistory } from 'react-router';
import styled, { keyframes } from 'styled-components';
import Mars from '../LittleMarsIcon/assets/mars.png';
import Recon from './assets/recon.png';
import { FullBox, MainHeading, Box, AboveStarsImage, ReconImage } from './localcomponents';


const RedNeon = keyframes`
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff;
  }
`;

const GlowingHeading = styled.p`
  z-index: 2;
  font-family: 'Kelly Slab', cursive !important;
  font-size: 20px;
  color: #fcfcfc;
  transition: text-shadow 2s ease;
  &:hover{
    animation: ${RedNeon} 1s ease-in-out infinite alternate;
  }
`;

class MainHeader extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <FullBox>
        <Box>
          <ReconImage src={Recon} className="float-animation" />
          <AboveStarsImage src={Mars} />
          <MainHeading className="title">Curiosity</MainHeading>
          <GlowingHeading onClick={() => browserHistory.push('/missioncontrol')}>
            Go to Mission Control
          </GlowingHeading>
        </Box>
      </FullBox>
    );
  }
}

export default MainHeader;
