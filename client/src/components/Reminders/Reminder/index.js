import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CircleIcon from '@mui/icons-material/Circle';

const Reminder = ({ reminder }) => {
  const renderSwitch = (status) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'in progress':
        return 'warning';
      case 'not started':
      default:
        return 'error';
    }
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls={`${reminder.title}-content`}
        id={`${reminder.title}-header`}
      >
        <Typography>{reminder.title}</Typography>
        <CircleIcon
          color={renderSwitch(reminder.status)}
          sx={{ marginLeft: '5px' }}
        />
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{reminder.description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Reminder;
