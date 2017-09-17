import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import teams, { selectors as teamsSelectors } from './teams';
import members, { selectors as membersSelectors } from './members';

export default combineReducers({
  teams,
  members
});

export const selectors = {
  getMembers: (state, teamMemberIds) => membersSelectors.getMembers(state.members, teamMemberIds),
  getAllMembers: state => membersSelectors.getAllMembers(state.members),
  getTeamIds: state => teamsSelectors.getTeamIds(state.teams),
  getTeam: (state, id) => teamsSelectors.getTeam(state.teams, id),
  getMember: (state, id) => membersSelectors.getMember(state.members, id),
  getNonTeamMemberIds: createSelector(teamsSelectors.getAllTeams, membersSelectors.getAllMembers, state => {
    const teamMemberIds = new Set(teamsSelectors.getAllTeamMemberIds(state.teams));
    const allMemberIds = membersSelectors.getAllMemberIds(state.members);

    return allMemberIds.filter(memberId => !teamMemberIds.has(memberId));
  })
};
