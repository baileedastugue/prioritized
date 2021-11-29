import React from 'react';
import getMonth from '../../../../utils/getMonth';

import { Typography } from '@mui/material';

const DateTitle = ({ date, onClick }) => {
  const newDate = new Date(date);
  return (
    <Typography variant='h5' onClick={onClick} component='h2' my={2}>
      {getMonth(newDate.getMonth())} {newDate.getDate()},{' '}
      {newDate.getFullYear()}
    </Typography>
  );
};

export default DateTitle;
