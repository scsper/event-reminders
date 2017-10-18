import { ADD_MEMBER_CLICKED } from '../constants';
import selectedEvent, { selectors as selectedEventSelectors } from './selected-event';
import members, { selectors as memberSelectors } from '../reducers/members';

const defaultState = {
  '1': {
    id: '1',
    name: 'English Service',
    date: new Date('9/30/2017').getTime(),
    roles: {
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
      }
    }
  },
  '2': {
    id: '2',
    name: "Children's Ministry",
    date: new Date('9/30/2017').getTime(),
    roles: {
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
    }
  }
};

export default function events(state = defaultState, action) {
  switch (action.type) {
    case ADD_MEMBER_CLICKED:
      const { memberId, roleId, selectedEventId } = action;
      const event = state[selectedEventId];
      const role = event.roles[roleId];

      const newTeamMemberIds = role.teamMemberIds.slice();
      newTeamMemberIds.push(memberId);

      const newRole = {
        ...role,
        teamMemberIds: newTeamMemberIds
      };

      const newRoles = {
        ...event.roles,
        [roleId]: newRole
      };

      const newEvent = {
        ...event,
        roles: newRoles
      };

      return {
        ...state,
        [selectedEventId]: newEvent
      };
    default:
      return state;
  }
}

export const selectors = {
  getAllIds: state => Object.keys(state),
  get: (state, id) => state[id],
  getRoles: (state, id) => Object.keys(state[id].roles).map(roleId => state[id].roles[roleId]),
  getTeamMemberIds: (state, id) => {
    const eventIds = selectors.getAllIds(state);

    return eventIds.reduce((teamMemberIds, eventId) => {
      const roles = selectors.getRoles(state, eventId);

      roles.forEach(role => {
        teamMemberIds = teamMemberIds.concat(role.teamMemberIds);
      });

      return teamMemberIds;
    }, []);
  }
};
