import React from 'react';
import { Box, Typography } from '@mui/material';
import Reminder from '../../Reminders/Reminder';
import EventCard from '../../Events/EventCard';
import theme from '../../layout/ThemeProvider/index';
const BoardStatus = ({ column, reminders, events, title }) => {
  const renderSwitch = (column) => {
    switch (column) {
      case 0:
        return `${theme.palette.error.main}70`;
      case 1:
        return `${theme.palette.warning.main}70`;
      case 2:
        return `${theme.palette.success.main}70`;
      case 3:
      default:
        return `${theme.palette.grey['A400']}70`;
    }
  };

  return (
    <Box
      backgroundColor={renderSwitch(column)}
      p={1}
      sx={{ borderRadius: '4px' }}
    >
      <Typography variant='h5' component='p'>
        {title}
      </Typography>
      {reminders.map((reminder) => (
        <Reminder reminder={reminder} boardView={true} />
      ))}
      {events &&
        events.map((event) => <EventCard event={event} boardView={true} />)}
    </Box>
  );
};

export default BoardStatus;
