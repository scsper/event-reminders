import { EVENT_SELECTED } from '../constants';

export default function selectedEvent(state = '', action = {}) {
  switch (action.type) {
    case EVENT_SELECTED:
      return action.eventId;

    default:
      return state;
  }
}

export const selectors = {
  get: state => state
};
