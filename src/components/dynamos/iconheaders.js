import React,{PropTypes} from 'react';
import { Icon,Header } from 'semantic-ui-react';

const IconHeader = props =>
  <Header as="h2" icon textAlign="center">
    <Icon name={props.icon} circular />
    <Header.Content>
      {props.text}
    </Header.Content>
  </Header>;

IconHeader.propTypes = {
  icon:PropTypes.string.isRequired,
  text:PropTypes.string.isRequired
};

export default IconHeader;
