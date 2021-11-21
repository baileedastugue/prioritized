import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router';
import PropTypes from 'prop-types';

import Link from '@mui/material/Link';

const Welcome = ({ isAuth }) => {
  if (isAuth) return <Navigate to='/dashboard' />;
  return (
    <div>
      <h1>Welcome</h1>
      <Link href='/userAuth'>Sign Up/Sign In</Link>
    </div>
  );
};

Welcome.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Welcome);
