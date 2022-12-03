import React, { Component } from 'react';
import './day-item.css'

class DayItem extends Component {
  render() {
    return (
      <div class="container-day">
        <div class="item-weekday">SAT</div>
        <div class="item-data">12</div>
      </div>
    );
  }
}

export default DayItem;
