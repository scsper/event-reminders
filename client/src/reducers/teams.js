const defaultState = {
  '1': {
    id: '1',
    name: 'Kids Worship Team',
    memberIds: ['7', '10']
  },
  '2': {
    id: '2',
    name: 'Worship Team - Urim',
    memberIds: ['1', '2', '3']
  },
  '3': {
    id: '3',
    name: 'Worship Team - Thummim',
    memberIds: ['11', '12']
  }
};

export default function teams(state = defaultState, action) {
  return state;
}

export const selectors = {
  getAllTeams: state => state,
  getTeamIds: state => Object.keys(state),
  getTeam: (state, id) => state[id],
  getAllTeamMemberIds: state =>
    Object.keys(state).reduce((teamMemberIds, id) => teamMemberIds.concat(state[id].memberIds), []),
  getTeamMemberIdsByName: (state, name) => {
    const lowerCaseName = name.toLowerCase();
    const teamId = Object.keys(state).find(id => state[id].name.toLowerCase() === lowerCaseName);

    if (!teamId) {
      return undefined;
    }

    return state[teamId].memberIds;
  }
};
