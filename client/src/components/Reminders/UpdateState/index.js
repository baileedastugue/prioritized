import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateReminderState } from '../../../actions/reminderActions';
import CircleIcon from '@mui/icons-material/Circle';

const UpdateState = ({ reminder, updateReminderState, clickable }) => {
  const handleClick = async (event) => {
    const state = reminder.state === 3 ? 0 : reminder.state + 1;
    await updateReminderState(reminder.reminderId, state);
  };

  useEffect(() => {
    renderSwitch(reminder.state);
  }, [reminder.state]);

  const renderSwitch = (state) => {
    switch (state) {
      case 0:
        return 'error';
      case 1:
        return 'warning';
      case 2:
        return 'success';
      case 3:
      default:
        return 'disabled';
    }
  };

  return (
    <CircleIcon
      onClick={clickable && ((e) => handleClick(e))}
      color={renderSwitch(reminder.state)}
      sx={{ marginLeft: '5px' }}
    />
  );
};

UpdateState.propTypes = {
  updateReminderState: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { updateReminderState })(UpdateState);
