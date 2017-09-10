import { EVENT_SELECTED } from '../constants';

export function selectEvent(eventId) {
  return {
    type: EVENT_SELECTED,
    eventId
  };
}
