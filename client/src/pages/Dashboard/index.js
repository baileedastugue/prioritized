import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getAllReminders } from '../../actions/reminderActions';

// import EventsList from '../../components/Events/EventsList';
import DateSelector from '../../components/Schedule/DateSelector';
import DaySchedule from '../../components/Schedule/DaySchedule';
import DateTitle from '../../components/Schedule/DateTitle';
import Calendar from 'react-calendar';

const Dashboard = ({ getAllReminders, remindersObj, reminders }) => {
  useEffect(() => {
    getAllReminders();
  }, [getAllReminders]);

  const [calDate, setCalDate] = useState(new Date());

  return (
    <Fragment>
      <Calendar onChange={setCalDate} value={calDate} />
      <DateTitle date={calDate} />
      <DateSelector />
      <DaySchedule date={calDate} />
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
