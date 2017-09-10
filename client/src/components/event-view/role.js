import React from 'react';
import { connect } from 'react-redux';

import { selectors } from '../../reducers';

function Role({ role, teamMembers }) {
  return (
    <li>
      <h2>{role.name}</h2>
      <ul>{teamMembers.map(teamMember => <li key={teamMember.id}>{teamMember.name}</li>)}</ul>
    </li>
  );
}

function mapStateToProps(state, { role }) {
  return {
    teamMembers: selectors.getTeamMembers(state, role.teamMemberIds)
  };
}

export default connect(mapStateToProps)(Role);
