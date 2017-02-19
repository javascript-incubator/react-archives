import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';


const IntroBox = (contents) =>
  <Box align="center" pad={{vertical: "large", between: "small"}} textAlign="center" colorIndex="grey-1">
    {contents}
  </Box>

const IntroContents = () =>
  <div>
    <Heading tag="h1" strong={true}>
      Watch the Thrones
    </Heading>
    <Paragraph size="xlarge" width="large" margin="none">
      Your one stop for all Game of Thrones Episodes.
    </Paragraph>
  </div>


const Intro = () => IntroBox(IntroContents());


export default Intro;
