import React, { Component } from 'react';

const EpisodeListHero = children =>
  <Hero size="large" backgroundImage={x} justify={(i%2===0) && 'start'}>
    {children}
  </Hero>

const EpisodeListCard = (children,props) =>
  <Card
    colorIndex="grey-1"
    heading={
      <Heading strong={true}>
        The Winds of Winter
      </Heading>
    }
    description="Watch your favorite Episodes from All Seasons" //props.desc
    label="Now Showing"
    size="large"
    link={
      <Anchor href="#" primary={true} label="Learn More" />
    } />

const EpisodeList1 = props =>
  <div>
    {props.imgList.map((x,i)=>
      EpisodeListHero(EpisodeListCard())
    )}
  </div>
