import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardContent, Grid, Button, Typography } from '@mui/material';
import Priority from '../../Priority';
import LifeSegment from '../../LifeSegment';
import EditEvent from '../../Events/Edit/EditEvent';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteEvent } from '../../../actions/eventActions';

const EventCard = ({ event }) => {
  const handleDeleteClick = (event, id) => {
    deleteEvent(id);
  };
  return (
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
            <EditEvent event={event} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

EventCard.propTypes = {
  deleteEvent: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
};

export default EventCard;
