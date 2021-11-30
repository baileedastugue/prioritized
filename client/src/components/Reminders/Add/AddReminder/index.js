import React, { Fragment, useState } from 'react';
import AddReminderForm from '../AddReminderForm';
import AddReminderButton from '../AddReminderButton';

const AddReminder = () => {
  const [addReminderOpen, setAddReminderOpen] = useState(false);

  const onClick = () => {
    setAddReminderOpen(true);
  };

  const handleClose = () => {
    setAddReminderOpen(false);
  };

  return (
    <Fragment>
      <AddReminderForm open={addReminderOpen} handleClose={handleClose} />
      <AddReminderButton onClick={onClick} />
    </Fragment>
  );
};

export default AddReminder;
