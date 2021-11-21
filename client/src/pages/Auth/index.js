import React from 'react';
import AlertDiv from '../../components/AlertDiv';
import { Container } from '@mui/material';

import SignInForm from '../../components/authentication/SignInForm';
import SignUpForm from '../../components/authentication/SignUpForm';

const Auth = () => {
  return (
    <Container>
      <h1>Login page</h1>
      <h2>Sign In</h2>
      <SignInForm />
      <h2>Sign Up</h2>
      <SignUpForm />
      <AlertDiv />
    </Container>
  );
};

// Auth.propTypes = {

// }

export default Auth;
