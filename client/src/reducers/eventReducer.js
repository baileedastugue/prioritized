import {
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAIL,
  VIEW_EVENT_SUCCESS,
  VIEW_EVENT_FAIL,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_FAIL,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAIL,
  UPDATE_EVENT_SUCCESS,
  UPDATE_EVENT_FAIL,
} from '../actions/types';

const initialState = {
  isLoading: true,
  events: [],
  event: [],
  validEvent: null,
  error: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        validEvent: true,
        isLoading: false,
      };
    case ADD_EVENT_SUCCESS:
    case UPDATE_EVENT_SUCCESS:
    case VIEW_EVENT_SUCCESS:
      return {
        ...state,
        event: action.payload,
        validEvent: true,
        isLoading: false,
      };
    case DELETE_EVENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case UPDATE_EVENT_FAIL:
    case DELETE_EVENT_FAIL:
    case ADD_EVENT_FAIL:
    case VIEW_EVENT_FAIL:
    case GET_EVENTS_FAIL: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        validEvent: false,
      };
    }
    default:
      return state;
  }
}
