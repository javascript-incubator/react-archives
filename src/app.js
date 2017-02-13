import React, { Component } from 'react';
import Header from './components/header';
import Intro from './components/intro';
import CurrentTime from './components/currenttime';
import LiveDate from './components/livedate';
import logo from './logo.svg';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Choice #1 of rendering components */}
        <Header></Header>
        {/* Choice #2 of rendering components */}
        <Intro/>
        <CurrentTime message="Time at the time of Page Load "/>
        <LiveDate message="Time at the time of Mouse over this "/>
      </div>
    );
  }
}

export default App;
