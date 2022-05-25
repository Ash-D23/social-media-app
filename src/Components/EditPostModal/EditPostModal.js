import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EditPost } from '../../redux/features/Posts/PostsSlice'
import app from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { Avatar, Badge, Box, Button, ButtonGroup, LinearProgress, Stack, TextField, Typography } from '@mui/material';
import { Clear, InsertPhoto, Mood } from '@mui/icons-material';
import { UserBox, SytledModal} from '../CreatePostModal/styles'

function EditPostModal({ open, handleClose, data }) {
  const [text, settext] = useState(data?.content || '')
  const [img, setimg] = useState(data?.imgURL || '')
  const [imageUploadLoading, setimageUploadLoading] = useState(false)

  const dispatch = useDispatch()

  const {user} = useSelector(state => state)

  const Reset = () => {
    settext('')
    setimg('')
  }

  const handlePostSubmit = () => {
    if(!text){
      return
    }
    const newPost = { ...data, content: text, imgURL: img}
    dispatch(EditPost({ id: data._id, postData: newPost, token: user.token}))   
    Reset()
    handleClose()
  }

  const handleupdate = (file, newPost)=>{
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          setimageUploadLoading(true)
        },
        (error) => {
          console.log(error)
          setimageUploadLoading(false)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setimg(downloadURL)
            setimageUploadLoading(false)
          });          
        }
      );
  }

  return (
      <SytledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={500}
          minHeight={325}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Edit post
          </Typography>
          <UserBox>
            <Avatar
              src={user?.user.img}
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              {user?.user.FullName}
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            value={text}
            onChange={(e)=> settext(e.target.value)}
            placeholder="What's on your mind?"
            variant="standard"
          />

          { img ? <Box pt={1}>
          { img ? <Box position="relative" pt={1}>
            <img style={{ width: '200px', height: '100px'}} src={img} alt="edit" />
            <Badge onClick={() => setimg('')} sx={{ position: 'absolute', top: '20px', left: '180px'}} color="secondary" overlap="circular" badgeContent={<Clear sx={{ fontSize: "14px"}} />}>

            </Badge>
        </Box> : null }
                  </Box> : null }

          { imageUploadLoading ? <Box mt={1} mb={1}><LinearProgress /></Box> : null}
          <Stack direction="row" spacing={2} mt={2} mb={3}>
            <label htmlFor="file-input-img-modal">
              <InsertPhoto />
            </label>
            <input onChange={e => handleupdate(e.target.files[0])} id="file-input-img-modal" style={{ display: 'none'}} type="file" accept="image/png, image/jpeg" />
            <Mood />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={handlePostSubmit}>Post</Button>
          </ButtonGroup>
        </Box>
      </SytledModal>
  )
}

export { EditPostModal }