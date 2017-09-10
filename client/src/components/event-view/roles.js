import React from 'react';
import { connect } from 'react-redux';

import Role from './role';
import { selectors } from '../../reducers';

function Roles({ roles }) {
  return (
    <div className="roles">
      <h1>Roles</h1>
      <ul className="role-list">{roles.map(role => <Role key={role.id} role={role} />)}</ul>
    </div>
  );
}

function mapStateToProps(state, { eventId }) {
  return {
    roles: selectors.getRoles(state, eventId)
  };
}

export default connect(mapStateToProps)(Roles);
