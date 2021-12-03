import React from 'react';
import getMonth from '../../../../utils/getMonth';
import { Typography, Button } from '@mui/material';

const DateTitle = ({ date, onClick }) => {
  const newDate = new Date(date);
  return (
    <Button
      sx={{
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0) !important',
        },
      }}
    >
      <Typography
        variant='h5'
        onClick={onClick}
        component='h2'
        my={2}
        sx={{
          textTransform: 'none',
          padding: '0 48px',
          '&:hover': {
            fontStyle: 'italic',
            cursor: 'pointer',
          },
        }}
      >
        {getMonth(newDate.getMonth())} {newDate.getDate()},{' '}
        {newDate.getFullYear()}
      </Typography>
    </Button>
  );
};

export default DateTitle;
