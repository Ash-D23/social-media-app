import React from 'react'
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import { AuthContent, FlexCenterBox } from '../../Utilities'

function SignUp() {
  return (
    <FlexCenterBox sx={{
      backgroundColor: '#e2e8f0',
      minHeight: '100vh'
    }}>
      <AuthContent bgcolor={"background.default"}  p={2}>
        <Typography m={2} variant='h4' align="center">Sign Up</Typography>

        <TextField margin="normal" id="outlined-basic" label="First Name" variant="outlined" />
        <TextField margin="normal" id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField margin="normal" id="outlined-basic" label="Email" variant="outlined" />
        <TextField margin="normal" id="outlined-basic" type="password" label="Password" variant="outlined" />
        <TextField margin="normal" id="outlined-basic" type="password" label="Confirm Password" variant="outlined" />

        <Button variant="contained" sx={{ marginTop: '1rem'}}>Sign Up</Button>

        <Typography m={2} variant='p' align="center">Already have an Account ?</Typography>
      </AuthContent>
    </FlexCenterBox>
  )
}

export { SignUp }