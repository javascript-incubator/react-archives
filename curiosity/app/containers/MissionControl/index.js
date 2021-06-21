import React, { PureComponent, Component } from 'react'; //eslint-disable-line
import Helmet from 'react-helmet'; //eslint-disable-line
import { FormattedMessage } from 'react-intl'; //eslint-disable-line
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Pager from 'react-pager';
import { ChasingDots } from 'better-react-spinkit';
import { LineChart, Line, Tooltip } from 'recharts';
import styled from 'styled-components';
import CamSelect from '../../components/CamSelect';
import { imagesSelector, loadingImagesSelector, loadImageErrorSelector, loadImageSuccessSelector, globalGenericSelector } from '../App/selectors';
import { cameraSelector, pageSelector, solSelector } from './selectors';
import { loadImages, loadMissionManifest } from '../App/actions';
import { dispatchHomeUiAction } from './actions';
import { CHANGE_CAMERA, CHANGE_SOL, CHANGE_PAGE } from './constants';
import LittleMarsIcon from '../../components/LittleMarsIcon/assets/mars.png';


const RBox = styled.div`
  color: ${(props) => props.color || '#fcfcfc'};
  height: ${(props) => props.full ? '100vh' : 'inherit'};
  display: flex;
  align-self: ${(props) => props.alignSelf || 'stretch'};
  flex-direction: column;
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  background-color: ${(props) => props.backgroundColor || 'none'};
  padding: ${(props) => props.padding}px;
  z-index: 2;
`;


const Cameras = [
  'ALL CAMS',
  'FHAZ',
  'RHAZ',
  'MAST',
  'CHEMCAM',
  'MAHLI',
  'MARDI',
  'NAVCAM',
  'PANCAM',
  'MINITES',
];

const ScrollDiv = styled.div`
  width: 90vw;
  overflow-x: scroll;
  margin: 0px auto;
`;

const MasonryGrid = styled.div`
  column-fill: initial;
  column-count: 4;
  column-gap: 1em;
  align-self: stretch;
  padding: 30px;
  width:100%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fcfcfc;
  padding: 10px;
`;

const ValueCardValue = styled.div`
  font-size: 36px;
`;

const IMGIcon = styled.img`
  height: 1em;
  width: 1em;
  margin: 0 10px;
`;

const ValueCard = ({ icon, value, unit, ...props }) => <RBox {...props}>
  <ValueCardValue>
    <IMGIcon src={icon} alt={unit} />
    <span>{value}</span>
  </ValueCardValue>
  <RBox alignSelf="flex-end">{unit}</RBox>
</RBox>;

ValueCard.propTypes = {
  icon: React.PropTypes.string,
  value: React.PropTypes.string,
  unit: React.PropTypes.string,
};

const CardContainer = ({ image, heading, subHeading }) => <Brick>
  <img src={image} alt={heading} />
  <h1>{heading}</h1>
  <p>{subHeading}</p>
</Brick>;

CardContainer.propTypes = {
  image: React.PropTypes.string,
  heading: React.PropTypes.string,
  subHeading: React.PropTypes.string,
};

const Brick = styled(Card)`
  width: 100%;
  display: flex;
  break-inside: avoid;
  margin-bottom: 20px;
  color: #000;
`;

export class MissionControl extends Component { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    this.props.getImages();
    this.props.getMissionManifest();
  }

  render() {
    const { imageLoading, imageError, images, camera, sol, selectSol, manifestLoading, manifestError, missionManifest, maxPhotos, selectPage, page, totalPhotos } = this.props; //eslint-disable-line
    return (
      <RBox backgroundColor="#39393A">
        <RBox padding={30}>
          <ValueCard icon={LittleMarsIcon} value={sol.toString()} unit={'Sols'} alignSelf="flex-end" alignItems="end" />
          {manifestLoading &&
            <RBox padding={30}>
              <ChasingDots size={70} color="#297373" />
              <h1>Loading Manifest</h1>
            </RBox>}
          {!manifestLoading && !!missionManifest.length && <ScrollDiv>
            <LineChart data={missionManifest} onClick={(d) => selectSol(d.activePayload[0].payload.sol)} width={5000} height={300}>
              <defs>
                <linearGradient id="colorUv" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fa709a" />
                  <stop offset="50%" stopColor="#fa709a" />
                  <stop offset="75%" stopColor="#fee140" />
                  <stop offset="100%" stopColor="#fee140" />
                </linearGradient>
              </defs>
              <Tooltip itemStyle={{ color: '#000000' }} labelStyle={{ color: '#000000' }} wrapperStyle={{ color: '#000000' }} labelFormatter={(e) => `Sol ${missionManifest[e].sol}`} />
              <Line type="basis" dataKey="photos" stroke="url(#colorUv)" dot={false} strokeWidth="2" />
            </LineChart>
          </ScrollDiv>}
        </RBox>
        <RBox padding={30} justify="center" alignItems="center">
          <CamSelect badges={Cameras} onSelect={(y) => this.props.selectCamera(y)} selected={camera} />
        </RBox>
        {imageLoading &&
          <RBox full justify="center" alignItems="center">
            <ChasingDots size={70} color="#297373" />
            <h3>Loading Images</h3>
          </RBox>}
        {!imageLoading && !images.length &&
          <RBox full justify="center" alignItems="center">
            <h2>☹️ No Images Found try different Search</h2>
          </RBox>}
        {imageError && !!images.length &&
          <RBox full justify="center" alignItems="center">
            <h2>😅 Looks like we messed up</h2>
          </RBox>}
        {!imageLoading && !imageError && !!images.length &&
          <MasonryGrid>
            {images.map((x, i) =>
              <CardContainer
                key={i}
                image={x.img_src}
                heading={x.camera.full_name}
                subHeading={x.earth_date}
              />
            )}
          </MasonryGrid>}
        <RBox justify="center" alignItems="center" padding={30}>
          <Pager
            total={totalPhotos / 25}
            current={page - 1}
            visiblePages={5}
            titles={{ first: 'First', last: 'Last' }}
            className="pager"
            onPageChanged={(k) => selectPage(k + 1)}
          />
        </RBox>
      </RBox>
    );
  }
}

MissionControl.propTypes = {
  maxPhotos: React.PropTypes.number,
  manifestLoading: React.PropTypes.bool,
  manifestError: React.PropTypes.bool,
  missionManifest: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
  ]),
  imageLoading: React.PropTypes.bool,
  imageError: React.PropTypes.bool,
  images: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
  ]),
  getImages: React.PropTypes.func,
  getMissionManifest: React.PropTypes.func,
  selectCamera: React.PropTypes.func,
  camera: React.PropTypes.string,
  selectSol: React.PropTypes.func,
  sol: React.PropTypes.number,
};

export function mapDispatchToProps(dispatch) { //eslint-disable-line
  return {
    getImages: () => dispatch(loadImages()),
    getMissionManifest: () => dispatch(loadMissionManifest()),
    selectCamera: (camKey) => dispatch(dispatchHomeUiAction(CHANGE_CAMERA, camKey)),
    selectPage: (page) => dispatch(dispatchHomeUiAction(CHANGE_PAGE, page)),
    selectSol: (sol) => dispatch(dispatchHomeUiAction(CHANGE_SOL, sol)),
  };
}

const mapStateToProps = createStructuredSelector({
  images: imagesSelector(),
  imageSuccess: loadImageSuccessSelector(),
  imageLoading: loadingImagesSelector(),
  imageError: loadImageErrorSelector(),
  manifestError: globalGenericSelector('loadingManifestError'),
  manifestSuccess: globalGenericSelector('loadingManifestSuccess'),
  missionManifest: globalGenericSelector('missionManifest'),
  maxPhotos: globalGenericSelector('maxPhotos'),
  camera: cameraSelector(),
  page: pageSelector(),
  sol: solSelector(),
  totalPhotos: globalGenericSelector('totalPhotosForCurrentSol'),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(MissionControl);
