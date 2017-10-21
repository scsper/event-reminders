import { combineReducers } from 'redux';
import events, { selectors as eventsSelectors } from './events';
import selectedEvent, { selectors as selectedEventSelectors } from './selected-event';
import teamsAndMembers, { selectors as teamsAndMembersSelectors } from './teams-and-members';
import roles, { selectors as rolesSelectors } from './roles';

export default combineReducers({
  events,
  teamsAndMembers,
  selectedEvent,
  roles
});

/**
 * TODO:
 *   1. Get all events and see what team memebrs are assigned to a role
 *   2. Get all team members divided within "teams" and "no teams"
 *   3. Calculate the "disabled" vs "enabled" members
 */

const eventSelectorsObj = {
  getEventIds: state => eventsSelectors.getAllIds(state.events),
  getEvent: (state, id) => eventsSelectors.get(state.events, id),
  getRoleIds: (state, id) => eventsSelectors.getRoleIds(state.events, id)
};

const teamsAndMembersSelectorsObj = {
  getTeamMembers: (state, teamMemberIds) => teamsAndMembersSelectors.getMembers(state.teamsAndMembers, teamMemberIds),
  getAllMembers: state => teamsAndMembersSelectors.getAllMembers(state.teamsAndMembers),
  getTeamIds: state => teamsAndMembersSelectors.getTeamIds(state.teamsAndMembers),
  getTeam: (state, id) => teamsAndMembersSelectors.getTeam(state.teamsAndMembers, id),
  getMember: (state, id) => teamsAndMembersSelectors.getMember(state.teamsAndMembers, id),
  getNonTeamMemberIds: state => teamsAndMembersSelectors.getNonTeamMemberIds(state.teamsAndMembers),
  getMemberByName: (state, name) => teamsAndMembersSelectors.getMemberByName(state.teamsAndMembers, name),
  getTeamOrMemberByName: (state, name) => teamsAndMembersSelectors.getTeamOrMemberByName(state.teamsAndMembers, name)
};

const rolesSelectorsObj = {
  getTeamMemberIds: (state, id) => rolesSelectors.getTeamMemberIds(state.roles, id),
  getRole: (state, id) => rolesSelectors.getRole(state.roles, id)
};

export const selectors = {
  ...eventSelectorsObj,
  ...teamsAndMembersSelectorsObj,
  getSelectedEvent: state => selectedEventSelectors.get(state.selectedEvent),
  isMemberOccupied: (state, id) => {
    const eventIds = eventSelectorsObj.getEventIds(state);

    let roleIds = [];

    eventIds.forEach(eventId => {
      roleIds = roleIds.concat(eventSelectorsObj.getRoleIds(state, eventId));
    });

    const occupiedMemberIds = new Set();

    roleIds.forEach(roleId => {
      const teamMemberIds = rolesSelectorsObj.getTeamMemberIds(state, roleId);

      teamMemberIds.forEach(teamMemberId => occupiedMemberIds.add(teamMemberId));
    });

    return occupiedMemberIds.has(id);
  },
  getRoles: (state, eventId) => {
    const roleIds = eventSelectorsObj.getRoleIds(state, eventId);
    return roleIds.map(roleId => rolesSelectorsObj.getRole(state, roleId));
  }
};
