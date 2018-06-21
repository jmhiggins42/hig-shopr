import React, { Component } from 'react';

import Header from './components/Header';
import EightBitBtn from './components/EightBitBtn';

class App extends Component {
  constructor() {
    super();
    this.state = {
      intro: true
    };
  }
  render() {
    return (
      <div className="container-fluid">
        <Header text="#HigShopR" classNames={this.state.intro ? 'active' : ''} />
        <div className="row" hidden={!this.state.intro}>
          <div className="col">
            <EightBitBtn
              clickHandler={() => this.setState(prevState => ({ intro: !prevState.intro }))}
            >
              Button!
            </EightBitBtn>
          </div>
        </div>
        <div className="row" hidden={this.state.intro}>
          <div className="col">Next Step</div>
        </div>
      </div>
    );
  }
}

export default App;
