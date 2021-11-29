import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteEvent } from '../../../actions/eventActions';
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import Priority from '../../Priority';
import LifeSegment from '../../LifeSegment';

const DaySchedule = ({ daysEvents, deleteEvent }) => {
  const handleDeleteClick = (event, id) => {
    deleteEvent(id);
  };

  return daysEvents.length > 0 ? (
    daysEvents.map((event) => (
      <Card key={event.eventId} sx={{ margin: '0 0 15px' }}>
        <CardContent>
          <Grid container>
            <Grid item xs={12} sx={{ position: 'relative' }}>
              <Typography variant='h5' component='div'>
                {event.title}
              </Typography>
              <Priority priorityLevel={event.priorityLevel} />
            </Grid>
            <Grid
              item
              xs={1}
              sm={1}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <LifeSegment lifeSegment={event.lifeSegment} />
            </Grid>
            <Grid item xs={11} sm={10} sx={{ padding: '10px' }}>
              <Typography variant='body1'>{event.description}</Typography>
              <Typography variant='body2'>
                Time Start: {new Date(event.timeStart).toLocaleTimeString()}
              </Typography>
              <Typography variant='body2'>
                Time End: {new Date(event.timeEnd).toLocaleTimeString()}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={1} sx={{ textAlign: 'right' }}>
              <Button onClick={(e) => handleDeleteClick(e, event.eventId)}>
                <DeleteIcon />
              </Button>
              <Button>
                <EditIcon />
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    ))
  ) : (
    <Typography>No events scheduled for today</Typography>
  );
};

DaySchedule.propTypes = {
  deleteEvent: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  events: state.event,
});

export default connect(mapStateToProps, { deleteEvent })(DaySchedule);
