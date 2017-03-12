import React from 'react';
import {Link} from 'react-router';
import { Header, Icon } from 'semantic-ui-react';
import Typist from 'react-typist';

const gaussianDelay = (mean, std, {line, lineIdx, charIdx, defDelayGenerator}) => {
  if (lineIdx === 0 && charIdx === line.length - 1) {
    return 2000;
  }
  return defDelayGenerator();
};

const HomePage = () =>
    <div className="intro">
      <Header as="h2" icon textAlign="center">
        <Link to="/gifs">
          <Icon name="diamond" link/>
        </Link>
        <Header.Content>
          <Typist avgTypingDelay={120} startDelay={70} cursor={{hideWhenDone: true}} delayGenerator={gaussianDelay}>
            My Experiments with Pure Functional Components
          </Typist>
        </Header.Content>
      </Header>
    </div>;

export default HomePage;
