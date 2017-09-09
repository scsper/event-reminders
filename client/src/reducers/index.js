import { combineReducers } from 'redux';
import events, { selectors as eventsSelectors } from './events';
import teamMembers, { selectors as teamMembersSelectors } from './team-members';
import teams, { selectors as teamsSelectors } from './teams';

export default combineReducers({
  events,
  teamMembers
});

export const selectors = {
  getEvents: state => eventsSelectors.getEvents(state.events)
};
