import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '0',
    right: '0',
  },
}));

const Priority = ({ priorityLevel, absolute }) => {
  const classes = useStyles();

  const renderSwitch = (priorityLevel) => {
    switch (priorityLevel) {
      case 3:
        return <KeyboardDoubleArrowUpIcon sx={{ height: '100%' }} />;
      case 2:
        return <KeyboardArrowUpIcon sx={{ height: '100%' }} />;
      case 1:
        return <KeyboardArrowDownIcon sx={{ height: '100%' }} />;
      case 0:
      default:
        return <HorizontalRuleIcon sx={{ height: '100%' }} />;
    }
  };

  return (
    <div className={absolute && classes.root}>
      {renderSwitch(priorityLevel)}
    </div>
  );
};

export default Priority;
