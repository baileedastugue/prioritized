import React, { Fragment, useState } from 'react';
import EditReminderForm from '../EditReminderForm';
import EditReminderButton from '../EditReminderButton';

const EditReminder = ({ reminder }) => {
  const [addReminderOpen, setEditReminderOpen] = useState(false);

  const onClick = () => {
    setEditReminderOpen(true);
  };

  const handleClose = () => {
    setEditReminderOpen(false);
  };

  return (
    <Fragment>
      <EditReminderForm
        open={addReminderOpen}
        reminder={reminder}
        handleClose={handleClose}
      />
      <EditReminderButton onClick={onClick} reminder={reminder} />
    </Fragment>
  );
};

export default EditReminder;
