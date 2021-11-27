import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';

import PropTypes from 'prop-types';

import { getAllReminders } from '../../actions/reminderActions';
import { setDate } from '../../actions/scheduleActions';

import DaySchedule from '../../components/Schedule/DaySchedule';
import DateTitle from '../../components/Schedule/DateTitle';
import { getDaysTasks } from '../../actions/scheduleActions';

import AddEvent from '../../components/Events/AddEvent';

const Dashboard = ({
  getAllReminders,
  setDate,
  isAuth,
  getDaysTasks,
  daysEvents,
  daysReminders,
}) => {
  useEffect(() => {
    getAllReminders();
  }, [getAllReminders]);

  const [calDate, setCalDate] = useState(new Date());

  useEffect(() => {
    setDate(calDate);
  }, [setDate, calDate]);

  useEffect(() => {
    getDaysTasks(calDate);
  }, [getDaysTasks, calDate]);

  if (!isAuth) return <Navigate to='/' />;

  return (
    <Fragment>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs='desktop'
          value={calDate}
          onChange={(calDate) => {
            setCalDate(calDate);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <DateTitle date={calDate} />
      <AddEvent />
      <DaySchedule daysEvents={daysEvents} />
    </Fragment>
  );
};

Dashboard.propTypes = {
  setDate: PropTypes.func.isRequired,
  dateState: PropTypes.object.isRequired,
  isAuth: PropTypes.bool.isRequired,
  getDaysTasks: PropTypes.func.isRequired,
  daysEvents: PropTypes.array.isRequired,
  daysReminders: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  remindersObj: state.reminder,
  reminders: state.reminder.reminders,
  dateState: state.schedule.date,
  isAuth: state.auth.isAuthenticated,
  daysEvents: state.schedule.events,
  daysReminders: state.schedule.reminders,
});

export default connect(mapStateToProps, {
  getAllReminders,
  setDate,
  getDaysTasks,
})(Dashboard);
