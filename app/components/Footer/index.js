import React from 'react';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';

function AppFooter() {
  return (
    <Box pad="medium" colorIndex="grey-1-a" full="horizontal">
      <Footer justify="between">
        <Title>
          Curiosity
        </Title>
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
