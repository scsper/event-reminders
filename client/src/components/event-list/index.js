import React from 'react';
import { connect } from 'react-redux';

import { selectors } from '../../reducers';

import './event-list.css';

function EventList({ events }) {
  return <ul className="event-list">{events.map(event => <Event event={event} />)}</ul>;
}

function Event({ event }) {
  return (
    <li className="event-list-item">
      <h2 className="event-title">{event.name}</h2>
      <p className="event-date">{formatDate(event.date)}</p>
      <p className="event-roles">You have 16 roles left to fill</p>
    </li>
  );
}

function formatDate(eventDate) {
  const date = new Date(eventDate);

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return monthNames[monthIndex] + ' ' + day + ', ' + year;
}

function mapStateToProps(state) {
  return {
    events: selectors.getEvents(state)
  };
}

export default connect(mapStateToProps)(EventList);
