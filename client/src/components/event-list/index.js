import React from 'react';
import './event-list.css';

export default function EventList() {
  return (
    <ul className="event-list">
      <li className="event-list-item">
        <h2 className="event-title">English Service</h2>
        <p className="event-date">9/12/2017</p>
        <p className="event-roles">16 roles left to fill.</p>
      </li>

      <li className="event-list-item">
        <h2 className="event-title">Children's Ministry</h2>
        <p className="event-date">9/12/2017</p>
        <p className="event-roles">3 roles left to fill.</p>
      </li>

      <li className="event-list-item">
        <h2 className="event-title">Special Needs</h2>
        <p className="event-date">9/12/2017</p>
        <p className="event-roles">2 roles left to fill.</p>
      </li>
    </ul>
  );
}
