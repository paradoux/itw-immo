import React, { Component } from 'react';
import './App.css';
import SplittedDashboard from './containers/SplittedDashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SplittedDashboard />
      </div>
    );
  }
}

export default App;
