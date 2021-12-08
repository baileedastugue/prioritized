import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { Navigate, Link } from 'react-router-dom';
import TodayIcon from '@mui/icons-material/Today';

const ScheduleButton = ({ isAuth }) => {
  if (!isAuth) return <Navigate to='/' />;

  return (
    <Button
      component={Link}
      to='/dashboard'
      sx={{
        display: 'inline-block',
        position: 'absolute',
        left: 0,
        top: '50%',
        lineHeight: 1,
        transform: 'translateY(-50%)',
      }}
    >
      <TodayIcon />
    </Button>
  );
};

ScheduleButton.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(ScheduleButton);
