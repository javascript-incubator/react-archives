import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import * as actions from '../actions/xchangeactions';
import XChangeApp from '../components/clusters/xchangeapp';

export const XChangePage = props =>
   <XChangeApp
   xChangesBases={props.xChangesBases}
   getAllXchanges={props.actions.getAllXchanges}
   makeXChange={props.actions.makeXChange}
   xchanges={props.xchanges}
   noResult={props.noResult}/>;

XChangePage.propTypes = {
  xchanges:PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  noResult:PropTypes.bool.isRequired,
  xChangesBases:PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    xchanges: state.xchange.xchanges,
    noResult:state.xchange.noResult,
    xChangesBases:state.xchange.xChangesBases
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(XChangePage);
