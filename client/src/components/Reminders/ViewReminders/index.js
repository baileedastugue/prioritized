import React, { Fragment, useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Backdrop, Button, Divider, Popover, Typography } from '@mui/material';

import Reminder from '../Reminder';

const ViewReminders = ({ dueToday, inProgress }) => {
  console.log(inProgress);
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
      <Button
        aria-describedby={id}
        onClick={handleClick}
        sx={{
          display: 'inline-block',
          position: 'absolute',
          right: 0,
          top: '50%',
          lineHeight: 1,
          transform: 'translateY(-50%)',
        }}
      >
        {dueToday.length === 0 ? (
          <NotificationsIcon />
        ) : (
          <NotificationsActiveIcon />
        )}
      </Button>
      <Backdrop
        open={open}
        onClose={handleClose}
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
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
          <Typography sx={{ p: 2 }}>Today's reminders:</Typography>
          {dueToday.length > 0 ? (
            dueToday.map((rem) => <Reminder reminder={rem} />)
          ) : (
            <Typography sx={{ p: 2 }}>No reminders due today!</Typography>
          )}
          <Divider />
          <Typography sx={{ p: 2 }}>All reminders in progress:</Typography>
          {inProgress.length > 0 ? (
            inProgress.map((rem) => <Reminder reminder={rem} />)
          ) : (
            <Typography sx={{ p: 2 }}>No reminders in progress</Typography>
          )}
        </Popover>
      </Backdrop>
    </Fragment>
  );
};

export default ViewReminders;
