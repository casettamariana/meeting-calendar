import React, { Component } from 'react';
import './assets/css/calendar.css'

import DayItem from './day-item';

class Calendar extends Component {
  constructor() {
    super()  
    this.dateNow = new Date()
  }

  itemContructor() {
    const column = []
    for (let index = 0; index < 7; index++) {
      const tomorrow = new Date()
      tomorrow.setDate(this.dateNow.getDate() + index)
      column.push(
        <DayItem
            key={`day-${index}`}
            day={tomorrow.getDate()}
            week={tomorrow.getDay()}
          />
      )
    }

    return column
  }
  
  render() {
    return (
      <div id="container-calendar">
          {this.itemContructor()}
      </div>
    );
  }
}

export default Calendar;
