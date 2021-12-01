import React from 'react';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';

const EditReminderButton = ({ onClick, reminder }) => {
  return (
    <Button onClick={onClick} reminder={reminder}>
      <EditIcon />
    </Button>
  );
};

export default EditReminderButton;
