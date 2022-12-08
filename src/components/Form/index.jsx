import React, { Component } from 'react';

import './assets/css/index.css'

class Form extends Component {
  constructor(props) {
    super(props)

    console.log(props);
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Calendar</legend>

            <div className="inputGroup">
              <label for="event-name">Event name:</label>
              <input type="text" id="fname" name="fname"></input>
            </div>

            <div className="inputGroup">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email"></input>
            </div>

            <div className="inputGroup">
              <label for="dateEvent">Date event:</label>
              <input type="date" id="dateEvent" name="dateEvent"></input>
            </div>

            <input type="submit" value="Submit"></input>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
