import React, { Component,PropTypes } from 'react';
import { Dropdown,Container,Statistic,Header } from 'semantic-ui-react';
import { Motion,spring } from 'react-motion';
import {normalizer} from '../../utils/normalizer';
import { Link } from 'react-router';

class XChangeApp extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount(){
    this.props.getAllXchanges();
  }

  dispatchXChangeChange(e,data){
    this.props.makeXChange(data.value);
  }

  render() {
    return(
      <Container textAlign="center" className="xchange-container">
        <Header as="h1" textAlign="center" className="xchange-logo">
          <Header.Content>
            <Link to="/xchange">
              XchangeInator
            </Link>
          </Header.Content>
        </Header>
        <span className="xchange-base-setting">
          Current Exchange is {' '}
          {this.props.xChangesBases.length && <Dropdown scrolling inline options={this.props.xChangesBases} onChange={this.dispatchXChangeChange.bind(this)} defaultValue={this.props.xChangesBases[this.props.xChangesBases.length-1].value}/> || ''}
        </span>
        <Statistic.Group widths="four" className="xchange-data">
          {this.props.xchanges.map((y,i)=>
            <Motion key={i} defaultStyle={{x: 0}} style={{x: spring(y.value)}}>
              {({x})=><Statistic value={normalizer(x)} label={y.label}/>}
            </Motion>)
          }
        </Statistic.Group>
        <Header as="h5" textAlign="center">
          <Header.Content>
            <a href="http://fixer.io/">
              Powered by Fixer.io
            </a>
          </Header.Content>
        </Header>
      </Container>
    );
  }
}

XChangeApp.propTypes = {
  getAllXchanges:PropTypes.func.isRequired,
  makeXChange:PropTypes.func.isRequired,
  xchanges:PropTypes.array.isRequired,
  noResult:PropTypes.bool.isRequired,
  xChangesBases:PropTypes.array.isRequired
};


export default XChangeApp;
