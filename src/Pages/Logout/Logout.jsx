import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../redux/features/User/UserSlice'
import { FlexCenterBox, LinkStylePlain } from '../../Utilities'
import { useSelector, useDispatch } from 'react-redux'

function Logout() {

  const { user } = useSelector(state => state.user)

  const dispatch = useDispatch()

  const navigate = useNavigate();
  
  useEffect(()=>{
    if(!user){
      navigate("/")
    }
    dispatch(logout())
  }, [])

  return (
    <FlexCenterBox sx={{ height: '80vh'}}>
      <Box>
        <Typography variant="h6">
          User has Succesfully Logged Out
        </Typography>
        <FlexCenterBox m={1}>
          <Link style={LinkStylePlain} to="/"><Button variant="contained">
            Go To Home
          </Button></Link>
        </FlexCenterBox>
      </Box>
    </FlexCenterBox>
  )
}

export { Logout }