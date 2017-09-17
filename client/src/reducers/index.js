import { combineReducers } from 'redux';
import events, { selectors as eventsSelectors } from './events';
import selectedEvent, { selectors as selectedEventSelectors } from './selected-event';
import teamsAndMembers, { selectors as teamsAndMembersSelectors } from './teams-and-members';
import { createSelector } from 'reselect';

export default combineReducers({
  events,
  teamsAndMembers,
  selectedEvent
});

/**
 * TODO:
 *   1. Get all events and see what team memebrs are assigned to a role
 *   2. Get all team members divided within "teams" and "no teams"
 *   3. Calculate the "disabled" vs "enabled" members
 */
export const selectors = {
  getEventIds: state => eventsSelectors.getAllIds(state.events),
  getEvent: (state, id) => eventsSelectors.get(state.events, id),
  getRoles: (state, id) => eventsSelectors.getRoles(state.events, id),
  getSelectedEvent: state => selectedEventSelectors.get(state.selectedEvent),
  getTeamMembers: (state, teamMemberIds) => teamsAndMembersSelectors.getMembers(state.teamsAndMembers, teamMemberIds),
  getAllMembers: state => teamsAndMembersSelectors.getAllMembers(state.teamsAndMembers),
  getTeamIds: state => teamsAndMembersSelectors.getTeamIds(state.teamsAndMembers),
  getTeam: (state, id) => teamsAndMembersSelectors.getTeam(state.teamsAndMembers, id),
  getMember: (state, id) => teamsAndMembersSelectors.getMember(state.teamsAndMembers, id),
  getNonTeamMemberIds: state => teamsAndMembersSelectors.getNonTeamMemberIds(state.teamsAndMembers),
  isMemberOccupied: (state, id) => {
    const occupiedMemberIds = new Set(eventsSelectors.getTeamMemberIds(state.events));

    return occupiedMemberIds.has(id);
  }
};
