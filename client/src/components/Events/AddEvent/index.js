import React, { Fragment, useState } from 'react';
import AddEventForm from '../AddEventForm';
import AddEventButton from '../AddEventButton';

const AddEvent = () => {
  const [addEventOpen, setAddEventOpen] = useState(false);

  const onClick = () => {
    setAddEventOpen(true);
  };

  const handleClose = () => {
    console.log('line 13 handle close');
    setAddEventOpen(false);
  };

  return (
    <Fragment>
      <AddEventForm open={addEventOpen} handleClose={handleClose} />
      <AddEventButton onClick={onClick} />
    </Fragment>
  );
};

export default AddEvent;
