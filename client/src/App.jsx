import React, { Component } from 'react';
import Header from './containers/Header';
import Library from './containers/Library';

class App extends Component {
  constructor() {
    super();
    this.state = {
      intro: true
    };
  }
  render() {
    return (
      <div className="container-fluid h-100">
        <Header
          text="#HigShopR"
          isActive={this.state.intro}
          btnHandler={() => this.setState(prevState => ({ intro: !prevState.intro }))}
        />
        <section className="main" hidden={this.state.intro}>
          <Library />
        </section>
      </div>
    );
  }
}

export default App;
