import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteReminder from '../DeleteReminder';
import UpdateState from '../UpdateState';

const Reminder = ({ reminder }) => {
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
        {!accordianExpanded && (
          <UpdateState reminder={reminder} clickable={false} />
        )}
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Due on {new Date(reminder.dateDue).toLocaleDateString()}
        </Typography>
        {reminder.state === 'Completed' && (
          <Typography>
            Completed on {new Date(reminder.dateCompleted).toLocaleDateString()}
          </Typography>
        )}
        {reminder.description && (
          <Typography>Description: {reminder.description}</Typography>
        )}
        <DeleteReminder reminderId={reminder.reminderId} />
        <UpdateState reminder={reminder} clickable={true} />
      </AccordionDetails>
    </Accordion>
  );
};

export default Reminder;
