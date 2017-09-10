import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectEvent } from '../../actions/event';
import { selectors } from '../../reducers';

class Event extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const { selectEvent, event } = this.props;

    selectEvent(event.id);
  }

  render() {
    const { event } = this.props;
    return (
      <li className="event-list-item" onClick={this.onClick}>
        <h2 className="event-title">{event.name}</h2>
        <p className="event-date">{formatDate(event.date)}</p>
        <p className="event-roles">You have 16 roles left to fill</p>
      </li>
    );
  }
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

function mapStateToProps(state, { eventId }) {
  return {
    event: selectors.getEvent(state, eventId)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectEvent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);
