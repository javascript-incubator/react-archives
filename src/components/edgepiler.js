import React, { Component } from 'react';
import Prism from 'prismjs';
import '../prism.css';

class EdgePiler extends Component {
  constructor(){
    super();
    this.state = {
      input:'/* Enter ES6 Here */',
      output:'',
      err:''
    }
  }

  transpile(e){
    let code = e.target.value;
    try{
      this.setState({
        output:Prism.highlight(window.Babel.transform(code,{presets:['es2015','react']}).code, Prism.languages.javascript),
        err:''
      })
    }catch(e){
      this.setState({
        err:e.message
      })
    }
  }

  render() {
    return(
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea
            onChange={this.transpile.bind(this)}
            defaultValue={this.state.input}/>
          <pre>
            <code className="language-javascript" dangerouslySetInnerHTML={{
              __html: this.state.output
            }}/>
          </pre>
        </div>
      </div>
    )
  }
}

export default EdgePiler;
