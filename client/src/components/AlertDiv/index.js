import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Snackbar, Alert } from '@mui/material';
import { removeAlert } from '../../actions/alertActions';

const AlertDiv = ({ alerts, removeAlert }) => {
  const [alertOpen, setAlertOpen] = useState(true);

  const handleClose = (event, alertToClose) => {
    event.preventDefault();
    setAlertOpen(false);
    removeAlert(alertToClose.id);
  };

  useEffect(() => {
    if (alerts.length > 0 && alerts !== null) setAlertOpen(true);
  }, [alerts]);

  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <Snackbar
        key={alert.id}
        open={alertOpen}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={(e) => handleClose(e, alert)}
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
  removeAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps, { removeAlert })(AlertDiv);
