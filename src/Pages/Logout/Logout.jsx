import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { FlexCenterBox } from '../../Utilities'

function Logout() {
  return (
    <FlexCenterBox sx={{ height: '80vh'}}>
      <Box>
        <Typography variant="h6">
          User has Succesfully Logged Out
        </Typography>
        <FlexCenterBox m={1}>
          <Button variant="contained">
            Go To Home
          </Button>
        </FlexCenterBox>
      </Box>
    </FlexCenterBox>
  )
}

export { Logout }