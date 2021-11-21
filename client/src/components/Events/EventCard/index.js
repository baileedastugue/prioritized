import React from 'react';

import { Card, Typography } from '@mui/material';

const EventCard = ({ title, description, priorityLevel }) => {
  return (
    <Card>
      <Typography variant='h5' component='p'>
        {title}
      </Typography>
      <Typography variant='p' component='p'>
        {description}
      </Typography>
    </Card>
  );
};

export default EventCard;
