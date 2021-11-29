import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const AddEventButton = ({ onClick }) => {
  return (
    <Fab
      color='primary'
      aria-label='add'
      onClick={onClick}
      sx={{
        position: 'fixed',
        right: '30px',
        bottom: '30px',
      }}
    >
      <AddIcon />
    </Fab>
  );
};

export default AddEventButton;
