import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Reminder = ({ reminder }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls={`${reminder.title}-content`}
        id={`${reminder.title}-header`}
      >
        <Typography>{reminder.title}</Typography>
        {reminder.state}
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{reminder.description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Reminder;
