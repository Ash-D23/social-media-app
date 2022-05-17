import { BookmarkOutlined, Home, Notifications, Rocket } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Box, Paper, Stack } from '@mui/material';
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { CreatePostModal, Rightbar, Sidebar } from '../../Components';
import { BottomNavContainer } from './styles';

function Main({ setMode, mode}) {

  const [value, setValue] = useState(0)

  return (
    <Stack direction="row" spacing={{ xs: 0, md: 2}} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode} />
        <Box flex={4} p={{ xs: 0, md: 2 }}>
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
        <CreatePostModal />
    </Stack>
  )
}

export { Main }