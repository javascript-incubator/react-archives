import React, { PureComponent } from 'react'
import InitialState from './initialstate'
import { AppContainer, AppBody } from './components/styled'
import Header from './components/header'
import Editor from './components/codemirror'
import Info from './components/info'
import { APIroute } from './config'
import request from 'superagent'
import Notification from './components/notifiction'

class App extends PureComponent {

  constructor() {
    super()
    this.state = InitialState
  }

  isJson(str) {
    try {
      JSON.parse(str);
    } catch(e) {
      return false;
    }
    return true;
  }

  componentDidMount() {
    this.getRandomRoute()
  }

  onRouteChange(newRoute) {
    this.setState({ route: newRoute.toLowerCase() })
  }

  onJsonChange(newJson) {
    this.setState({ json: newJson })
  }

  postJson() {
    if(!this.isJson(this.state.json)) {
      this.setNotification('Json Error', true)
      return
    }
    var fakeThis = this
    this.setNotification('Posting to Faker', false)
    this.setState({ loading: true })
    request
      .post(APIroute + this.state.route)
      .send(JSON.parse(this.state.json))
      .end(function(err, res) {
        if(err) {
          fakeThis.setState({ loading: false })
          fakeThis.setNotification('Whatever you did, it failed', true);
          return;
        }
        fakeThis.setState({ loading: false })
        fakeThis.setNotification('Successfully Posted', false);
      });
  }

  getJson() {
    if(!this.state.route) {
      this.setNotification('No Route', true);
      return
    }
    var fakeThis = this
    this.setState({ loading: true })
    request
      .get(APIroute + this.state.route).end(function(err, res) {
        if(err) {
          fakeThis.setState({ loading: false })
          fakeThis.setNotification('Whatever you did, it failed', true);
          return;
        }
        fakeThis.setState({ loading: false })
        fakeThis.setNotification('Successfully Fetched', false);
        fakeThis.onJsonChange(JSON.stringify(res.body, null, '\t'))
      })
  }

  getRandomRoute() {
    fetch('http://setgetgo.com/randomword/get.php').then(res => res.text()).then(text => this.onRouteChange(text))
  }

  setNotification(message, failure) {
    this.setState({ notify: true, notificationMessage: message, failure })
  }

  removeNotification() {
    this.setState({ notify: false })
  }

  render() {
    return(
      <AppContainer>
        <Header />
        <AppBody>
          <Info
            value={this.state.route}
            changeEmitter={text => this.onRouteChange(text)}
            api={APIroute}
            getJson={() => this.getJson()}
            postJson={() => this.postJson()}
            loading={this.state.loading}
          />
          <Editor value={this.state.json} changeEmitter={json => this.onJsonChange(json)} />
        </AppBody>
        {this.state.notify && <Notification danger={this.state.failure} notificationMessage={this.state.notificationMessage} removeNotification={() => this.removeNotification()}/>}
      </AppContainer>
    )
  }
}

export default App
