import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';

class App extends Component {

  state = {
    menu: false
  }

  toggleMenu = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact="/" component={Home} />
          <Menu menuOpen={this.state.menu} />
          <Header
            menuOpen={this.state.menu}
            toggleMenu={this.toggleMenu}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
