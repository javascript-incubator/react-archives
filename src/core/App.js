import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import WesterosAndEssos from '../map/container'
import { IndraProvider } from 'indra'

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    indraStore: PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <IndraProvider indraStore={this.props.indraStore}>
          <div style={{ width: '100vw', height: '100vh' }}>
            <WesterosAndEssos />
          </div>
        </IndraProvider>
      </Provider>
    )
  }
}

export default App
