import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Box,
  Button,
  TextField,
  CardContent,
  CardActions,
  Typography,
} from '@mui/material';

import SubmitButton from '../../layout/buttons/SubmitButton';
import { loginUser } from '../../../actions/authActions';

const SignInForm = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      props.loginUser({ email, password });
    } catch (err) {
      console.error(err);
    }
  };

  if (props.isAuth) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <Box
      component='form'
      onSubmit={(e) => onSubmit(e)}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
        textAlign: 'center',
      }}
    >
      <CardContent>
        <Typography variant='h5' component='h2' sx={{ textAlign: 'left' }}>
          Sign In
        </Typography>
        <TextField
          required
          id='email'
          name='email'
          value={email}
          label='Email'
          type='email'
          variant='standard'
          onChange={(e) => onChange(e)}
        />
        <TextField
          required
          id='password'
          name='password'
          value={password}
          label='Password'
          type='password'
          variant='standard'
          onChange={(e) => onChange(e)}
        />
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button onClick={props.handleClick} sx={{ textTransform: 'none' }}>
          New to the site? Sign up!
        </Button>
        <SubmitButton>Login</SubmitButton>
      </CardActions>
    </Box>
  );
};

SignInForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loginUser })(SignInForm);
