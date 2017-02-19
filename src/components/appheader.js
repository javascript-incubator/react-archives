import React from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Title from 'grommet/components/Title';

const SeasonLinksArray  = [1,2,3,4,5,6];

const HeaderTitle = () =>
  <Title pad="medium">
    Watch the Thrones
  </Title>

const SeasonLinksBox = (seasonlinks)=>
  <Box direction="row"
    responsive={false} justify="end" flex="grow" pad={{ horizontal: 'large', vertical: 'none'}}>
    {seasonlinks}
  </Box>

const SeasonLinks = (seasonArray) =>
  <Menu label="Label" inline={true} direction="row">
    {seasonArray.map((x,i)=><Anchor href="#" key={i}>Season {x}</Anchor>)}
  </Menu>

const HeaderContainer = (title,linksbox) =>
  <Header colorIndex="grey-3">
    {title}
    {linksbox}
  </Header>

const AppHeader = (props) => HeaderContainer(HeaderTitle(),SeasonLinksBox(SeasonLinks(SeasonLinksArray)));


export default AppHeader;
