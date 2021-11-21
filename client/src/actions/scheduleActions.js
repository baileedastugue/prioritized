import axios from 'axios';

import { VIEW_DAY_SCHEDULE_SUCCESS, VIEW_DAY_SCHEDULE_FAIL } from './types';

export const getDaysTasks = (year, month, day) => async (dispatch) => {
  console.log(year, month, day);
  try {
    const res = await axios.get(`/schedule/${year}/${month}/${day}`);
    dispatch({
      type: VIEW_DAY_SCHEDULE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: VIEW_DAY_SCHEDULE_FAIL,
      payload: err,
    });
  }
};
