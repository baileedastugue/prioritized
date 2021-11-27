import axios from 'axios';
// import { setAlert } from './alertActions';
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
} from './types';
import { getDaysTasks } from './scheduleActions';

export const getAllEvents = () => async (dispatch) => {
  try {
    const res = await axios.get('/events');
    console.log(res.data);
    dispatch({
      type: GET_EVENTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_EVENTS_FAIL,
      payload: err,
    });
  }
};

export const addNewEvent = (eventInfo) => async (dispatch, getState) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify(eventInfo);
  console.log(body);
  try {
    const res = await axios.post('/events', body, config);
    dispatch({
      type: ADD_EVENT_SUCCESS,
      payload: res.data,
    });
    console.log(res.data);
    dispatch(getDaysTasks(getState().schedule.date));
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_EVENT_FAIL,
      payload: err,
    });
  }
};

export const viewEvent =
  ({ eventId }) =>
  async (dispatch) => {
    try {
      const res = await axios.get(`/events/${eventId}`);
      dispatch({
        type: VIEW_EVENT_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: VIEW_EVENT_FAIL,
        payload: err,
      });
    }
  };

export const updateEvent =
  ({ eventId, title, description, timeStart, timeEnd }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({ title, description, timeStart, timeEnd });
    try {
      const res = await axios.put(`/events/${eventId}`, body, config);
      dispatch({
        type: UPDATE_EVENT_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: UPDATE_EVENT_FAIL,
        payload: err,
      });
    }
  };

export const deleteEvent =
  ({ eventId }) =>
  async (dispatch) => {
    try {
      const res = await axios.delete(`/events/${eventId}`);
      dispatch({
        type: DELETE_EVENT_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: DELETE_EVENT_FAIL,
        payload: err,
      });
    }
  };
