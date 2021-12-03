import React from 'react';
import getMonth from '../../../../utils/getMonth';
import { makeStyles } from '@mui/styles';
import { Typography, Button } from '@mui/material';

const useStyles = makeStyles({
  date: {
    textTransform: 'none',
    padding: '0 48px',
    '&:hover': {
      fontStyle: 'italic',
      cursor: 'pointer',
    },
  },
  button: {
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0) !important',
    },
  },
});

const DateTitle = ({ date, onClick }) => {
  const newDate = new Date(date);
  const classes = useStyles();
  return (
    <Button className={classes.button}>
      <Typography
        variant='h5'
        onClick={onClick}
        component='h2'
        className={classes.date}
        my={2}
        sx={{ display: 'block' }}
      >
        {getMonth(newDate.getMonth())} {newDate.getDate()},{' '}
        {newDate.getFullYear()}
      </Typography>
    </Button>
  );
};

export default DateTitle;
