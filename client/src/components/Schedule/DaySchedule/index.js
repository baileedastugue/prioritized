import React from 'react';

import { Card, Typography } from '@mui/material';

const DaySchedule = ({ daysEvents }) => {
  return daysEvents.length > 0 ? (
    daysEvents.map((event) => (
      <Card>
        <Typography variant='h6' component='p'>
          {event.title}
        </Typography>
        <Typography variant='p' component='p'>
          {event.description}
        </Typography>
        <Typography variant='p' component='p'>
          time start: {new Date(event.timeStart).toLocaleString()}
        </Typography>
        <Typography variant='p' component='p'>
          time end: {new Date(event.timeEnd).toLocaleString()}
        </Typography>
      </Card>
    ))
  ) : (
    <Typography>No events scheduled for today</Typography>
  );
};

export default DaySchedule;
