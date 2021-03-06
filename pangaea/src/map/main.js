import React from 'react'
import PT from 'prop-types' //eslint-disable-line
import { withIndraConnect } from 'indra'
import MapBase from '../components/mapbase'
import FeatureLayer from '../components/featurelayer'
import Castle from '../statics/castle.png'
import City from '../statics/city.png'

const WesterosAndEssos = (props) =>
  <MapBase onLoad={(id) => props.loadEsriMap(id)} map={props.indraStore.getIndraStore().map} loaded={props.loaded}>
    <FeatureLayer
      url='https://services.arcgis.com/EgePHk52tsFjmhbJ/arcgis/rest/services/GoTFeatures_FINAL/FeatureServer/0'
      addFeatureLayer={(config) => props.addFeatureLayer(config)}
      removeFeatureLayer={name => props.removeFeatureLayer(name)}
      name='City'
      marker={City}
      markerSize='40px'
      popUp={{
        title: '{Name}',
        content: '{type}'
      }}
    />
    <FeatureLayer
      url='https://services.arcgis.com/EgePHk52tsFjmhbJ/arcgis/rest/services/GoTFeatures_FINAL/FeatureServer/1'
      addFeatureLayer={(config) => props.addFeatureLayer(config)}
      removeFeatureLayer={name => props.removeFeatureLayer(name)}
      marker={Castle}
      name='Castle'
      markerSize='25px'
      popUp={{
        title: '{Name}',
        content: '{type}'
      }}
    />
  </MapBase>

WesterosAndEssos.propTypes = {
  loadEsriMap: PT.func,
  addFeatureLayer: PT.func,
  removeFeatureLayer: PT.func,
  indraStore: PT.object,
  loaded: PT.bool
}

export default withIndraConnect(WesterosAndEssos)
