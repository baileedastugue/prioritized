import React, { Fragment, useState } from 'react';
import EditEventForm from '../EditEventForm';
import EditEventButton from '../EditEventButton';

const EditEvent = ({ event }) => {
  const [addEventOpen, setEditEventOpen] = useState(false);

  const onClick = () => {
    setEditEventOpen(true);
  };

  const handleClose = () => {
    setEditEventOpen(false);
  };

  return (
    <Fragment>
      <EditEventForm
        open={addEventOpen}
        event={event}
        handleClose={handleClose}
      />
      <EditEventButton onClick={onClick} event={event} />
    </Fragment>
  );
};

export default EditEvent;
