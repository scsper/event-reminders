import { combineReducers } from 'redux';
import events from './events';
import teamMembers from './team-members';
import teams from './teams';

export default combineReducers({
  events,
  teamMembers
});
