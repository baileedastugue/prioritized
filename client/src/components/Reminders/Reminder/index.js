import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteReminder from '../DeleteReminder';

const Reminder = ({ reminder }) => {
  const renderSwitch = (state) => {
    switch (state) {
      case 0:
        return 'error';
      case 1:
        return 'warning';
      case 2:
        return 'success';
      case 3:
      default:
        return 'disabled';
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
        {reminder.description && (
          <Typography>Description: {reminder.description}</Typography>
        )}
        <DeleteReminder reminderId={reminder.reminderId} />
      </AccordionDetails>
    </Accordion>
  );
};

export default Reminder;
