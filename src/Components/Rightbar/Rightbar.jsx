import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FollowPeople } from "../FollowPeople/FollowPeople";

const Rightbar = () => {

  const [Users, setUsers] = useState([])
  const { user } = useSelector(state => state.user)

  useEffect(()=>{
    (async function(){
      const res = await axios.get('/api/users')
      setUsers(res.data.users)
    })()
  }, [])

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
          { Users?.map((userDetails) => {
            if(userDetails._id === user._id){
              return null
            }
            return <FollowPeople user={userDetails} />
          })}
        </Box>
      </Box>
    </Box>
  );
};

export { Rightbar }