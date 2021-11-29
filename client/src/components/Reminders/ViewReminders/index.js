import React, { Fragment, useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Button, Popover, Typography } from '@mui/material';

import Reminder from '../Reminder';

const ViewReminders = ({ dueToday }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Fragment>
      <Button aria-describedby={id} onClick={handleClick}>
        {dueToday.length === 0 ? (
          <NotificationsIcon />
        ) : (
          <NotificationsActiveIcon />
        )}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 2 }}>Today's reminders</Typography>
        {dueToday.map((rem) => (
          <Reminder reminder={rem} />
        ))}
      </Popover>
    </Fragment>
  );
};

export default ViewReminders;
