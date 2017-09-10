import React from 'react';
import Roles from './roles';
import './event-view.css';

export default function EventView({ eventId }) {
  return (
    <div className="event-view">
      <Roles eventId={eventId} />
      <div className="team-members">
        <h1>Team Members</h1>
        <ul className="team-members-list">
          <li>Chantillia Ong</li>
          <li>Philemon Chan</li>
          <li>Ben Dang</li>
          <li>
            <h3>Worship Team B</h3>
            <ul>
              <li className="disabled">Scott Jung</li>
              <li>Kiyoshi Lee</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
