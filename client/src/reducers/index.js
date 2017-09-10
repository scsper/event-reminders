import { combineReducers } from 'redux';
import events, { selectors as eventsSelectors } from './events';
import selectedEvent, { selectors as selectedEventSelectors } from './selected-event';
import teamsAndMembers, { selectors as teamsAndMembersSelectors } from './teams-and-members';

export default combineReducers({
  events,
  teamsAndMembers,
  selectedEvent
});

export const selectors = {
  getEventIds: state => eventsSelectors.getAllIds(state.events),
  getEvent: (state, id) => eventsSelectors.get(state.events, id),
  getRoles: (state, id) => eventsSelectors.getRoles(state.events, id),
  getSelectedEvent: state => selectedEventSelectors.get(state.selectedEvent),
  getTeamMembers: (state, teamMemberIds) => teamsAndMembersSelectors.getMembers(state.teamsAndMembers, teamMemberIds)
};
