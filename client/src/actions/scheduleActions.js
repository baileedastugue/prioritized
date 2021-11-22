import axios from 'axios';
import { setAlert } from './alertActions';

import { VIEW_DAY_SCHEDULE_SUCCESS, VIEW_DAY_SCHEDULE_FAIL } from './types';

export const getDaysTasks =
  ({ year, month, day }) =>
  async (dispatch) => {
    console.log(year, month, day);
    try {
      const res = await axios.get(`/schedule/${year}/${month}/${day}`);
      dispatch({
        type: VIEW_DAY_SCHEDULE_SUCCESS,
        payload: res.data,
      });
      console.log(res.data);
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(err.response);
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
      }
      dispatch({
        type: VIEW_DAY_SCHEDULE_FAIL,
      });
    }
  };
