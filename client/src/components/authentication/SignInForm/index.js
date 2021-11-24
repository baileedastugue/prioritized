import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, TextField } from '@mui/material';

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
          <SubmitButton>Login</SubmitButton>
        </Grid>
      </Grid>
    </form>
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
