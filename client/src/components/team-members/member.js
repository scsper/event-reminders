import React from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import { selectors } from '../../reducers';

function Member({ member, isDisabled }) {
  return <li className={cn({ disabled: isDisabled })}>{member.name}</li>;
}

function mapStateToProps(state, { id }) {
  return {
    member: selectors.getMember(state, id),
    isDisabled: selectors.isMemberOccupied(state, id)
  };
}

export default connect(mapStateToProps)(Member);
