import { Avatar, Box, Button, Link, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Feed, EditProfileModal } from '../../Components'
import { AvatarStyles, ImgStyles, ProfileContainer } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProfile, fetchUserPosts } from '../../redux/features/Profile/ProfileSlice'
import { useParams } from 'react-router-dom'

function Profile() {
  const [open, setopen] = useState(false)
  const dispatch = useDispatch()

  const { profile, posts } = useSelector(state => state)
  const params = useParams()

  useEffect(()=>{
    dispatch(fetchProfile(params.id))
  }, [])

  const UserDetails = profile?.profile?.user

  const filterPostsByID = (id) => {
      return posts?.posts?.posts?.filter((item) => item.userId === id)
  }

  const UserPosts = filterPostsByID(params.id)

  return (
    <>
      <ProfileContainer>
          <Box sx={{ height: '14rem'}}>
            <Box position="relative">
              <img style={ImgStyles} src={UserDetails?.coverImg || 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80'} alt="cover" />
              <Avatar src={UserDetails?.img || null} sx={AvatarStyles}/>
            </Box>
            <Box m={2} sx={{ display: 'flex', justifyContent: 'flex-end'}}>
              <Button onClick={()=>setopen(true)} variant="outlined">Edit</Button>
            </Box>
          </Box>
          <Box ml={3} pb={2}>
            <Box >
              <Typography variant="h6">{UserDetails?.FullName}</Typography>
              <Typography variant="p">{`@${UserDetails?.username}`}</Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="p">{UserDetails.Bio}</Typography>
            </Box>
            <Box mt={2}>
              <Link href={UserDetails.Url}>{UserDetails.Url}</Link>
            </Box>
            <Stack mt={2} direction="row" spacing={2}>
              <Typography>500 Followers</Typography>
              <Typography>200 Following</Typography>
            </Stack>
          </Box>
      </ProfileContainer>
      <Feed posts={UserPosts} />
      { open ? <EditProfileModal open={open} setopen={setopen} /> : null }
    </>
  )
}

export { Profile }