import React from 'react';
import AlertDiv from '../../components/AlertDiv';
import { Container } from '@mui/material';

import SignInForm from '../../components/authentication/SignInForm';

const Auth = () => {
  return (
    <Container>
      <h1>Login page</h1>
      <SignInForm />
      <AlertDiv />
    </Container>
  );
};

// Auth.propTypes = {

// }

export default Auth;
