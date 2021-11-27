import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import TextField from '@mui/material/TextField';

import { IconButton, Dialog } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';

import { setDate } from '../../../actions/scheduleActions';

const DateSelector = ({ setDate }) => {
  const [calDate, setCalDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const onIconClick = () => {
    setOpen(true);
  };
  useEffect(() => {
    setDate(calDate);
  }, [setDate, calDate]);

  return (
    <Fragment>
      <IconButton variant='outlined' onClick={onIconClick}>
        <EventIcon />
      </IconButton>

      <Dialog open={open}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            displayStaticWrapperAs='desktop'
            value={calDate}
            variant='static'
            onChange={(calDate) => {
              setCalDate(calDate);
              setOpen(false);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Dialog>
    </Fragment>
  );
};

DateSelector.propTypes = {
  setDate: PropTypes.func.isRequired,
  selectedDate: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  selectedDate: state.schedule.date,
});

export default connect(mapStateToProps, {
  setDate,
})(DateSelector);
