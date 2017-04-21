import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import GrommetApp from 'grommet/components/App';
import Header from 'components/Header';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';
import Thumb from '../../components/Header/assets/marssurface.jpg';
const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;


export function App(props) {
  return (
    <GrommetApp centered={false}>
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Curiosity"
          defaultTitle="Curiosity"
          meta={[
            { name: 'description', content: 'Public Portal to NASA\'s Curiosity Mission to Mars' }, {
              property: 'og:type',
              content: 'website',
            }, {
              property: 'og:title',
              content: 'Curiosity',
            }, {
              property: 'og:description',
              content: 'Public Portal to NASA\'s Curiosity Mission to Mars',
            }, {
              property: 'og:image',
              content: Thumb,
            },
          ]}
        />
        <Header />
        {React.Children.toArray(props.children)}
        <Footer />
      </AppWrapper>
    </GrommetApp>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
