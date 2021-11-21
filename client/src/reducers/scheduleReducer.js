import {
  VIEW_DAY_SCHEDULE_SUCCESS,
  VIEW_DAY_SCHEDULE_FAIL,
} from '../actions/types';

const initialState = {
  isLoading: true,
  reminders: [],
  events: [],
  error: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case VIEW_DAY_SCHEDULE_SUCCESS:
      return {
        ...state,
        reminders: action.payload[0].reminders,
        events: action.payload[0].events,
        isLoading: false,
      };
    case VIEW_DAY_SCHEDULE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
