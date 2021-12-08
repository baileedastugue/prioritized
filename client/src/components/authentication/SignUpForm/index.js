import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Box,
  Button,
  CardContent,
  CardActions,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

import SubmitButton from '../../layout/buttons/SubmitButton';
import { registerUser } from '../../../actions/authActions';

const SignUpForm = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const { email, password, firstName, lastName } = formData;

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      props.registerUser({ email, password, firstName, lastName });
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
        '& .MuiTextField-root': { m: 1, width: '30ch' },
        textAlign: 'center',
      }}
    >
      <CardContent>
        <Typography variant='h5' component='h2' sx={{ textAlign: 'left' }}>
          Sign Up
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id='email'
              name='email'
              value={email}
              label='Email'
              type='email'
              variant='standard'
              onChange={(e) => onChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id='password'
              name='password'
              value={password}
              label='Password'
              type='password'
              variant='standard'
              onChange={(e) => onChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='firstName'
              name='firstName'
              value={firstName}
              label='First Name'
              type='firstName'
              variant='standard'
              onChange={(e) => onChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='lastName'
              name='lastName'
              value={lastName}
              label='Last Name'
              type='lastName'
              variant='standard'
              onChange={(e) => onChange(e)}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button onClick={props.handleClick} sx={{ textTransform: 'none' }}>
          Have an account? Sign in!
        </Button>
        <SubmitButton>Sign Up</SubmitButton>
      </CardActions>
    </Box>
  );
};

SignUpForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { registerUser })(SignUpForm);
