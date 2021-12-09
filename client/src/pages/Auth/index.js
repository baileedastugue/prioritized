import React, { useState } from 'react';
import AlertDiv from '../../components/AlertDiv';
import { Container, Card } from '@mui/material';

import WelcomeHero from '../../components/layout/WelcomeHero';
import SignInForm from '../../components/authentication/SignInForm';
import SignUpForm from '../../components/authentication/SignUpForm';

const Auth = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleClick = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <Container sx={{ margin: '10% auto 15%' }}>
      <WelcomeHero />
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
