import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import ScheduleButton from '../../components/layout/buttons/ScheduleButton';
import AlertDiv from '../../components/AlertDiv';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigate } from 'react-router';
import BoardStatus from '../../components/Board/BoardStatus';

const Kanban = ({
  isAuth,
  daysEvents,
  daysReminders,
  allReminders,
  selectedDate,
}) => {
  if (!isAuth) return <Navigate to='/' />;

  const notStartedReminders = daysReminders.filter(
    (reminder) => reminder.state === 0
  );
  const inProgressReminders = daysReminders.filter(
    (reminder) => reminder.state === 1
  );
  const completeReminders = daysReminders.filter(
    (reminder) => reminder.state === 2
  );
  const backlogReminders = allReminders.filter(
    (reminder) => reminder.state === 3
  );

  const currentTime = new Date().toISOString();

  const notStartedEvents = daysEvents.filter(
    (event) => currentTime < event.timeStart
  );
  const inProgressEvents = daysEvents.filter(
    (event) => currentTime >= event.timeStart && currentTime <= event.timeEnd
  );
  const completedEvents = daysEvents.filter(
    (event) => currentTime > event.timeEnd
  );

  return (
    <Container maxWidth='xl'>
      <Grid
        container
        direction='row'
        alignItems='center'
        justifyContent='center'
        sx={{ position: 'relative' }}
      >
        <Grid item>
          <Typography
            variant='h5'
            component='h2'
            my={2}
            xs={12}
            sx={{
              textTransform: 'none',
              padding: '6px 56px',
              '&:hover': {
                fontStyle: 'italic',
                cursor: 'pointer',
              },
            }}
          >
            Your board on {new Date(selectedDate).toLocaleDateString([], {})}
          </Typography>
          <ScheduleButton />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <BoardStatus
            column={0}
            title='Not started'
            reminders={notStartedReminders}
            events={notStartedEvents}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <BoardStatus
            column={1}
            title='In progress'
            reminders={inProgressReminders}
            events={inProgressEvents}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <BoardStatus
            column={2}
            title='Complete'
            reminders={completeReminders}
            events={completedEvents}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <BoardStatus
            column={3}
            title='Backlog'
            reminders={backlogReminders}
          />
        </Grid>
      </Grid>
      <AlertDiv />
    </Container>
  );
};

Kanban.propTypes = {
  daysEvents: PropTypes.array.isRequired,
  daysReminders: PropTypes.array.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
  daysEvents: state.schedule.events,
  daysReminders: state.schedule.reminders,
  selectedDate: state.schedule.date,
  schedLoading: state.schedule.isLoading,
  allReminders: state.reminder.reminders,
});

export default connect(mapStateToProps)(Kanban);
