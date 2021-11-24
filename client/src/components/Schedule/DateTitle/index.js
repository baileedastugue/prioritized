import React from 'react';
import getMonth from '../../../utils/getMonth';

import { Typography } from '@mui/material';

const DateTitle = ({ date }) => {
  const dateObj = {
    year: date.getUTCFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };

  return (
    <div>
      <Typography variant='h4' component='h2'>
        {getMonth(dateObj.month - 1)} {dateObj.day} {dateObj.year}
      </Typography>
    </div>
  );
};

export default DateTitle;
