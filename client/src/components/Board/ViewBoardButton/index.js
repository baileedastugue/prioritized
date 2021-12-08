import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { Navigate, Link } from 'react-router-dom';
import ViewKanbanOutlinedIcon from '@mui/icons-material/ViewKanbanOutlined';

const ViewBoardButton = ({ isAuth }) => {
  if (!isAuth) return <Navigate to='/' />;

  return (
    <Button
      component={Link}
      to='/board'
      sx={{
        display: 'inline-block',
        position: 'absolute',
        left: 0,
        top: '50%',
        lineHeight: 1,
        transform: 'translateY(-50%)',
      }}
    >
      <ViewKanbanOutlinedIcon />
    </Button>
  );
};

ViewBoardButton.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(ViewBoardButton);
