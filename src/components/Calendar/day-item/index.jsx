import React, { Component } from 'react';
import '../assets/css/day-item.css'

class DayItem extends Component {

  constructor(props) {
    super(props)

    this.dateNow = props.day
    this.week = this.getDayWeek(props.week)

    this.clickCalendar = () => {
      props.inputDataChild(this.props)
    }
  }

  getDayWeek(numWeek) {
    const weekDay = {
      0: 'SUN',
      1: 'MON',
      2: 'TUE',
      3: 'WED',
      4: 'THU',
      5: 'FRI',
      6: 'SAT',
    }

    return weekDay[numWeek]
  }

  render() {
    return (
      <div className="container-day" onClick={this.clickCalendar}>
        <div className="item-weekday">{this.week}</div>
        <div className="item-data">{this.dateNow}</div>
      </div>
    );
  }
}

export default DayItem;
