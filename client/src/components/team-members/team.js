import React from 'react';
import { connect } from 'react-redux';
import { selectors } from '../../reducers';
import Member from './member';

function Team({ team }) {
  return (
    <li>
      <h3>{team.name}</h3>
      <ul>{team.memberIds.map(memberId => <Member id={memberId} />)}</ul>
    </li>
  );
}

function mapStateToProps(state, { id }) {
  return {
    team: selectors.getTeam(state, id)
  };
}

export default connect(mapStateToProps)(Team);
