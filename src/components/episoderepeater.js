import React,{Component} from 'react';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import Paragraph from 'grommet/components/Paragraph';
import Columns from 'grommet/components/Columns';
import EpisodesList from '../constants/episodes';

const Episode = (episodeObject,index) =>
  <Card
    key={index}
    textSize="small"
    colorIndex="grey-1"
    margin="small"
    contentPad="medium"
    direction="column"
    thumbnail={episodeObject.thumb}
    label={`Episode ${episodeObject.episode}`}
    heading={episodeObject.episodename}
    link={<Anchor href={episodeObject.href480} primary={true} label="Watch Now" />}>
    <Paragraph margin="small">
      {episodeObject.desc}
    </Paragraph>
  </Card>

const TrueRepeater  = (arr,component) =>
  arr.map((x,i)=>component(x,i))

const MasonryWrapper = (content) =>
  <Box pad="medium" colorIndex="grey-1-a" full="horizontal">
    <Columns size="medium" justify="center" masonry={true}
      maxCount={3} responsive={true}>
      {content}
    </Columns>
  </Box>

class EpisodeRepeater extends Component{
  render(){
    return (
      MasonryWrapper(TrueRepeater(EpisodesList,Episode))
    );
  }
}

export default EpisodeRepeater;
