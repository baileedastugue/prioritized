import {
  GET_REMINDERS_SUCCESS,
  GET_REMINDERS_FAIL,
  VIEW_REMINDER_SUCCESS,
  VIEW_REMINDER_FAIL,
  ADD_REMINDER_SUCCESS,
  ADD_REMINDER_FAIL,
  DELETE_REMINDER_SUCCESS,
  DELETE_REMINDER_FAIL,
  UPDATE_REMINDER_SUCCESS,
  UPDATE_REMINDER_FAIL,
} from '../actions/types';

const initialState = {
  isLoading: true,
  reminders: [],
  reminder: [],
  validReminder: null,
  error: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_REMINDERS_SUCCESS:
      return {
        ...state,
        reminders: action.payload,
        validReminder: true,
        isLoading: false,
      };
    case ADD_REMINDER_SUCCESS:
    case UPDATE_REMINDER_SUCCESS:
    case VIEW_REMINDER_SUCCESS:
      return {
        ...state,
        reminder: action.payload,
        validReminder: true,
        isLoading: false,
      };
    case DELETE_REMINDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case UPDATE_REMINDER_FAIL:
    case DELETE_REMINDER_FAIL:
    case ADD_REMINDER_FAIL:
    case VIEW_REMINDER_FAIL:
    case GET_REMINDERS_FAIL: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        validReminder: false,
      };
    }
    default:
      return state;
  }
}
