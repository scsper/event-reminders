const defaultState = {
  '1': {
    id: 1,
    name: 'Kids Worship Team',
    teamMembers: ['7', '10']
  },
  '2': {
    id: 2,
    name: 'Worship Team - Urim',
    teamMembers: ['1', '2', '3']
  },
  '3': {
    id: '3',
    name: 'Worship Team - Thummim',
    teamMembers: ['11', '12']
  }
};

export default function teams(state = defaultState, action) {
  return state;
}
