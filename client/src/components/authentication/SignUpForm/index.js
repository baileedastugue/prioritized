import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Grid, TextField } from '@mui/material';

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
    <form onSubmit={(e) => onSubmit(e)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12}>
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
        <Grid item xs={12}>
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
        <Grid item xs={12}>
          <Button variant='contained' size='medium' type='submit'>
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </form>
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
