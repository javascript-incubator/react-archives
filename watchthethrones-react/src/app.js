import React from 'react';
import GrommetApp from 'grommet/components/App';
import AppFooter from './components/appfooter';
import AppHeader from './components/appheader';

class App extends React.Component {
  render() {
    return (
      <GrommetApp centered={false}>
        <AppHeader/>
        {this.props.children}
        <AppFooter/>
      </GrommetApp>
    );
  }
}

export default App;
