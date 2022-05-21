import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Feed, EditProfileModal } from '../../Components'
import { AvatarStyles, ImgStyles, ProfileContainer } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProfile, fetchUserPosts } from '../../redux/features/Profile/ProfileSlice'

function Profile() {
  const [open, setopen] = useState(false)
  const dispatch = useDispatch()

  const {user, profile} = useSelector(state => state)

  console.log(profile)

  useEffect(()=>{
    dispatch(fetchProfile('0af3d380-4d9e-4b80-88af-b0a59483de42', user.token))
    dispatch(fetchUserPosts('0af3d380-4d9e-4b80-88af-b0a59483de42', user.token))
  }, [])

  return (
    <>
      <ProfileContainer>
          <Box sx={{ height: '14rem'}}>
            <Box position="relative">
              <img style={ImgStyles}src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80" alt="cover" />
              <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" sx={AvatarStyles}/>
            </Box>
            <Box m={2} sx={{ display: 'flex', justifyContent: 'flex-end'}}>
              <Button onClick={()=>setopen(true)} variant="outlined">Edit</Button>
            </Box>
          </Box>
          <Box ml={3} pb={2}>
            <Box >
              <Typography variant="h6">Full Name</Typography>
              <Typography variant="p">@UserName</Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="p">Bio</Typography>
            </Box>
            <Stack mt={2} direction="row" spacing={2}>
              <Typography>500 Followers</Typography>
              <Typography>200 Following</Typography>
            </Stack>
          </Box>
      </ProfileContainer>
      <Feed />
      <EditProfileModal open={open} setopen={setopen} />
    </>
  )
}

export { Profile }