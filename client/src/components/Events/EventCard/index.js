import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography,
} from '@mui/material';
import Priority from '../../Priority';
import LifeSegment from '../../LifeSegment';
import EditEvent from '../../Events/Edit/EditEvent';
import DeleteEvent from '../DeleteEvent';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const EventCard = ({ event, boardView }) => {
  return (
    <Accordion key={event.eventId}>
      <AccordionSummary
        expandIcon={<MoreHorizIcon />}
        aria-controls={`${event.title}-content`}
        id={`${event.title}-header`}
      >
        <Typography variant={boardView ? 'body1' : 'h5'} component='div'>
          {event.title}
        </Typography>
        <Priority priorityLevel={event.priorityLevel} />
      </AccordionSummary>
      <AccordionDetails item xs={11} sm={10} sx={{ padding: '10px' }}>
        <Grid container>
          <Grid item xs={11}>
            <Typography variant='body1'>{event.description}</Typography>
            <Typography variant='body2'>
              Time Start:{' '}
              {new Date(event.timeStart).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Typography>
            <Typography variant='body2'>
              Time End:{' '}
              {new Date(event.timeEnd).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Typography>
          </Grid>
          <Grid item xs={1} sx={{ position: 'relative' }}>
            <LifeSegment lifeSegment={event.lifeSegment} />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'right' }}>
          <EditEvent event={event} />
          <DeleteEvent event={event} />
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

EventCard.propTypes = {
  events: PropTypes.array.isRequired,
};

export default EventCard;
