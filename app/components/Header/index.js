import React, { PureComponent, Component } from 'react'; //eslint-disable-line
import { browserHistory } from 'react-router';
import Mars from '../LittleMarsIcon/assets/mars.png';
import Recon from './assets/recon.png';
import { FullBox, MainHeading, Box, AboveStarsImage, ReconImage } from './localcomponents';

class MainHeader extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <FullBox>
        <Box>
          <ReconImage src={Recon} className="float-animation" />
          <AboveStarsImage src={Mars} />
          <MainHeading className="title" onClick={() => browserHistory.push('/missioncontrol')}>Curiosity</MainHeading>
        </Box>
      </FullBox>
    );
  }
}

export default MainHeader;
