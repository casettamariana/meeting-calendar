import React, { Component } from 'react';
import './assets/css/calendar.css'

import DayItem from './day-item';

class Calendar extends Component {
  render() {
    return (
      <div id="container-calendar">
          <DayItem/>
          <DayItem/>
          <DayItem/>
          <DayItem/>
          <DayItem/>
      </div>
    );
  }
}

export default Calendar;
