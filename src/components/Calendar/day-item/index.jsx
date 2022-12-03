import React, { Component } from 'react';
import './day-item.css'

class DayItem extends Component {

  constructor(props) {
    super(props)

    this.dateNow = props.day
    this.week = this.getDayWeek(props.week)
  }

  getDayWeek(numWeek) {
    const weekDay = {
      1: 'SAT',
      2: 'SUN',
      3: 'MON',
      4: 'TUE',
      5: 'WEN',
      6: 'THU',
      7: 'SAT',
    }

    return weekDay[numWeek]
  }

  render() {
    return (
      <div className="container-day">
        <div className="item-weekday">{this.week}</div>
        <div className="item-data">{this.dateNow}</div>
      </div>
    );
  }
}

export default DayItem;
