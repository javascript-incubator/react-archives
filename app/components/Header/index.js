import React, { PureComponent, Component } from 'react'; //eslint-disable-line
// import { FormattedMessage } from 'react-intl';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Card from 'grommet/components/Card';
import Hero from 'grommet/components/Hero';
import Heading from 'grommet/components/Heading';
import Anchor from 'grommet/components/Anchor';
import Animate from 'grommet/components/Animate';
import marssurface from './assets/marssurface.jpg';

class MainHeader extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Box>
        <Header justify="center" colorIndex="neutral-4">
          <Box
            size={{ width: { max: 'xxlarge' } }}
            direction="row"
            responsive={false} justify="start" align="center"
            pad={{ horizontal: 'medium' }}
            flex="grow"
          >
            <Title>
              Curiosity
            </Title>
          </Box>
        </Header>
        <Box>
          <Hero size="large" backgroundImage={marssurface}>
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
      </Box>
    );
  }
}

export default MainHeader;
