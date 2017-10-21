const defaultState = {
  '1': {
    id: '1',
    name: 'English Service',
    date: new Date('9/30/2017').getTime(),
    roleIds: ['1', '2', '3', '4']
  },
  '2': {
    id: '2',
    name: "Children's Ministry",
    date: new Date('9/30/2017').getTime(),
    roleIds: ['5', '6', '7']
  }
};

export default function events(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const selectors = {
  getAllIds: state => Object.keys(state),
  get: (state, id) => state[id],
  getRoleIds: (state, id) => state[id].roleIds
};
