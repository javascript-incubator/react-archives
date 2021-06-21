import React, { PropTypes,Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { Menu, Segment } from 'semantic-ui-react';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends Component {
  render() {
    return (
    <div className="app">
      <Menu inverted attached>
        <IndexLink to="/"><Menu.Item name="Lamda Reactor" link/></IndexLink>
        <Link to="/gifs"><Menu.Item name="Jiffinator" link/></Link>
        <Link to="/xchange"><Menu.Item name="XChangeinator" link/></Link>
      </Menu>
      <div className="content">
        {this.props.children}
      </div>
      <Segment attached>Made with &hearts; and λ</Segment>
    </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
