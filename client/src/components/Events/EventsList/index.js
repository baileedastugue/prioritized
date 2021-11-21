import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllEvents } from '../../../actions/eventActions';

import EventCard from '../EventCard';

const EventsList = ({ getAllEvents, events }) => {
  useEffect(() => {
    getAllEvents();
  }, [getAllEvents]);

  return events.map((event) => (
    <EventCard title={event.title} description={event.description} />
  ));
};

EventsList.propTypes = {
  getAllEvents: PropTypes.func.isRequired,
  eventsObj: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  eventsObj: state.event,
  events: state.event.events,
});

export default connect(mapStateToProps, { getAllEvents })(EventsList);
