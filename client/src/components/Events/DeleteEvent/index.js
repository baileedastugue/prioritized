import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteEvent } from '../../../actions/eventActions';
import { Button } from '@mui/material';

const DeleteEvent = ({ event, deleteEvent }) => {
  const handleDeleteClick = (event, id) => {
    deleteEvent(id);
  };
  return (
    <Button onClick={(e) => handleDeleteClick(e, event.eventId)}>
      <DeleteIcon />
    </Button>
  );
};

DeleteEvent.propTypes = {
  deleteEvent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { deleteEvent })(DeleteEvent);
