import { combineReducers } from 'redux';
import events, { selectors as eventsSelectors } from './events';
import teamMembers, { selectors as teamMembersSelectors } from './team-members';
import teams, { selectors as teamsSelectors } from './teams';
import selectedEvent, { selectors as selectedEventSelectors } from './selected-event';

export default combineReducers({
  events,
  teamMembers,
  teams,
  selectedEvent
});

export const selectors = {
  getEventIds: state => eventsSelectors.getAllIds(state.events),
  getEvent: (state, id) => eventsSelectors.get(state.events, id),
  getSelectedEvent: state => selectedEventSelectors.get(state.selectedEvent)
};
