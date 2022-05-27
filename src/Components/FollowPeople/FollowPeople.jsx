import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FollowUser } from '../../redux/features/User/UserSlice'

function FollowPeople({ userDetails }) {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state)

  const handleFollow = () => {
    dispatch(FollowUser({ _id: userDetails._id, token: user.token}))
  }

  return (
    <Grid mt={0.5} container spacing={2}>
        <Grid item xs={3}>
            <Avatar src={userDetails?.img} />
        </Grid>
        <Grid item xs={6}>
            <Box  sx={{ display: 'flex', flexDirection: 'column'}}>
            <Typography variant="p">{userDetails?.FullName}</Typography>
            <Typography variant="p">{`@${userDetails?.username}`}</Typography>
            </Box>
        </Grid>
        <Grid item xs={3}>
            <Button onClick={handleFollow}>Follow</Button>
        </Grid>
    </Grid>
  )
}

export { FollowPeople }