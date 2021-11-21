import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigate } from 'react-router';
import { logoutUser } from '../../../actions/authActions';
import { IconButton } from '@mui/material/';
import LogoutIcon from '@mui/icons-material/Logout';

const LogOut = (props) => {
  const handleOnClick = (event) => {
    event.preventDefault();
    props.logoutUser();
  };

  if (!props.isAuth) return <Navigate to='/' />;

  return (
    <IconButton variant='outlined' onClick={(e) => handleOnClick(e)}>
      <LogoutIcon />
    </IconButton>
  );
};

LogOut.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logoutUser })(LogOut);
