import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const AddEventButton = ({ onClick }) => {
  return (
    <Fab
      color='primary'
      aria-label='add event'
      onClick={onClick}
      sx={{
        position: 'fixed',
        right: '15px',
        bottom: '20px',
      }}
    >
      <AddIcon />
    </Fab>
  );
};

export default AddEventButton;
