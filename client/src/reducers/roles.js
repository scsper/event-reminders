import { ADD_MEMBER_CLICKED, REMOVE_MEMBER_CLICKED } from '../constants';

const defaultState = {
  '1': {
    id: '1',
    name: 'Worship Team',
    minimumSlots: 1,
    teamMemberIds: ['1', '2', '3']
  },
  '2': {
    id: '2',
    name: 'Announcements',
    minimumSlots: 1,
    teamMemberIds: ['4']
  },
  '3': {
    id: '3',
    name: 'Slides',
    minimumSlots: 1,
    teamMemberIds: ['5']
  },
  '4': {
    id: '4',
    name: 'Setup and Teardown',
    minimumSlots: 3,
    teamMemberIds: ['6', '7']
  },
  '5': {
    id: '5',
    name: 'Special Needs',
    minimumSlots: 3,
    teamMemberIds: []
  },
  '6': {
    id: '6',
    name: 'Elementry School',
    minimumSlots: 2,
    teamMemberIds: ['8']
  },
  '7': {
    id: '7',
    name: 'Junior High',
    minimumSlots: 3,
    teamMemberIds: []
  }
};

export default function roles(state = defaultState, action) {
  switch (action.type) {
    case ADD_MEMBER_CLICKED:
      const { memberIds, roleId } = action;
      const newTeamMemberIds = state[roleId].teamMemberIds.concat(memberIds);

      const newRole = {
        ...state[roleId],
        teamMemberIds: newTeamMemberIds
      };

      return {
        ...state,
        [roleId]: newRole
      };
    case REMOVE_MEMBER_CLICKED:
      const updatedTeamMemberIds = state[action.roleId].teamMemberIds.filter((id) => id !== action.memberId);

      const updatedRole = {
        ...state[action.roleId],
        teamMemberIds: updatedTeamMemberIds
      };

      return {
        ...state,
        [action.roleId]: updatedRole
      };
    default:
      return state;
  }
}

export const selectors = {
  getRole: (state, id) => state[id],
  getTeamMemberIds: (state, id) => state[id].teamMemberIds
};
