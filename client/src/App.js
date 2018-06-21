import React, { Component } from 'react';

import Header from './components/Header';
import EightBitBtn from './components/EightBitBtn';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header text="#HigShopR" />
        <div className="row">
          <div className="col">
            <EightBitBtn>Button!</EightBitBtn>
          </div>
          <div className="col">
            <EightBitBtn classType="danger">Button!</EightBitBtn>
          </div>
          <div className="col">
            <EightBitBtn>Button!</EightBitBtn>
          </div>
          <div className="col">
            <EightBitBtn classType="success">Button!</EightBitBtn>
          </div>
          <div className="col">
            <EightBitBtn>Button!</EightBitBtn>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
