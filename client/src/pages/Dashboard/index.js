import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllEvents } from '../../actions/eventActions';
import { getAllReminders } from '../../actions/reminderActions';

const Dashboard = ({
  getAllEvents,
  eventsObj,
  events,
  getAllReminders,
  remindersObj,
  reminders,
}) => {
  useEffect(() => {
    getAllEvents();
  }, [getAllEvents]);

  useEffect(() => {
    getAllReminders();
  }, [getAllReminders]);
  return <div>Private route home</div>;
};

Dashboard.propTypes = {
  getAllEvents: PropTypes.func.isRequired,
  getAllReminders: PropTypes.func.isRequired,
  eventsObj: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  remindersObj: PropTypes.object.isRequired,
  reminders: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  eventsObj: state.event,
  events: state.event.events,
  remindersObj: state.reminder,
  reminders: state.reminder.reminders,
});

export default connect(mapStateToProps, { getAllEvents, getAllReminders })(
  Dashboard
);
