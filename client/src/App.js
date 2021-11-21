// import logo from './logo.svg';
// import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Auth from './pages/Auth';
import Welcome from './pages/Welcome';

import PrivateRoute from './components/authentication/PrivateRoute';

import setAuthToken from './utils/setAuthToken';
import { Provider } from 'react-redux';
import Store from './store';
import { loadUser } from './actions/authActions';
import Home from './pages/Home';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    Store.dispatch(loadUser());
  });
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Welcome />} />
          <Route exact path='/userAuth' element={<Auth />} />
          <Route
            path='/dashboard'
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
