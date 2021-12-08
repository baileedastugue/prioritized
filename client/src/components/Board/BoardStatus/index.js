import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Reminder from '../../Reminders/Reminder';
import theme from '../../layout/ThemeProvider/index';
const BoardStatus = ({ column, reminders, events, title }) => {
  console.log(theme.palette);
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
      my={1}
      sx={{ borderRadius: '4px' }}
    >
      <Typography variant='h5' component='p'>
        {title}
      </Typography>
      {reminders.map((reminder) => (
        <Reminder reminder={reminder} />
      ))}
      {/* {events.map((event) => (
        <li key={event.eventId}>{event.title}</li>
      ))} */}
    </Box>
  );
};

export default BoardStatus;
