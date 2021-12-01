import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import SubmitButton from '../../../layout/buttons/SubmitButton';

import {
  updateReminder,
  viewReminder,
} from '../../../../actions/reminderActions';

const EditReminder = ({ reminder, updateReminder, open, handleClose }) => {
  const reminderId = reminder.reminderId;

  const [formData, setFormData] = useState({
    title: reminder.title,
    description: reminder.description,
    lifeSegment: reminder.lifeSegment,
    priorityLevel: reminder.priorityLevel,
    dateDue: reminder.dateDue,
    dateCompleted: reminder.dateCompleted,
    state: reminder.state,
  });

  const {
    title,
    description,
    dateDue,
    dateCompleted,
    state,
    lifeSegment,
    priorityLevel,
  } = formData;

  const onSubmit = async (reminder) => {
    reminder.preventDefault();
    try {
      await updateReminder({
        reminderId,
        title,
        description,
        dateDue,
        dateCompleted,
        state,
        lifeSegment,
        priorityLevel,
      });
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (reminder) => {
    if (reminder.target.name) {
      setFormData({
        ...formData,
        [reminder.target.name]: reminder.target.value,
      });
    }
  };

  const handleDateDueChange = (newValue) => {
    setFormData({ ...formData, dateDue: newValue });
  };

  const handleDateCompletedChange = (newValue) => {
    setFormData({ ...formData, dateCompleted: newValue });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit {reminder.title} Reminder</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => onSubmit(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                id='title'
                name='title'
                value={title}
                label='Reminder title'
                type='title'
                variant='standard'
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  multiline
                  maxRows={4}
                  id='description'
                  name='description'
                  value={description}
                  label='Reminder description'
                  type='description'
                  variant='standard'
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  fullWidth
                  label='Date Due'
                  value={new Date(dateDue)}
                  name='dateDue'
                  onChange={handleDateDueChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  fullWidth
                  label='Date Completed'
                  value={dateCompleted}
                  name='dateCompleted'
                  onChange={handleDateCompletedChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='selectPriorityLevelLabel'>
                  Priority Level
                </InputLabel>
                <Select
                  labelId='selectPriorityLevelLabel'
                  id='selectPriorityLevel'
                  value={priorityLevel}
                  name='priorityLevel'
                  label='Priority Level'
                  onChange={(e) => handleChange(e)}
                >
                  <MenuItem value={0}>No priority</MenuItem>
                  <MenuItem value={1}>Low priority</MenuItem>
                  <MenuItem value={2}>Medium priority</MenuItem>
                  <MenuItem value={3}>High priority</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='selectLifeSegmentLabel'>
                  Life Segment
                </InputLabel>
                <Select
                  labelId='selectLifeSegmentLabel'
                  id='selectLifeSegment'
                  value={lifeSegment}
                  name='lifeSegment'
                  label='Life Segment'
                  onChange={(e) => handleChange(e)}
                >
                  <MenuItem value={'Personal'}>Personal</MenuItem>
                  <MenuItem value={'Work'}>Work</MenuItem>
                  <MenuItem value={'School'}>School</MenuItem>
                  <MenuItem value={'Damily'}>Family</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <DialogActions>
              <SubmitButton>Update reminder</SubmitButton>
            </DialogActions>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};

EditReminder.propTypes = {
  updateReminder: PropTypes.func.isRequired,
  viewReminder: PropTypes.func.isRequired,
  reminders: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  reminders: state.reminder.reminders,
});

export default connect(mapStateToProps, { viewReminder, updateReminder })(
  EditReminder
);
