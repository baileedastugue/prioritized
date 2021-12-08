import React, { Fragment } from 'react';
import { Grid, Typography } from '@mui/material';
import ScheduleButton from '../../components/layout/buttons/ScheduleButton';
import AlertDiv from '../../components/AlertDiv';

const Board = () => {
  return (
    <Fragment>
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
            sx={{
              textTransform: 'none',
              padding: '6px 56px',
              '&:hover': {
                fontStyle: 'italic',
                cursor: 'pointer',
              },
            }}
          >
            Your Board
          </Typography>
          <ScheduleButton />
        </Grid>
      </Grid>
      <AlertDiv />
    </Fragment>
  );
};

export default Board;
