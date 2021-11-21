import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import LogOut from '../../components/authentication/LogOut';
import { Navigate } from 'react-router';

const Home = () => {
  return (
    <div>
      Private route home
      <LogOut />
    </div>
  );
};

export default Home;
