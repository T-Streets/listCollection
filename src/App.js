import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListCollection from './components/ListCollection'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Transformation!</h1>
        </header>
        <ListCollection />
       
      </div>
    );
  }
}

export default App;
