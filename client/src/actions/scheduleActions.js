import axios from 'axios';
import { setAlert } from './alertActions';

import {
  VIEW_DAY_SCHEDULE_SUCCESS,
  VIEW_DAY_SCHEDULE_FAIL,
  SET_SCHEDULE_DATE_SUCCESS,
  SET_SCHEDULE_DATE_FAIL,
} from './types';

export const setDate = (date) => async (dispatch) => {
  try {
    dispatch({
      type: SET_SCHEDULE_DATE_SUCCESS,
      payload: date,
    });
  } catch (err) {
    dispatch({
      type: SET_SCHEDULE_DATE_FAIL,
    });
  }
};

export const getDaysTasks =
  ({ year, month, day }) =>
  async (dispatch) => {
    try {
      dispatch(setDate({ year, month, day }));
      const res = await axios.get(`/schedule/${year}/${month}/${day}`);
      dispatch({
        type: VIEW_DAY_SCHEDULE_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      const error = err.response.data.msg;
      if (error) {
        dispatch(setAlert(error, 'error'));
      }
      dispatch({
        type: VIEW_DAY_SCHEDULE_FAIL,
      });
    }
  };
