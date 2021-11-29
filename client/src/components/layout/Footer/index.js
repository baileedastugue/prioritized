import React from 'react';
import { AppBar, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position='fixed' color='primary' sx={{ top: 'auto', bottom: 0 }}>
      <Container>
        <Typography variant='h5' component='div'>
          Prioritized
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Footer;
