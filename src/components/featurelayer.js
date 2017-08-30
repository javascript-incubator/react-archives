import { Component } from 'react'
import PT from 'prop-types' //eslint-disable-line

class FeatureLayer extends Component {
  componentWillReceiveProps (nextProps) {
    this.props.addFeatureLayer({ url:this.props.url, marker:this.props.marker, popUp:this.props.popUp, name:this.props.name })
  }

  componentDidMount () {
    this.props.addFeatureLayer({ url:this.props.url, marker:this.props.marker, popUp:this.props.popUp, name:this.props.name })
  }

  componentWillUnmount () {
    this.props.removeFeatureLayer(this.props.name)
  }

  render () {
    return null
  }
}

FeatureLayer.propTypes = {
  url: PT.string,
  addFeatureLayer: PT.func,
  removeFeatureLayer: PT.func,
  name:PT.string,
  marker:PT.string,
  popUp: PT.object
}

export default FeatureLayer
