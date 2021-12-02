// import logo from './logo.svg';
// import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/authentication/PrivateRoute';
import { Provider } from 'react-redux';
import Store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/authActions';
import Auth from './pages/Auth';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import NavBar from './components/layout/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import outerTheme from './components/layout/ThemeProvider/index.js';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    Store.dispatch(loadUser());
  });
  return (
    <Provider store={Store}>
      <CssBaseline>
        <ThemeProvider theme={outerTheme}>
          <NavBar />
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Welcome />} />
              <Route exact path='/userAuth' element={<Auth />} />
              <Route
                path='/dashboard'
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </CssBaseline>
    </Provider>
  );
};

export default App;
