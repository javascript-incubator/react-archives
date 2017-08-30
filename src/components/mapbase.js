import React, { Component } from 'react'
import PT from 'prop-types' //eslint-disable-line

// Do not call component will update props on this component in order to redraw this
class MapBase extends Component {
  componentDidMount () {
    this.props.onLoad('map-root')
  }

  render () {
    const { loaded, map, children } = this.props
    const childrenWithProps = React.Children.map(children,
      (child) => React.cloneElement(child, { map: map })
    )

    return <div id='map-root' style={{ width: '100%', height: '100%' }}>
      {loaded ? childrenWithProps : null}
    </div>
  }
}

MapBase.propTypes = {
  onLoad: PT.func,
  loaded: PT.bool,
  map: PT.object,
  children: PT.node
}

export default MapBase
