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
  const renderSwitch = (state) => {
    console.log(state);
    switch (state) {
      case 'Completed':
        return 'success';
      case 'In progress':
        return 'warning';
      case 'Not started':
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
          color={renderSwitch(reminder.state)}
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
