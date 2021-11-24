import React from 'react';
import { Button } from '@mui/material';

const SubmitButton = (props, { rest }) => {
  return (
    <div>
      <Button {...rest} variant='contained' size='medium' type='submit'>
        {props.children}
      </Button>
    </div>
  );
};

export default SubmitButton;
