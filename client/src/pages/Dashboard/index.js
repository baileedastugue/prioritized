import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getAllReminders } from '../../actions/reminderActions';

import EventsList from '../../components/Events/EventsList';
import DaySchedule from '../../components/Schedule/DaySchedule';

const Dashboard = ({ getAllReminders, remindersObj, reminders }) => {
  useEffect(() => {
    getAllReminders();
  }, [getAllReminders]);
  return (
    <Fragment>
      <EventsList />
      <DaySchedule />
    </Fragment>
  );
};

Dashboard.propTypes = {
  getAllReminders: PropTypes.func.isRequired,
  remindersObj: PropTypes.object.isRequired,
  reminders: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  remindersObj: state.reminder,
  reminders: state.reminder.reminders,
});

export default connect(mapStateToProps, { getAllReminders })(Dashboard);
