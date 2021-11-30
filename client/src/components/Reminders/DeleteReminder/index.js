import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteReminder } from '../../../actions/reminderActions';
import { Button } from '@mui/material';

const DeleteReminder = ({ reminderId, deleteReminder }) => {
  const handleDeleteClick = (event, id) => {
    deleteReminder(id);
  };
  return (
    <Button onClick={(e) => handleDeleteClick(e, reminderId)}>
      <DeleteIcon />
    </Button>
  );
};

DeleteReminder.propTypes = {
  deleteReminder: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { deleteReminder })(DeleteReminder);
