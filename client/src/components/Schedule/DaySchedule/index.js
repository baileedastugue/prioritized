import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getDaysTasks } from '../../../actions/scheduleActions';

const DaySchedule = ({ getDaysTasks, daysEvents, daysReminders }) => {
  useEffect(() => {
    getDaysTasks(2021, 11, 18);
  }, [getDaysTasks]);
  console.log(daysEvents, daysReminders);
  return <div></div>;
};

DaySchedule.propTypes = {
  getDaysTasks: PropTypes.func.isRequired,
  daysEvents: PropTypes.array.isRequired,
  daysReminders: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  daysEvents: state.schedule.events,
  daysReminders: state.schedule.reminders,
});

export default connect(mapStateToProps, { getDaysTasks })(DaySchedule);
