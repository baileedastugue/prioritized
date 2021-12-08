import React, { useState } from 'react';
import AlertDiv from '../../components/AlertDiv';
import { Container, Card } from '@mui/material';

import SignInForm from '../../components/authentication/SignInForm';
import SignUpForm from '../../components/authentication/SignUpForm';

const Auth = () => {
  const [showSignUp, setShowSignUp] = useState(true);

  const handleClick = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <Container sx={{ marginTop: '10%' }}>
      <Card sx={{ maxWidth: '600px', margin: '0 auto' }}>
        {showSignUp ? (
          <SignUpForm handleClick={handleClick} />
        ) : (
          <SignInForm handleClick={handleClick} />
        )}
      </Card>
      <AlertDiv />
    </Container>
  );
};

export default Auth;
