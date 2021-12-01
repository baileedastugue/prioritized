import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from '@mui/material';
import LogOut from '../../authentication/LogOut';

const NavBar = (props) => {
  return (
    <AppBar position='static' color='primary'>
      <Toolbar>
        <Typography variant='h4' component='div' sx={{ flexGrow: 1 }}>
          Prioritized
        </Typography>
        {props.isAuth && <LogOut />}
      </Toolbar>
    </AppBar>
  );
};

NavBar.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(NavBar);
