import { ADD_MEMBER_CLICKED } from '../constants';
import selectedEvent, { selectors as selectedEventSelectors } from './selected-event';
import members, { selectors as memberSelectors } from '../reducers/members';

const defaultState = {
  '1': {
    id: '1',
    name: 'English Service',
    date: new Date('9/30/2017').getTime(),
    roles: [
      {
        id: '1',
        name: 'Worship Team',
        minimumSlots: 1,
        teamMemberIds: ['1', '2', '3']
      },
      {
        id: '2',
        name: 'Announcements',
        minimumSlots: 1,
        teamMemberIds: ['4']
      },
      {
        id: '3',
        name: 'Slides',
        minimumSlots: 1,
        teamMemberIds: ['5']
      },
      {
        id: '4',
        name: 'Setup and Teardown',
        minimumSlots: 3,
        teamMemberIds: ['6', '7']
      }
    ]
  },
  '2': {
    id: '2',
    name: "Children's Ministry",
    date: new Date('9/30/2017').getTime(),
    roles: [
      {
        id: '5',
        name: 'Special Needs',
        minimumSlots: 3,
        teamMemberIds: []
      },
      {
        id: '6',
        name: 'Elementry School',
        minimumSlots: 2,
        teamMemberIds: ['8']
      },
      {
        id: '7',
        name: 'Junior High',
        minimumSlots: 3,
        teamMemberIds: []
      }
    ]
  }
};

export default function events(state = defaultState, action) {
  switch (action.type) {
    case ADD_MEMBER_CLICKED:
      const selectedEventId = selectedEventSelectors.get(selectedEvent('', {}));
      //TODO : add a check to see if person is already here
      const newMember = memberSelectors.getMember(members(), action.memberId);
      const roles = [...state[selectedEventId].roles, newMember];
      const event = Object.assign({}, state[selectedEventId], { roles });
      return Object.assign({}, state, { [selectedEventId]: event });
    default:
      return state;
  }
}

export const selectors = {
  getAllIds: state => Object.keys(state),
  get: (state, id) => state[id],
  getRoles: (state, id) => state[id].roles,
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
