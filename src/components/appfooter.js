import React from 'react';
import Box from 'grommet/components/Box';
import Footer from 'grommet/components/Footer';

const FooterWrapper = (contents) =>
  <Footer>
    {contents}
  </Footer>

const FooterOuterBox = (innerbox) =>
  <Box align="center" alignContent="around" direction="column" full="horizontal" pad="medium"  colorIndex="light-2" >
    {innerbox}
  </Box>

const FooterInnerBox = (contents) =>
  <Box align="start" alignContent="around" direction="column" colorIndex="grey-3" pad="medium" full="horizontal">
    {contents}
  </Box>

const FooterContents = () =>
  'Made with ❤️  🎸 Awesomeness and ⚛️ Pure Functional Components, even this Footer is Pure ✨';

const AppFooter = () => FooterWrapper(FooterOuterBox(FooterInnerBox(FooterContents())));

export default AppFooter;
