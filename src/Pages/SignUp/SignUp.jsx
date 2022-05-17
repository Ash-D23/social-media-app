import React, { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { AuthContent, FlexCenterBox, LinkStyle } from '../../Utilities'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../Context'

function SignUp() {

  const { signUp } = useAuthContext()

  const [FullName, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [ErrorValues, setErrorValues] = useState({})

  const validateSubmit = () => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(FullName.length === 0){
      errors.FullName = "Full Name Required"
    }

    if(email.length === 0){
      errors.email = "Email Required"
    }else if(!regex.test(email)) {
      errors.email = "This is not a valid email format!";
    }

    if(password.length === 0){
      errors.password = "Password Required"
    }else if(password.length < 4){
      errors.password = "Password should be atleast 4 characters long"
    }

    if(confirmPassword!==password){
      errors.confirmPassword = "Password doesn't match"
    }

    return errors
  }

  const signUpHandler = () => {
    const errors = validateSubmit()
    if(Object.keys(errors).length === 0){
      signUp({ FullName, email, password})
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setFullname('')
      setErrorValues('')
    }else{
      setErrorValues(errors)
    }
  }

  return (
    <FlexCenterBox bgcolor={"secondary.ascent"} sx={{
      minHeight: '100vh'
    }}>
      <AuthContent bgcolor={"background.default"}  p={2}>
        <Typography m={2} variant='h4' align="center">Sign Up</Typography>

        <TextField 
          margin="normal" 
          label="Full Name" 
          variant="outlined" 
          value={FullName}
          onChange={(e)=>setFullname(e.target.value)}
          error={ErrorValues.FullName ? true : false}
          helperText={ErrorValues?.FullName} />
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
          helperText={ErrorValues?.password} />
        <TextField 
          margin="normal" 
          type="password" 
          label="Confirm Password" 
          variant="outlined"
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
          error={ErrorValues.confirmPassword ? true : false}
          helperText={ErrorValues?.confirmPassword} />

        <Button onClick={signUpHandler} variant="contained" sx={{ marginTop: '1rem'}}>Sign Up</Button>

        <Typography m={2} variant='p' align="center"><Link style={LinkStyle} to="/login">Already have an Account?</Link></Typography>
      </AuthContent>
    </FlexCenterBox>
  )
}

export { SignUp }