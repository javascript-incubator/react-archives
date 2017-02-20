import React from 'react';
import Video from 'grommet/components/Video';
import Vlink from '../constants/vlinks';

const Vplayer = () =>
  <Video full={true}>
    <source src={Vlink}
      type='video/mp4' />
  </Video>

export default Vplayer;
