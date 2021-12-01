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
import EditReminder from '../Edit/EditReminder';
import getMonth from '../../../utils/getMonth';

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
        <Typography>Due on {reminder.dateDue}</Typography>
        {reminder.state === 'Completed' && (
          <Typography>
            Completed on {new Date(reminder.dateCompleted)}
          </Typography>
        )}
        {reminder.description && (
          <Typography>Description: {reminder.description}</Typography>
        )}
        <EditReminder reminder={reminder} />
        <DeleteReminder reminderId={reminder.reminderId} />
        <UpdateState reminder={reminder} clickable={true} />
      </AccordionDetails>
    </Accordion>
  );
};

export default Reminder;
