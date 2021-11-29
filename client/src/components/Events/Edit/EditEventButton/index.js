import React from 'react';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';

const EditEventButton = ({ onClick, event }) => {
  return (
    <Button onClick={onClick} event={event}>
      <EditIcon />
    </Button>
  );
};

export default EditEventButton;
