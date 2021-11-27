import React from 'react';
import getMonth from '../../../utils/getMonth';

import { Typography } from '@mui/material';

const DateTitle = ({ date }) => {
  const newDate = new Date(date);
  return (
    <Typography variant='h4' component='h2'>
      {getMonth(newDate.getMonth())} {newDate.getDate()},{' '}
      {newDate.getFullYear()}
    </Typography>
  );
};

export default DateTitle;
