import React, { Component } from 'react';

import './assets/fonts/Kanit/Kanit-Regular.ttf'
import './assets/css/app.css'

import Calendar from './components/Calendar';

class App extends Component {
  render() {
    return (
      <div id="main">
        <div id="container-calendar" className="night">
          <Calendar/>
        </div>
      </div>
    );
  }
}

export default App;
