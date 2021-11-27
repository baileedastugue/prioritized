import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  Grid,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';
import DateTimePicker from '@mui/lab/DateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import { addNewEvent } from '../../../actions/eventActions';
import SubmitButton from '../../layout/buttons/SubmitButton';

const AddEvent = ({ addNewEvent }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    lifeSegment: '',
    priorityLevel: '',
    timeStart: new Date(),
    timeEnd: new Date(),
  });

  const { title, description, timeStart, timeEnd, lifeSegment, priorityLevel } =
    formData;

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await addNewEvent({
        title,
        description,
        timeStart,
        timeEnd,
        lifeSegment,
        priorityLevel,
      });
      await setFormData({
        title: '',
        description: '',
        lifeSegment: '',
        priorityLevel: '',
        timeStart: new Date().toUTCString(),
        timeEnd: new Date().toUTCString(),
      });
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
              maxRows={4}
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
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label='Start time'
              value={timeStart}
              name='timeStart'
              onChange={handleStartTimeChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label='End time'
              value={timeEnd}
              name='timeEnd'
              onChange={handleEndTimeChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
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
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id='selectLifeSegmentLabel'>Life Segment</InputLabel>
            <Select
              labelId='selectLifeSegmentLabel'
              id='selectLifeSegment'
              value={lifeSegment}
              name='lifeSegment'
              label='Life Segment'
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value={'personal'}>Personal</MenuItem>
              <MenuItem value={'work'}>Work</MenuItem>
              <MenuItem value={'school'}>School</MenuItem>
              <MenuItem value={'family'}>Family</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <SubmitButton>Create event</SubmitButton>
        </Grid>
      </Grid>
    </form>
  );
};

AddEvent.propTypes = {
  addNewEvent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  events: state.event.events,
});

export default connect(mapStateToProps, { addNewEvent })(AddEvent);
