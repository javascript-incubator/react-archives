import React, { Component,PropTypes } from 'react';
import { Input,Container,Card,Segment,Button,Image,Header } from 'semantic-ui-react';
import { slugToHashConvertor } from '../../utils/slughelper';
import IconHeader from '../dynamos/iconheaders';
import GiphyCredit from '../../resources/giphy.png';

class JiffApp extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {searchText:''};
  }

  componentWillReceiveProps(){
    this.setState({loading:false});
  }

  dispatchSearchAction(){
    this.setState({loading:true});
    this.props.jiffsearch(this.state.searchText);
  }

  updateSearchBoxState(e){
   this.setState({searchText:e.target.value});
  }

  render() {
    return(
      <Container textAlign="center" className="jiff-container">
        <Header as="h1" textAlign="center" className="jiff-logo">
          <Header.Content>
            Jiffinator
          </Header.Content>
        </Header>
        <Input placeholder = "Search..." size="huge"  className="jiff-search"
        onChange={this.updateSearchBoxState.bind(this)} value={this.state.searchText}/>
        <Button loading={this.state.loading} size="huge" onClick={this.dispatchSearchAction.bind(this)}>Search</Button>
        <Segment textAlign="center" className="jiff-result" basic loading={this.state.loading}>
          {this.props.noResult && <IconHeader icon="frown" text="No Result Found"/> }
          {this.props.noSearch && <IconHeader icon="warning" text="Nothing to Search"/> }
          {!this.props.noSearch && !this.props.noResult &&
            <Card.Group itemsPerRow="4">
              {this.props.jiffs.map((x,i)=>
                (<Card key={i}>
                  <Image src={x.images.fixed_width.url}/>
                  <Card.Content>
                    <Card.Header>{slugToHashConvertor(x.slug)}</Card.Header>
                  </Card.Content>
                </Card>)
              )}
            </Card.Group>}
        </Segment>
        <a href="https://github.com/Giphy/GiphyAPI">
          <Image src={GiphyCredit} size="small" centered/>
        </a>
      </Container>
    );
  }
}

JiffApp.propTypes = {
  jiffs:PropTypes.array.isRequired,
  jiffsearch: PropTypes.func.isRequired,
  noResult:PropTypes.bool.isRequired,
  noSearch:PropTypes.bool.isRequired
};


export default JiffApp;
