import React, { PureComponent, Component } from 'react'; //eslint-disable-line
import Helmet from 'react-helmet'; //eslint-disable-line
import { FormattedMessage } from 'react-intl'; //eslint-disable-line
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';
import Heading from 'grommet/components/Heading';
import Card from 'grommet/components/Card';
import Value from 'grommet/components/Value';
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
import LittleMarsIcon from '../../components/LittleMarsIcon';

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

const ScrollDiv = styled.div `
  width: 90vw;
  overflow-x: scroll;
  margin: 0px auto;
`;


export class HomePage extends Component { // eslint-disable-line react/prefer-stateless-function
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
      <Box pad="medium" colorIndex="grey-1" full="horizontal">
        <Box pad="medium" alignSelf="center" full="horizontal" align="stretch">
          <Value
            align="end"
            value={sol}
            icon={<LittleMarsIcon />}
            label="Martian Sol"
          />
          {manifestLoading &&
            <Box pad="medium" justify="center" alignSelf="center" align="center">
              <ChasingDots size={70} color="#297373" />
              <Heading>Loading Manifest</Heading>
            </Box>}
          {!manifestLoading && !!missionManifest.length && <ScrollDiv>
            <LineChart data={missionManifest} onClick={(d) => selectSol(d.activePayload[0].payload.sol)} width={5000} height={300}>
              <Tooltip itemStyle={{ color: '#000000' }} labelStyle={{ color: '#000000' }} wrapperStyle={{ color: '#000000' }} labelFormatter={(e) => `Sol ${missionManifest[e].sol}`} />
              <Line type="basis" dataKey="photos" stroke="#2ad2c9" dot={false} strokeWidth="2" />
            </LineChart>
          </ScrollDiv>}
        </Box>
        <Box pad="medium" justify="center" alignSelf="center">
          <CamSelect badges={Cameras} onSelect={(y) => this.props.selectCamera(y)} selected={camera} />
        </Box>
        {imageLoading &&
          <Box pad="medium" justify="center" alignSelf="center" full align="center">
            <ChasingDots size={70} color="#297373" />
            <Heading tag="h3">Loading Images</Heading>
          </Box>}
        {!imageLoading && !images.length &&
          <Box pad="medium" justify="center" alignSelf="center" full align="center">
            <Heading tag="h2">☹️ No Images Found try different Search</Heading>
          </Box>}
        {imageError && !!images.length &&
          <Box pad="medium" justify="center" alignSelf="center" full align="center">
            <Heading tag="h2">😅 Looks like we messed up</Heading>
          </Box>}
        {!imageLoading && !imageError && !!images.length &&
          <Columns
            size="medium"
            justify="center" masonry
            maxCount={3} responsive
          >
            {images.map((x, i) =>
              <Card
                key={i}
                textSize="small"
                colorIndex="neutral-1"
                margin="small"
                contentPad="medium"
                direction="column"
                thumbnail={x.img_src}
                heading={x.camera.full_name}
                primary label={x.earth_date}
              />
            )}
          </Columns>}
        <Box justify="center" align="center" pad="medium">
          <Pager
            total={totalPhotos / 25}
            current={page - 1}
            visiblePages={5}
            titles={{ first: 'First', last: 'Last' }}
            className="pager"
            onPageChanged={(k) => selectPage(k + 1)}
          />
        </Box>
      </Box>
    );
  }
}

HomePage.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
