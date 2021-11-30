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
      case 3:
        return 'success';
      case 2:
        return 'warning';
      case 1:
        return 'error';
      case 0:
      default:
        return 'primary';
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
        <Typography>
          Due on {new Date(reminder.dateDue).toLocaleDateString()}
        </Typography>
        {reminder.state === 'Completed' && (
          <Typography>
            Completed on {new Date(reminder.dateCompleted).toLocaleDateString()}
          </Typography>
        )}
        <Typography>Description: {reminder.description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Reminder;
