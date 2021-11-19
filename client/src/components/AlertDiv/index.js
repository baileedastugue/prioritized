import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Snackbar, Alert } from '@mui/material';

const AlertDiv = ({ alerts }) => {
  const [alertOpen, setAlertOpen] = useState(true);

  const handleClose = (event, reason) => {
    setAlertOpen(false);
  };

  useEffect(() => {
    setAlertOpen(true);
  }, [alerts]);

  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <Snackbar
        key={alert.key}
        open={alertOpen}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleClose}
          severity={alert.alertType}
          className='alert'
        >
          {alert.msg}
        </Alert>
      </Snackbar>
    ))
  );
};

AlertDiv.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(AlertDiv);
