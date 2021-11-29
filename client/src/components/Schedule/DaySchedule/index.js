import React from 'react';

import { Container, Typography } from '@mui/material';
import EventCard from '../../Events/EventCard';

const DaySchedule = ({ daysEvents }) => {
  return (
    <Container sx={{ marginBottom: '110px' }}>
      {daysEvents.length > 0 ? (
        daysEvents.map((event) => <EventCard event={event} />)
      ) : (
        <Typography>No events scheduled for today</Typography>
      )}
    </Container>
  );
};

export default DaySchedule;
