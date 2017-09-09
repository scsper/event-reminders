import React, { Component } from 'react';
import EventList from './event-list';
import EventView from './event-view';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="app-header">
          <h1 className="app-name">Event Reminders</h1>
        </div>
        <div className="app-body">
          <EventList />
          <EventView />
        </div>
      </div>
    );
  }
}

export default App;
