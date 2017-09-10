import { combineReducers } from 'redux';

import teams, { selectors as teamsSelectors } from './teams';
import members, { selectors as membersSelectors } from './members';

export default combineReducers({
  teams,
  members
});

export const selectors = {
  getMembers: (state, teamMemberIds) => membersSelectors.getMembers(state.members, teamMemberIds)
};
