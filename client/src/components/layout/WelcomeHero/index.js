import React from 'react';
import { Box, Typography } from '@mui/material';
import SparkleLeft from '../../../img/sparkleLeft.png';
import SparkleRight from '../../../img/sparkleRight.png';
import { makeStyles } from '@mui/styles';
import theme from '../ThemeProvider/index.js';

const useStyles = makeStyles(() => ({
  sprklLeft: {
    position: 'absolute',
    width: '35px',
    left: '-8%',
    top: '-15%',
    zIndex: '-1',
    [theme.breakpoints.up(375)]: {
      left: '-9%',
    },
    [theme.breakpoints.up(1024)]: {
      left: '-13%',
      top: '-20%',
      width: '40px',
    },
  },
  sprklRight: {
    display: 'none',
    [theme.breakpoints.up(375)]: {
      display: 'block',
      position: 'absolute',
      width: '35px',
      right: '-8%',
      bottom: '-15%',
      zIndex: '-1',
    },
    [theme.breakpoints.up(1024)]: {
      bottom: '-15%',
      right: '-12%',
      width: '45px',
    },
  },
  container: {
    maxWidth: '325px',
    margin: '0 auto 15px',
    position: 'relative',
    [theme.breakpoints.up(375)]: {
      margin: '0 auto 30px',
    },
    [theme.breakpoints.up('sm')]: {
      margin: '0 auto 50px',
    },
  },
}));

const WelcomeHero = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <img src={SparkleLeft} alt='' className={classes.sprklLeft} />
      <img src={SparkleRight} alt='' className={classes.sprklRight} />
      <Typography variant='h3' component='p' textAlign='left'>
        From "to-do"
      </Typography>
      <Typography variant='h3' component='p' textAlign='right'>
        to{' '}
        <Box display='inline' sx={{ color: 'secondary.main' }}>
          <em>ta-da</em>
        </Box>
      </Typography>
    </Box>
  );
};

export default WelcomeHero;
