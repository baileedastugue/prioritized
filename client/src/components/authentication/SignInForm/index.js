import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Grid, TextField } from '@mui/material';

import { loginUser } from '../../../actions/authActions';

const SignInForm = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (event) => {
    setFormData({ ...setFormData, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    console.log('this happened');
    event.preventDefault();
    try {
      console.log(email, password);
      props.loginUser({ email, password });
    } catch (err) {
      console.error(err);
    }
  };

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
          <Button variant='contained' size='medium' type='submit'>
            Login
          </Button>
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
