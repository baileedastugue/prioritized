import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

const LifeSegment = ({ lifeSegment }) => {
  const renderSwitch = (lifeSegment) => {
    switch (lifeSegment) {
      case 'Family':
        return <FamilyRestroomIcon />;
      case 'Work':
        return <WorkIcon />;
      case 'Personal':
        return <EmojiPeopleIcon />;
      case 'School':
        return <SchoolIcon />;
      case 'Unassigned':
      default:
        return;
    }
  };

  return <span>{renderSwitch(lifeSegment)}</span>;
};

export default LifeSegment;
