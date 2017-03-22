import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import WeatherList from './containers/weather.list';

class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="row">
              <Header />
          </div>
          <div className="row">
              <WeatherList />
          </div>
      </div>
    );
  }
}

export default App;
