import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const AddButton = (props) => {
  return (
    <Fab color='primary' aria-label='add'>
      <AddIcon onClick={props.onClick} />
    </Fab>
  );
};

export default AddButton;
