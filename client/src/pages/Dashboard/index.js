import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import { getAllReminders } from '../../actions/reminderActions';
import { setDate } from '../../actions/scheduleActions';
import { getDaysTasks } from '../../actions/scheduleActions';

import DaySchedule from '../../components/Schedule/DaySchedule';
import DateTitle from '../../components/Schedule/DateTitle';
import DateSelector from '../../components/Schedule/DateSelector';
import AddEvent from '../../components/Events/AddEvent';

const Dashboard = ({
  getAllReminders,
  isAuth,
  getDaysTasks,
  daysEvents,
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
        justifyContent='start'
      >
        <Grid item>
          <DateTitle date={selectedDate} />
        </Grid>
        <Grid item>
          <DateSelector />
        </Grid>
      </Grid>
      <DaySchedule daysEvents={daysEvents} />
      <AddEvent />
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
