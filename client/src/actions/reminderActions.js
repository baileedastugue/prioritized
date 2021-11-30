import axios from 'axios';
// import { setAlert } from './alertActions';
import { getDaysTasks } from './scheduleActions';
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
  GET_REMINDERS_STATE_SUCCESS,
  GET_REMINDERS_STATE_FAIL,
  UPDATE_REMINDER_STATE_SUCCESS,
  UPDATE_REMINDER_STATE_FAIL,
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
  ({
    title,
    description,
    dateDue,
    dateCompleted,
    state,
    lifeSegment,
    priorityLevel,
  }) =>
  async (dispatch, getState) => {
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
      lifeSegment,
      priorityLevel,
    });
    try {
      const res = await axios.post('/reminders', body, config);
      dispatch({
        type: ADD_REMINDER_SUCCESS,
        payload: res.data,
      });
      dispatch(getDaysTasks(getState().schedule.date));
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
  ({
    reminderId,
    title,
    description,
    dateDue,
    dateCompleted,
    state,
    lifeSegment,
    priorityLevel,
  }) =>
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
      lifeSegment,
      priorityLevel,
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

export const deleteReminder = (reminderId) => async (dispatch, getState) => {
  try {
    const res = await axios.delete(`/reminders/${reminderId}`);
    dispatch({
      type: DELETE_REMINDER_SUCCESS,
      payload: res.data,
    });
    dispatch(getDaysTasks(getState().schedule.date));
    dispatch(getAllReminders());
  } catch (err) {
    console.log(err);
    dispatch({
      type: DELETE_REMINDER_FAIL,
      payload: err,
    });
  }
};

export const getRemindersState =
  ({ state }) =>
  async (dispatch) => {
    try {
      const res = await axios.get(`/reminders/${state}`);
      dispatch({
        type: GET_REMINDERS_STATE_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_REMINDERS_STATE_FAIL,
        payload: err,
      });
    }
  };

export const updateReminderState =
  (reminderId, state) => async (dispatch, getState) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({
      state,
    });
    try {
      const res = await axios.put(
        `/reminders/state/${reminderId}`,
        body,
        config
      );
      dispatch({
        type: UPDATE_REMINDER_STATE_SUCCESS,
        payload: res.data,
      });
      dispatch(getDaysTasks(getState().schedule.date));
      dispatch(getAllReminders());
    } catch (err) {
      console.log(err.response);
      dispatch({
        type: UPDATE_REMINDER_STATE_FAIL,
        payload: err,
      });
    }
  };
