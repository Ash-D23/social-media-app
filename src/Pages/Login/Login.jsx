import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import React from 'react'
import { useAuthContext } from '../../Context'
import { AuthContent, FlexCenterBox, FlexSpaceBetweenBox } from '../../Utilities'

function Login() {

  const { signIn } = useAuthContext()

  return (
    <FlexCenterBox sx={{
      backgroundColor: '#e2e8f0',
      minHeight: '80vh'
    }}>
      <AuthContent bgcolor={"background.default"}  p={2}>
        <Typography m={2} variant='h4' align="center">Login</Typography>

        <TextField margin="normal" id="outlined-basic" label="Email" variant="outlined" />
        <TextField margin="normal" id="outlined-basic" type="password" label="Password" variant="outlined" />

        <FlexSpaceBetweenBox m={1}>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />

          <Typography>
            Forgot Password ?
          </Typography>
        </FlexSpaceBetweenBox>

        <Button variant="contained" sx={{ marginTop: '1rem'}}>Login</Button>
        <Button onClick={() => signIn({ username: 'adarshbalika', password: 'adarshBalika123'})} variant="contained" sx={{ marginTop: '1rem'}}>Login with Test Credentials</Button>

        <Typography m={2} variant='p' align="center">Create New Account</Typography>
      </AuthContent>
    </FlexCenterBox>
  )
}

export { Login }