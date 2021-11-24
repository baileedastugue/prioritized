import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getAllReminders } from '../../actions/reminderActions';
import { setDate } from '../../actions/scheduleActions';

// import EventsList from '../../components/Events/EventsList';
// import DateSelector from '../../components/Schedule/DateSelector';
import DaySchedule from '../../components/Schedule/DaySchedule';
import DateTitle from '../../components/Schedule/DateTitle';
import Calendar from 'react-calendar';
// import AddButton from '../../components/layout/buttons/AddButton';
import AddEvent from '../../components/Events/AddEvent';

const Dashboard = ({
  getAllReminders,
  remindersObj,
  reminders,
  dateState,
  setDate,
}) => {
  useEffect(() => {
    getAllReminders();
  }, [getAllReminders]);

  const [calDate, setCalDate] = useState(new Date());

  useEffect(
    (calDate) => {
      setDate(calDate);
    },
    [setDate, calDate]
  );

  return (
    <Fragment>
      <Calendar onChange={setCalDate} value={calDate} />
      <DateTitle date={calDate} />
      {/* <DateSelector onClick={onClick}/> */}
      <AddEvent />
      <DaySchedule date={calDate} />
    </Fragment>
  );
};

Dashboard.propTypes = {
  getAllReminders: PropTypes.func.isRequired,
  setDate: PropTypes.func.isRequired,
  remindersObj: PropTypes.object.isRequired,
  reminders: PropTypes.array.isRequired,
  dateState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  remindersObj: state.reminder,
  reminders: state.reminder.reminders,
  dateState: state.schedule.date,
});

export default connect(mapStateToProps, { getAllReminders, setDate })(
  Dashboard
);
