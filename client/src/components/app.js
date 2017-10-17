import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EventList from './event-list';
import EventView from './event-view';
import TeamMembers from './team-members';

import { selectors } from '../reducers';

import './app.css';

class App extends Component {
  static propTypes = {
    selectedEvent: PropTypes.string.isRequired
  };

  render() {
    const { selectedEvent } = this.props;
    return (
      <div className="app-container">
        <div className="app-header">
          <h1 className="app-name">Event Reminders</h1>
        </div>
        <div className="app-body">
          <div className="app-event-container">
            <EventList />
            {selectedEvent !== '' ? <EventView eventId={selectedEvent} /> : null}
          </div>
          <TeamMembers />
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
