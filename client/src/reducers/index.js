import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import authReducer from './authReducer';
import eventReducer from './eventReducer';
import priorityReducer from './priorityReducer';
import reminderReducer from './reminderReducer';
import scheduleReducer from './scheduleReducer';

export default combineReducers({
  alert: alertReducer,
  auth: authReducer,
  event: eventReducer,
  priority: priorityReducer,
  reminder: reminderReducer,
  schedule: scheduleReducer,
});
