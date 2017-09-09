const defaultState = {
  1: {
    id: 1,
    title: 'English Service',
    date: new Date('9/30/2017'),
    roles: [
      {
        id: 1,
        name: 'Worship Team',
        minimumSlots: 1,
        teamMembers: [1, 2, 3]
      },
      {
        id: 2,
        name: 'Announcements',
        minimumSlots: 1,
        teamMembers: [4]
      },
      {
        id: 3,
        name: 'Slides',
        minimumSlots: 1,
        teamMembers: [5]
      },
      {
        id: 4,
        name: 'Setup and Teardown',
        minimumSlots: 3,
        teamMembers: [6, 7]
      }
    ]
  }
};

export default function event(state = defaultState, action) {
  return state;
}
