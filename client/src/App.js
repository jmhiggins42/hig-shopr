import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header text="#HigShopR" />
      </div>
    );
  }
}

export default App;
