import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import AlertDiv from '../../components/AlertDiv';

import {
  getAllReminders,
  getRemindersState,
} from '../../actions/reminderActions';
import { setDate } from '../../actions/scheduleActions';
import { getDaysTasks } from '../../actions/scheduleActions';

import DaySchedule from '../../components/Schedule/DaySchedule';
import DateSelector from '../../components/Schedule/Date/DateSelector';
import AddEvent from '../../components/Events/Add/AddEvent';
import AddReminder from '../../components/Reminders/Add/AddReminder';
import ViewReminders from '../../components/Reminders/ViewReminders';

const Dashboard = ({
  getAllReminders,
  isAuth,
  getDaysTasks,
  daysEvents,
  daysReminders,
  selectedDate,
  schedLoading,
  getRemindersState,
  inProgressReminders,
}) => {
  useEffect(() => {
    getAllReminders();
    getRemindersState(1);
  }, [getAllReminders, getRemindersState]);

  useEffect(() => {
    if (!schedLoading) {
      getDaysTasks(selectedDate);
    }
  }, [getDaysTasks, selectedDate, schedLoading]);

  if (!isAuth) return <Navigate to='/' />;

  return (
    <Fragment>
      <Grid
        container
        direction='row'
        alignItems='center'
        justifyContent='center'
        sx={{ position: 'relative' }}
      >
        <Grid item>
          <DateSelector />
          <ViewReminders
            dueToday={daysReminders}
            inProgress={inProgressReminders}
          />
        </Grid>
      </Grid>
      <DaySchedule daysEvents={daysEvents} />
      <AddEvent />
      <AddReminder />
      <AlertDiv />
    </Fragment>
  );
};

Dashboard.propTypes = {
  setDate: PropTypes.func.isRequired,
  getDaysTasks: PropTypes.func.isRequired,
  getRemindersState: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  daysEvents: PropTypes.array.isRequired,
  daysReminders: PropTypes.array.isRequired,
  selectedDate: PropTypes.object.isRequired,
  schedLoading: PropTypes.bool.isRequired,
  inProgressReminders: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
  daysEvents: state.schedule.events,
  daysReminders: state.schedule.reminders,
  inProgressReminders: state.reminder.remindersState,
  selectedDate: state.schedule.date,
  schedLoading: state.schedule.isLoading,
});

export default connect(mapStateToProps, {
  getAllReminders,
  setDate,
  getDaysTasks,
  getRemindersState,
})(Dashboard);
