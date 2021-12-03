import React from 'react';
import Fab from '@mui/material/Fab';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';

const AddReminderButton = ({ onClick }) => {
  return (
    <Fab
      color='primary'
      aria-label='Add reminder'
      onClick={onClick}
      sx={{
        position: 'fixed',
        right: '15px',
        bottom: '100px',
      }}
    >
      <NotificationAddIcon />
    </Fab>
  );
};

export default AddReminderButton;
