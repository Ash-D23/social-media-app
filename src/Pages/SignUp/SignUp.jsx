import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { AuthContent, FlexCenterBox } from '../../Utilities'

function SignUp() {
  return (
    <FlexCenterBox bgcolor={"secondary.ascent"} sx={{
      minHeight: '100vh'
    }}>
      <AuthContent bgcolor={"background.default"}  p={2}>
        <Typography m={2} variant='h4' align="center">Sign Up</Typography>

        <TextField margin="normal" label="First Name" variant="outlined" />
        <TextField margin="normal" label="Last Name" variant="outlined" />
        <TextField margin="normal" label="Email" variant="outlined" />
        <TextField margin="normal" type="password" label="Password" variant="outlined" />
        <TextField margin="normal" type="password" label="Confirm Password" variant="outlined" />

        <Button variant="contained" sx={{ marginTop: '1rem'}}>Sign Up</Button>

        <Typography m={2} variant='p' align="center">Already have an Account ?</Typography>
      </AuthContent>
    </FlexCenterBox>
  )
}

export { SignUp }