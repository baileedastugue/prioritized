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

import { addNewReminder } from '../../../../actions/reminderActions';
import SubmitButton from '../../../layout/buttons/SubmitButton';

const AddReminderForm = ({ addNewReminder, open, handleClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    lifeSegment: 'Unassigned',
    priorityLevel: 0,
    dateDue: new Date(),
    state: 1,
  });

  const { title, description, dateDue, state, lifeSegment, priorityLevel } =
    formData;

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await addNewReminder({
        title,
        description,
        dateDue,
        lifeSegment,
        state,
        priorityLevel,
      });
      console.log(formData);
      await setFormData({
        title: '',
        description: '',
        lifeSegment: '',
        priorityLevel: 0,
        dateDue: new Date().toUTCString(),
        state: 1,
      });
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    if (event.target.name) {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };

  const handleDateDueChange = (newValue) => {
    setFormData({ ...formData, timeStart: newValue });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Reminder</DialogTitle>
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
                  value={dateDue}
                  name='timeStart'
                  onChange={handleDateDueChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='selectStateLabel'>State</InputLabel>
                <Select
                  labelId='selectStateLabel'
                  id='selectState'
                  value={state}
                  name='state'
                  label='Current State'
                  onChange={(e) => handleChange(e)}
                >
                  <MenuItem value={1}>Not started</MenuItem>
                  <MenuItem value={2}>In progress</MenuItem>
                  <MenuItem value={3}>Complete</MenuItem>
                </Select>
              </FormControl>
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
                  <MenuItem value={'Family'}>Family</MenuItem>
                  <MenuItem value={'Unassigned'}>Unassigned</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <DialogActions>
              <SubmitButton>Create reminder</SubmitButton>
            </DialogActions>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};

AddReminderForm.propTypes = {
  addNewReminder: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  events: state.event.events,
});

export default connect(mapStateToProps, { addNewReminder })(AddReminderForm);
