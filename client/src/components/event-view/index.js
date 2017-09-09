import React from 'react';
import './event-view.css';

export default function EventView() {
  return (
    <div className="event-view">
      <div className="roles">
        <h1>Roles</h1>
        <ul className="role-list">
          <li>
            <h2>Worship Team</h2>
            <ul>
              <li>Jesse Du</li>
              <li>Angie Paek</li>
              <li>Scott Sperling</li>
            </ul>
          </li>
          <li>
            <h2>Announcements</h2>
            <ul>
              <li>Nikki Louie</li>
            </ul>
          </li>
          <li>
            <h2>Slides</h2>
            <ul>
              <li>Belinda Kuo</li>
            </ul>
          </li>
          <li>
            <h2>Setup and Teardown</h2>
            <ul>
              <li>Stacie Lum</li>
              <li>Scott Jung</li>
              <li>Empty slot</li>
            </ul>
          </li>
        </ul>
      </div>

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
