import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';

const SeasonIntroBox = (contents) =>
  <Box align="center" pad={{vertical: "large", between: "small"}} textAlign="center" colorIndex="grey-1">
    {contents}
  </Box>

const SeasonIntroContents = () =>
  <Hero background={<Image src='http://i.lv3.hbo.com/assets/images/series/game-of-thrones/episodes/6/60/episode-60-1024.jpg'
    fit='cover' />}
    backgroundColorIndex='dark'>
    <Heading tag="h1" strong={true}>
      Watch the Thrones
    </Heading>
    <Paragraph size="xlarge" width="large" margin="none">
      Your one stop for all Game of Thrones Episodes.
    </Paragraph>
  </Hero>


const SeasonIntro = () => SeasonIntroBox(SeasonIntroContents());


export default SeasonIntro;
