import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import * as actions from '../actions/jiffsearchactions';
import JiffApp from '../components/clusters/jiffapp';

export const JiffPage = (props) =>
   <JiffApp
   jiffsearch={props.actions.jiffsearch}
   jiffs={props.jiffs}
   noResult={props.noResult}
   noSearch={props.noSearch}/>;

JiffPage.propTypes = {
  jiffs:PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  noResult:PropTypes.bool.isRequired,
  noSearch:PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    jiffs: state.jiffapp.jiffs,
    noResult:state.jiffapp.noResult,
    noSearch:state.jiffapp.noSearch
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
)(JiffPage);
