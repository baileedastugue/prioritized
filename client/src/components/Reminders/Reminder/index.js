import React, { Fragment, useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteReminder from '../DeleteReminder';
import UpdateState from '../UpdateState';
import EditReminder from '../Edit/EditReminder';
import Priority from '../../Priority';
import LifeSegment from '../../LifeSegment';

const Reminder = ({ reminder, boardView }) => {
  // eslint-disable-next-line no-unused-vars
  const [accordianExpanded, setAccordianExpanded] = useState(false);
  const handleExpansion = (event, expanded) => {
    setAccordianExpanded(expanded);
  };

  return (
    <Accordion onChange={(e, expanded) => handleExpansion(e, expanded)}>
      <AccordionSummary
        expandIcon={<MoreHorizIcon />}
        aria-controls={`${reminder.title}-content`}
        id={`${reminder.title}-header`}
      >
        <Typography>{reminder.title}</Typography>
        {/* {!accordianExpanded && ( */}
        {!boardView && <UpdateState reminder={reminder} clickable={false} />}
        {/* )} */}
        <Priority priority={reminder.priority} />
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          <Grid item xs={11}>
            <Typography variant='body1' component='p'>
              Due on {new Date(reminder.dateDue).toLocaleDateString()}
            </Typography>
            <Typography variant='body1' component='p'>
              {reminder.state === 2 ? (
                <Fragment>
                  Completed on{' '}
                  {new Date(reminder.dateCompleted).toLocaleDateString()}
                </Fragment>
              ) : (
                <Fragment>Task not yet completed</Fragment>
              )}
            </Typography>
            {reminder.description && (
              <Typography variant='body1' component='p'>
                Description: {reminder.description}
              </Typography>
            )}
          </Grid>
          <Grid item xs={1} sx={{ position: 'relative' }}>
            <LifeSegment lifeSegment={reminder.lifeSegment} />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'right' }}>
          <UpdateState reminder={reminder} clickable={true} />
          <EditReminder reminder={reminder} />
          <DeleteReminder reminderId={reminder.reminderId} />
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default Reminder;
