import React from 'react';
import Roles from './roles';

import './event-view.css';

export default function EventView({ eventId }) {
  return (
    <div className="event-view">
      <Roles eventId={eventId} />
    </div>
  );
}
