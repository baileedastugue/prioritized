import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import TextField from '@mui/material/TextField';

import { Dialog } from '@mui/material';
import DateTitle from '../DateTitle';

import { setDate } from '../../../../actions/scheduleActions';

const DateSelector = ({ setDate, selectedDate }) => {
  const currentDate =
    Object.keys(selectedDate).length === 0
      ? new Date()
      : new Date(selectedDate);

  const [calDate, setCalDate] = useState(currentDate);
  console.log(calDate);
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setDate(calDate);
  }, [setDate, calDate]);

  return (
    <Fragment>
      <DateTitle onClick={onClick} date={calDate} />
      <Dialog open={open} onClose={handleClose}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            displayStaticWrapperAs='desktop'
            value={calDate}
            variant='static'
            onChange={(calDate) => {
              setCalDate(calDate);
              handleClose();
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
