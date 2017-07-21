import React, { PureComponent, Component } from 'react'; //eslint-disable-line
// import { FormattedMessage } from 'react-intl';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Hero from 'grommet/components/Hero';
import Heading from 'grommet/components/Heading';
import Anchor from 'grommet/components/Anchor';
import Animate from 'grommet/components/Animate';

class MainHeader extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Box>
        <Hero size="large">
          <div className="stars"></div>
          <div className="twinkling"></div>
          <Animate
            enter={{ animation: 'fade', duration: 2000, delay: 300 }}
            keep
          >
            <Card
              heading={
                <Heading strong>
                  Curiosity
                </Heading>
              }
              description="Public Portal to library of images gathered by NASA's Curiosity rover on Mars"
              size="large"
              colorIndex="grey-1"
              link={
                <Anchor href="#" primary label="Learn More" />
              }
            />
          </Animate>
        </Hero>
      </Box>
    );
  }
}

export default MainHeader;
