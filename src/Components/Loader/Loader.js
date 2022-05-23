import { CircularProgress } from '@mui/material';
import React from 'react';
import { FlexCenterBox } from '../../Utilities';

function Loader() {
  return (
    <FlexCenterBox p={2}>
        <CircularProgress color="primary" />
    </FlexCenterBox>
  )
}

export { Loader }