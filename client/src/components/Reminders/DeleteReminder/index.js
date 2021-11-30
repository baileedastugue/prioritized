import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteReminder } from '../../../actions/eventActions';
import { Button } from '@mui/material';

const DeleteReminder = ({ event, deleteReminder }) => {
  const handleDeleteClick = (event, id) => {
    deleteReminder(id);
  };
  return (
    <Button onClick={(e) => handleDeleteClick(e, event.eventId)}>
      <DeleteIcon />
    </Button>
  );
};

DeleteReminder.propTypes = {
  deleteReminder: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { deleteReminder })(DeleteReminder);
