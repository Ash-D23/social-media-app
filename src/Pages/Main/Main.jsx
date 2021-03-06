import { Add, BookmarkOutlined, Home, Notifications, Rocket } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Box, Fab, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { CreatePostModal, Rightbar, Sidebar } from '../../Components';
import { fetchBookmarks } from '../../redux/features/Bookmarks/Bookmarks';
import { fetchPosts } from '../../redux/features/Posts/PostsSlice';
import { BottomNavContainer, FloaterButton } from './styles';

function Main({ setMode, mode }) {

  const [value, setValue] = useState(0)
  
  const [ModalOpen, setModalOpen] = useState(false)

  const { user } = useSelector(state => state)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBookmarks(user.token))
    dispatch(fetchPosts())
  }, [])

  return (
    <Stack direction="row" spacing={{ xs: 0, md: 2}} justifyContent="space-between">
      <Sidebar setMode={setMode} mode={mode} handleModalOpen={() => setModalOpen(true)} />
      <Box flex={4} p={{ xs: 0, md: 2 }} sx={{ minHeight: '90vh'}}>
        <Outlet />
      </Box>
      <Rightbar />
      <BottomNavContainer elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Home" icon={<Home />} />
            <BottomNavigationAction label="Explore" icon={<Rocket />} />
            <BottomNavigationAction label="BookMarks" icon={<BookmarkOutlined />} />
            <BottomNavigationAction label="Notifications" icon={<Notifications />} />
          </BottomNavigation>
      </BottomNavContainer>
      <FloaterButton title={'add post'} onClick={(e) => setModalOpen(true)} >
          <Fab color="primary" aria-label="add">
            <Add fontSize='large' sx={{margin: '10px'}}/>
          </Fab>
      </FloaterButton>
      <CreatePostModal open={ModalOpen} handleClose={()=>setModalOpen(false)} />
    </Stack>
  )
}

export { Main }