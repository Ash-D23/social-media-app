import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../Context'
import { FlexCenterBox } from '../../Utilities'

function Logout() {
  const {user, signOut} = useAuthContext()

  const navigate = useNavigate();

  useEffect(()=>{
    if(!user){
      navigate("/")
    }
    signOut()
  }, [])

  return (
    <FlexCenterBox sx={{ height: '80vh'}}>
      <Box>
        <Typography variant="h6">
          User has Succesfully Logged Out
        </Typography>
        <FlexCenterBox m={1}>
          <Link to="/"><Button variant="contained">
            Go To Home
          </Button></Link>
        </FlexCenterBox>
      </Box>
    </FlexCenterBox>
  )
}

export { Logout }