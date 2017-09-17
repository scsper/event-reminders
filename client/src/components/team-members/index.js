import React from 'react';
import { connect } from 'react-redux';
import { selectors } from '../../reducers';
import Team from './team';
import Member from './member';

function TeamMembers({ teamIds, nonTeamMemberIds }) {
  return (
    <div className="team-members">
      <h1>Team Members</h1>
      <ul className="team-members-list">
        {teamIds.map(teamId => <Team key={teamId} id={teamId} />)}
        {nonTeamMemberIds.map(memberId => <Member key={memberId} id={memberId} />)}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    teamIds: selectors.getTeamIds(state),
    nonTeamMemberIds: selectors.getNonTeamMemberIds(state)
  };
}

export default connect(mapStateToProps)(TeamMembers);
