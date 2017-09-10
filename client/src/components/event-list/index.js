import React from 'react';
import { connect } from 'react-redux';

import { selectors } from '../../reducers';
import Event from './event';

import './event-list.css';

function EventList({ eventIds }) {
  return <ul className="event-list">{eventIds.map(eventId => <Event key={eventId} eventId={eventId} />)}</ul>;
}

function mapStateToProps(state) {
  return {
    eventIds: selectors.getEventIds(state)
  };
}

export default connect(mapStateToProps)(EventList);
