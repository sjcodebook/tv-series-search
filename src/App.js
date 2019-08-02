import React, { Component } from 'react';
import './App.css';
import Intro from './components/intro/intro';
import 'whatwg-fetch';
import Series from './containers/series/series';

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>TV series list</h1>
        </header>
        <Intro message='Welcome To Series Search' />
        <Series />
      </div>
    );
  }
}

export default App;
