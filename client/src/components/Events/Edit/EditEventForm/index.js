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
import DateTimePicker from '@mui/lab/DateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import SubmitButton from '../../../layout/buttons/SubmitButton';

import { updateEvent, viewEvent } from '../../../../actions/eventActions';

const EditEvent = ({ event, updateEvent, open, handleClose }) => {
  const eventId = event.eventId;

  const [formData, setFormData] = useState({
    title: event.title,
    description: event.description,
    lifeSegment: event.lifeSegment,
    priorityLevel: event.priorityLevel,
    timeStart: event.timeStart,
    timeEnd: event.timeEnd,
  });

  const { title, description, timeStart, timeEnd, lifeSegment, priorityLevel } =
    formData;

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateEvent({
        eventId,
        title,
        description,
        timeStart,
        timeEnd,
        lifeSegment,
        priorityLevel,
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

  const handleStartTimeChange = (newValue) => {
    setFormData({ ...formData, timeStart: newValue });
  };

  const handleEndTimeChange = (newValue) => {
    setFormData({ ...formData, timeEnd: newValue });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit {event.title} Event</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => onSubmit(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                id='title'
                name='title'
                value={title}
                label='Event title'
                type='title'
                variant='standard'
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  multiline
                  maxRows={2}
                  id='description'
                  name='description'
                  value={description}
                  label='Event description'
                  type='description'
                  variant='standard'
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  fullWidth
                  label='Start time'
                  value={timeStart}
                  name='timeStart'
                  onChange={handleStartTimeChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  fullWidth
                  label='End time'
                  value={timeEnd}
                  name='timeEnd'
                  onChange={handleEndTimeChange}
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
                  <MenuItem value={'Family'}>Family</MenuItem>
                  <MenuItem value={'Unassigned'}>Unassigned</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              container
              direction='row'
              justifyContent='flex-end'
              alignItems='center'
            >
              <Grid item>
                <DialogActions>
                  <SubmitButton>Update event</SubmitButton>
                </DialogActions>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};

EditEvent.propTypes = {
  updateEvent: PropTypes.func.isRequired,
  viewEvent: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  events: state.event.events,
});

export default connect(mapStateToProps, { viewEvent, updateEvent })(EditEvent);
