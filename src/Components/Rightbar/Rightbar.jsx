import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { FollowPeople } from "../FollowPeople/FollowPeople";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", lg: "block" } }}>
      <Box position="fixed" width={350}>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5} sx={{ overflow: 'hidden'}}>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1525097487452-6278ff080c31"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1530731141654-5993c3016c77"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography mt={2} variant="h6" fontWeight={100}>
          People you may Know
        </Typography>
        <Box>
          <FollowPeople />
          <FollowPeople />
          <FollowPeople />
          <FollowPeople />
        </Box>
      </Box>
    </Box>
  );
};

export { Rightbar }