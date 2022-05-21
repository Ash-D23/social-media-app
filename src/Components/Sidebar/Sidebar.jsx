import React from 'react';
import {
  BookmarkBorderOutlined,
  Home,
  LightMode,
  ModeNight,
  Notifications,
  Person,
  Rocket,
} from "@mui/icons-material";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Switch,
} from "@mui/material";
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';

function Sidebar({ setMode, mode, handleModalOpen }) {
  
  const { user } = useSelector(state => state.user)

  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <SidebarItem  Icon={<Home />} path={"/main"} text={"Home"} />
          <SidebarItem  Icon={<Rocket />} path={"/main/explore"} text={"Explore"} />
          <SidebarItem  Icon={<BookmarkBorderOutlined />} path={"/main/bookmarks"} text={"Bookmarks"} />
          <SidebarItem  Icon={<Notifications />} path={"/main/notifications"} text={"Notifications"} />
          <SidebarItem  Icon={<Person />} path={"/main/profile/"+user._id} text={"Profile"} />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                { mode === "dark" ?  <ModeNight /> : <LightMode /> }
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")} />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{display: 'flex', justifyContent: 'center', marginTop: '1rem'}} disablePadding>
              <Button onClick={handleModalOpen} variant="contained">Create Post</Button>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export { Sidebar }