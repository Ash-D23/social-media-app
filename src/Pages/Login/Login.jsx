import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContent, FlexCenterBox, FlexSpaceBetweenBox, LinkStyle } from '../../Utilities'
import { signIn } from '../../redux/features/User/UserSlice'
import { useSelector, useDispatch } from 'react-redux'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [ ErrorValues, setErrorValues] = useState({})
  const dispatch = useDispatch()

  const validateSubmit = () => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(email.length === 0){
      errors.email = "Email Required"
    }else if(!regex.test(email)) {
      errors.email = "This is not a valid email format!";
    }

    if(password.length === 0){
      errors.password = "Password Required"
    }

    return errors
  }

  const loginhandler = () => {
    const errors = validateSubmit()
    if(Object.keys(errors).length === 0){
      dispatch(signIn({ email, password}))
      setEmail('')
      setPassword('')
      setErrorValues({})
    }else{
      setErrorValues(errors)
    }
    
  }

  const loginwithtesthandler = () => {
    dispatch(signIn({ username: 'adarshbalika', password: 'adarshBalika123'}))
    setEmail('')
    setPassword('')
  }

  return (
    <FlexCenterBox bgcolor={"secondary.ascent"} sx={{
      minHeight: '80vh'
    }}>
      <AuthContent bgcolor={"background.default"}  p={2}>
        <Typography m={2} variant='h4' align="center">Login</Typography>

        <TextField 
          margin="normal"
          label="Email"
          variant="outlined" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          error={ErrorValues.email ? true : false}
          helperText={ErrorValues?.email} />
        <TextField 
          margin="normal"
          type="password" 
          label="Password" 
          variant="outlined" 
          value={password} 
          onChange={(e)=>setPassword(e.target.value)}
          error={ErrorValues.password ? true : false}
          helperText={ErrorValues?.password}  />

        <FlexSpaceBetweenBox m={1}>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />

          <Typography>
            Forgot Password ?
          </Typography>
        </FlexSpaceBetweenBox>

        <Button onClick={loginhandler} variant="contained" sx={{ marginTop: '1rem'}}>Login</Button>
        <Button onClick={loginwithtesthandler} variant="contained" sx={{ marginTop: '1rem'}}>Login with Test Credentials</Button>

        <Typography m={2} variant='p' align="center"><Link style={LinkStyle} to="/signup">Create New Account</Link></Typography>
      </AuthContent>
    </FlexCenterBox>
  )
}

export { Login }