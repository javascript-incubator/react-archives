import React from 'react';
import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import LittleNasaIcon from './nasacredits';

function AppFooter() {
  return (
    <Box pad="medium" colorIndex="grey-1" full="horizontal">
      <Footer justify="between" align="center">
        <Heading tag="h3">
          Curiosity.
          Powered by {<LittleNasaIcon />}
        </Heading>
        <Box
          direction="row"
          align="center"
          pad={{ between: 'medium' }}
        >
          <Paragraph margin="none">
            Made with ♥️ and λ
          </Paragraph>
        </Box>
      </Footer>
    </Box>
  );
}

export default AppFooter;
