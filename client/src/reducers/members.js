const defaultState = {
  '1': {
    id: '1',
    name: 'Jesse Du',
    email: 'jd@gmail.com',
    phone: '493-239-1234'
  },
  '2': {
    id: '2',
    name: 'Scott Sperling',
    email: 'ss@gmail.com',
    phone: '345-251-3412'
  },
  '3': {
    id: '3',
    name: 'Angie Paek',
    email: 'ap@gmail.com',
    phone: '358-532-3346'
  },
  '4': {
    id: '4',
    name: 'Nikki Louie',
    email: 'nl@gmail.com',
    phone: '584-543-5276'
  },
  '5': {
    id: '5',
    name: 'Belinda Kuo',
    email: 'bk@gmail.com',
    phone: '498-523-6987'
  },
  '6': {
    id: '6',
    name: 'Stacie Lum',
    email: 'sl@gmail.com',
    phone: '574-385-3983'
  },
  '7': {
    id: '7',
    name: 'Scott Jung',
    email: 'sj@gmail.com',
    phone: '453-532-5156'
  },
  '8': {
    id: '8',
    name: 'Chantillia Ong',
    email: 'co@gmail.com',
    phone: '359-191-2415'
  },
  '9': {
    id: '9',
    name: 'Ben Dang',
    email: 'bd@gmail.com',
    phone: '324-324-2345'
  },
  '10': {
    id: '10',
    name: 'Kiyoshi Lee',
    email: 'kl@gmail.com',
    phone: '235-427-5473'
  },
  '11': {
    id: '11',
    name: 'Phylicia Yap',
    email: 'py@gmail.com',
    phone: '124-251-3427'
  },
  '12': {
    id: '12',
    name: 'Sam Choi',
    email: 'sc@gmail.com',
    phone: '432-565-7689'
  }
};

export default function members(state = defaultState, action) {
  return state;
}

export const selectors = {
  getMembers: (state, teamMemberIds) => teamMemberIds.map(id => state[id]),
  getAllMembers: state => state,
  getAllMemberIds: state => Object.keys(state),
  getMemberByName: (state, name) => {
    const lowerCaseName = name.toLowerCase();

    return Object.keys(state).find(memberId => state[memberId].name.toLowerCase() === lowerCaseName);
  },
  getMember: (state, id) => state[id]
};
