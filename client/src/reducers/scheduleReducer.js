import {
  VIEW_DAY_SCHEDULE_SUCCESS,
  VIEW_DAY_SCHEDULE_FAIL,
  SET_SCHEDULE_DATE_SUCCESS,
  SET_SCHEDULE_DATE_FAIL,
} from '../actions/types';

const initialState = {
  isLoading: true,
  date: {},
  reminders: [],
  events: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SCHEDULE_DATE_SUCCESS: {
      return {
        ...state,
        date: action.payload,
      };
    }
    case VIEW_DAY_SCHEDULE_SUCCESS:
      return {
        ...state,
        reminders: action.payload[0].reminders,
        events: action.payload[0].events,
        isLoading: false,
      };
    case SET_SCHEDULE_DATE_FAIL:
      return {
        ...state,
        date: {},
      };
    case VIEW_DAY_SCHEDULE_FAIL:
      return {
        ...state,
        isLoading: false,
        reminders: [],
        events: [],
      };
    default:
      return state;
  }
}
