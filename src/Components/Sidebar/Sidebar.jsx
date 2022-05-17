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
  ListItemText,
  Switch,
} from "@mui/material";

function Sidebar({ setMode, mode}) {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Rocket />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BookmarkBorderOutlined />
              </ListItemIcon>
              <ListItemText primary="Bookmarks" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Notifications />
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                { mode === "dark" ?  <ModeNight /> : <LightMode /> }
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")} />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{display: 'flex', justifyContent: 'center', marginTop: '1rem'}} disablePadding>
              <Button variant="contained">Create Post</Button>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export { Sidebar }