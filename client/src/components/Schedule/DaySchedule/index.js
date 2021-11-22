import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, Typography } from '@mui/material';

import { getDaysTasks } from '../../../actions/scheduleActions';

const DaySchedule = ({ date, getDaysTasks, daysEvents, daysReminders }) => {
  useEffect(() => {
    const dateObj = {
      year: date.getUTCFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
    };

    getDaysTasks(dateObj);
  }, [getDaysTasks, date]);
  return daysEvents.length > 0 ? (
    daysEvents.map((event) => (
      <Card>
        <Typography variant='h6' component='p'>
          {event.title}
        </Typography>
        <Typography variant='p' component='p'>
          {event.description}
        </Typography>
      </Card>
    ))
  ) : (
    <Typography>No events scheduled for today</Typography>
  );
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
