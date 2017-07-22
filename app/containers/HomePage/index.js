import React, { PureComponent, Component } from 'react'; //eslint-disable-line
import Header from 'components/Header';

export class HomePage extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Header />
    );
  }
}

HomePage.propTypes = {};

export default (HomePage);
