import React, { PureComponent, Component, PropTypes } from 'react'; //eslint-disable-line
import styled from 'styled-components';

const CSLabel = styled.div`
  display: inline-block;
  line-height: 1;
  vertical-align: baseline;
  margin: 0em 0.14285714em;
  background-color: ${(props) => props.color || '#E8E8E8'};
  background-image: none;
  padding: 0.5833em 0.833em;
  color: #fff;
  text-transform: none;
  font-weight: bold;
  font-size: 0.85714286rem;
  border: 0px solid transparent;
  border-radius: 0.28571429rem;
  -webkit-transition: background 0.1s ease;
  transition: background 0.1s ease;
`;

const PaddedLabel = styled(CSLabel)`
  margin: 2px !important;
`;

class BadgeSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBadge: '',
    };
  }

  componentDidMount() {
    this.state.selectedBadge = this.props.selected;
  }

  selectBadge(k) {
    this.props.onSelect(k);
  }

  render() {
    return (
      <div>
        {this.props.badges.map((y, j) =>
          <PaddedLabel key={j} onClick={() => this.selectBadge(y)} color={this.props.selected === y ? '#2185D0' : 'grey'}>
            {y}
          </PaddedLabel>
        )}
      </div>
    );
  }
}

BadgeSelect.propTypes = {
  selected(props, propName, componentName) { //eslint-disable-line
    if (!props.badges.includes(props.selected)) {
      return new Error(
        `Invalid prop ${propName} is supplied to ${componentName} with a Value of ${props.selected} Validation failed.`
      );
    }
  },
  badges: PropTypes.array,
  onSelect: PropTypes.func,
};

export default BadgeSelect;
