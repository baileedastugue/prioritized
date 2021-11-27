import axios from 'axios';
import { setAlert } from './alertActions';

import {
  VIEW_DAY_SCHEDULE_SUCCESS,
  VIEW_DAY_SCHEDULE_FAIL,
  SET_SCHEDULE_DATE_SUCCESS,
  SET_SCHEDULE_DATE_FAIL,
} from './types';

export const setDate = (date) => async (dispatch) => {
  date.setHours(0, 0, 0, 0);

  try {
    dispatch({
      type: SET_SCHEDULE_DATE_SUCCESS,
      payload: date.toUTCString(),
    });
  } catch (err) {
    dispatch({
      type: SET_SCHEDULE_DATE_FAIL,
    });
  }
};

export const getDaysTasks = (date) => async (dispatch) => {
  const newDate = new Date(date);
  const nextDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  nextDate.setHours(24, 0, 0, 0);
  try {
    const res = await axios.get(`/schedule/${newDate}/${nextDate}`);
    dispatch({
      type: VIEW_DAY_SCHEDULE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const error = err.response;
    if (error) {
      dispatch(setAlert(error, 'error'));
    }
    dispatch({
      type: VIEW_DAY_SCHEDULE_FAIL,
    });
  }
};
