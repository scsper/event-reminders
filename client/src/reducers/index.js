import { combineReducers } from 'redux';
import events from './events';
import teamMembers from './team-members';

export default combineReducers({
  events,
  teamMembers
});
