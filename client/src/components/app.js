import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EventList from './event-list';
import EventView from './event-view';

import { selectors } from '../reducers';

import './app.css';

class App extends Component {
  static propTypes = {
    selectedEvent: PropTypes.number.isRequired
  };

  render() {
    return (
      <div className="app-container">
        <div className="app-header">
          <h1 className="app-name">Event Reminders</h1>
        </div>
        <div className="app-body">
          <EventList />
          {this.props.selectedEvent !== -1 ? <EventView /> : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedEvent: selectors.getSelectedEvent(state)
  };
}

export default connect(mapStateToProps)(App);
