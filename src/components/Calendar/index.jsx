import React, { Component } from 'react';
import './assets/css/calendar.css'

import DayItem from './day-item';

class Calendar extends Component {
  constructor() {
    super()  
    this.dateNow = new Date()
  }
  
  render() {
    return (
      <div id="container-calendar">
          <DayItem
            day={this.dateNow.getDate()}
            week={this.dateNow.getDay()}
          />
      </div>
    );
  }
}

export default Calendar;
