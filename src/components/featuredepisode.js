import React, { Component } from 'react';
import Card from 'grommet/components/Card';
import Heading from 'grommet/components/Heading';
import Hero from 'grommet/components/Hero';
import Anchor from 'grommet/components/Anchor';

const FeaturedDetailsCard = (title) =>
  <Card
    colorIndex="grey-1"
    heading={
      <Heading strong={true}>
        {title}
      </Heading>
    }
    description="Watch your favorite Episodes from All Seasons"
    label="Now Showing"
    size="large"
    link={
      <Anchor path={`watch`} primary={true} label="Watch Now" />
    }/>

//justification required
class FeaturedEpisode extends Component{
  componentWillMount(){
    this.featuredEpisodeData = {
      img:'http://i.lv3.hbo.com/assets/images/series/game-of-thrones/episodes/6/60/episode-60-1024.jpg',
      title:'The Winds of Winter'
    };
  }

  render(){
    return (
      <Hero size="large" backgroundImage={this.featuredEpisodeData.img} justify={this.props.justification}>
        {FeaturedDetailsCard(this.featuredEpisodeData.title)}
      </Hero>
    );
  }
}

FeaturedEpisode.defaultProps = {
  justification: 'end'
}

export default FeaturedEpisode;
