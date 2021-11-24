import axios from 'axios';
// import { setAlert } from './alertActions';
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
} from './types';

export const getAllReminders = () => async (dispatch) => {
  try {
    const res = await axios.get('/reminders');
    dispatch({
      type: GET_REMINDERS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_REMINDERS_FAIL,
      payload: err,
    });
  }
};

export const addNewReminder =
  ({ title, description, dateDue, dateCompleted, state }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({
      title,
      description,
      dateDue,
      dateCompleted,
      state,
    });
    try {
      const res = await axios.post('/reminders', body, config);
      dispatch({
        type: ADD_REMINDER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: ADD_REMINDER_FAIL,
        payload: err,
      });
    }
  };

export const viewReminder =
  ({ reminderId }) =>
  async (dispatch) => {
    try {
      const res = await axios.get(`/reminders/${reminderId}`);
      dispatch({
        type: VIEW_REMINDER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: VIEW_REMINDER_FAIL,
        payload: err,
      });
    }
  };

export const updateReminder =
  ({ reminderId, title, description, dateDue, dateCompleted, state }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({
      title,
      description,
      dateDue,
      dateCompleted,
      state,
    });
    try {
      const res = await axios.put(`/reminders/${reminderId}`, body, config);
      dispatch({
        type: UPDATE_REMINDER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: UPDATE_REMINDER_FAIL,
        payload: err,
      });
    }
  };

export const deleteReminder =
  ({ reminderId }) =>
  async (dispatch) => {
    try {
      const res = await axios.delete(`/reminders/${reminderId}`);
      dispatch({
        type: DELETE_REMINDER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: DELETE_REMINDER_FAIL,
        payload: err,
      });
    }
  };
