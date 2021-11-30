import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';

import { getAllReminders } from '../../actions/reminderActions';
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
}) => {
  useEffect(() => {
    getAllReminders();
  }, [getAllReminders]);

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
      >
        <Grid item>
          <DateSelector />
          <ViewReminders dueToday={daysReminders} />
        </Grid>
      </Grid>
      <DaySchedule daysEvents={daysEvents} />
      <AddEvent />
      <AddReminder />
    </Fragment>
  );
};

Dashboard.propTypes = {
  setDate: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  getDaysTasks: PropTypes.func.isRequired,
  daysEvents: PropTypes.array.isRequired,
  daysReminders: PropTypes.array.isRequired,
  selectedDate: PropTypes.object.isRequired,
  schedLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  remindersObj: state.reminder,
  reminders: state.reminder.reminders,
  isAuth: state.auth.isAuthenticated,
  daysEvents: state.schedule.events,
  daysReminders: state.schedule.reminders,
  selectedDate: state.schedule.date,
  schedLoading: state.schedule.isLoading,
});

export default connect(mapStateToProps, {
  getAllReminders,
  setDate,
  getDaysTasks,
})(Dashboard);
