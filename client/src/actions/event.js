import { EVENT_SELECTED, ADD_MEMBER_CLICKED } from '../constants';
import { selectors } from '../reducers';

export function selectEvent(eventId) {
  return {
    type: EVENT_SELECTED,
    eventId
  };
}

export function addMember(name, roleId) {
  return function(dispatch, getState) {
    const state = getState();

    const memberIds = selectors.getTeamOrMemberByName(state, name);
    const selectedEventId = selectors.getSelectedEvent(state);

    dispatch({
      type: ADD_MEMBER_CLICKED,
      memberIds,
      selectedEventId,
      roleId
    });
  };
}
