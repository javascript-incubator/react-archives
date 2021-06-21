import React from 'react';
import Box from 'grommet/components/Box';
import FeaturedEpisode from './featuredepisode';
import EpisodeRepeater from './episoderepeater';
import SeasonIntro from './seasonintro';

const SeasonPage = () =>
    <Box>
      <FeaturedEpisode/>
      <SeasonIntro/>
      <EpisodeRepeater/>
    </Box>


export default SeasonPage;
