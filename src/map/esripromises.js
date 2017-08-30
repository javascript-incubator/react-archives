import { esriPromise } from 'esri-promise'
import actionSpreader from '../utils/actionspreader'
import proj4 from 'proj4'

const WGS84 = `+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees`
const WesterosProjection = `PROJCS["WGS_1984_Web_Mercator_Auxiliary_Sphere",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator_Auxiliary_Sphere"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",0.0],PARAMETER["Standard_Parallel_1",0.0],PARAMETER["Auxiliary_Sphere_Type",0.0],UNIT["Meter",1.0],AUTHORITY["EPSG",3857]]` // eslint-disable-line

export const PeojectedCenter = proj4(WesterosProjection, WGS84, [-82534.001799999736, 3012168.8979])

export const LoadMapThunk = mapId => (dispatch, getState, iStore) => {
  esriPromise([
    'esri/Map',
    'esri/views/MapView',
    'esri/layers/TileLayer',
    'esri/Basemap'
  ]).then(([Map, MapView, TileLayer, Basemap, FeatureLayer]) => {
    const WesterosTileLayer = new TileLayer({
      url: 'https://tiles.arcgis.com/tiles/EgePHk52tsFjmhbJ/arcgis/rest/services/GoT_Basemap/MapServer'
    })

    const WesterosBaseMap = new Basemap({
      baseLayers: [WesterosTileLayer],
      title: 'Westeros and Essos',
      id: 'westeros',
      thumbnailUrl: 'https://stamen-tiles.a.ssl.fastly.net/terrain/10/177/409.png'
    })

    const map = new Map({
      basemap: WesterosBaseMap
    })

    const view = new MapView({
      map,
      container: mapId,
      extent: { // autocasts as new Extent()
        xmin: -543610.8034882732,
        ymin: 2357426.9409872144,
        xmax: 996267.2762678864,
        ymax: 3630075.319617305,
        spatialReference: 102100
      }
    })

    view.then(() => {
      view.popup.dockOptions = {
        buttonEnabled: false,
        breakpoint: {
          width: 600,
          height: 1000
        }
      }
      view.popup.dockEnabled = true
      iStore.setIndraStore({ map })
      // view.center = proj4(WesterosProjection, WGS84, [-82534.001799999736, 3012168.8979])
      view.on('click', function (event) {
        // event is the event handle returned after the event fires.
        console.log(iStore.getIndraStore())
      })

      view.goTo({
        target: proj4(WesterosProjection, WGS84, [-82534.001799999736, 3012168.8979]),
        zoom: 15
      })
      dispatch(actionSpreader('MAPLOADED'))
    }, (e) => console.log(e))
  }).catch(e => {
    console.log(e)
  })
}

export const AddFeatureLayer = ({ url, marker, popUp, name }) => (dispatch, getState, iStore) => {
  esriPromise([
    'esri/layers/FeatureLayer',
    'esri/symbols/PictureMarkerSymbol',
    'esri/renderers/SimpleRenderer',
    'esri/layers/support/LabelClass',
    'esri/symbols/TextSymbol'
  ]).then(([FeatureLayer, PictureMarkerSymbol, SimpleRenderer, LabelClass, TextSymbol]) => {
    const { map } = iStore.getIndraStore()
    if (!map) {
      dispatch(actionSpreader('FEATURELAYERNOTADDED'))
      return
    }
    const CitiesFeatureLayer = new FeatureLayer({ url, outFields: ['*'] })
    map.add(CitiesFeatureLayer)
    dispatch(actionSpreader('ADDEDFEATURELAYER'))

    if (marker) {
      CitiesFeatureLayer.renderer = new SimpleRenderer({
        symbol: new PictureMarkerSymbol({
          url: marker,
          width: '20px',
          height: '20px'
        })
      })
    }
    try {
      var statesLabelClass = new LabelClass({
        labelExpressionInfo: { value: '{name}' },
        symbol: new TextSymbol({
          color: 'black',
          haloSize: 1,
          haloColor: 'white'
        })
      })
      CitiesFeatureLayer.labelsVisible = true
      CitiesFeatureLayer.labelingInfo = [ statesLabelClass ]
    } catch (e) {
      console.error(e)
    }

    if (popUp) {
      CitiesFeatureLayer.popupTemplate = popUp
    }
    iStore.getIndraStore().layers[name] = CitiesFeatureLayer
  }).catch(e => console.error(e))
}

export const RemoveFeatureLayer = (name) => (dispatch, getState, iStore) => {
  const { map, layers } = iStore.getIndraStore()
  layers[name] = null
  map.remove(layers[name])
}
