import { InsertPhoto, Mood } from '@mui/icons-material';
import { Avatar, Button, ButtonGroup, LinearProgress, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddPost } from '../../redux/features/Posts/PostsSlice';
import { SytledModal, UserBox } from '../../Utilities';
import app from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

function CreatePostModal({ open, handleClose }) {

  const [text, settext] = useState('')
  const [img, setimg] = useState('')
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
    const newPost = { content: text}
    if(img){
      handleupdate(img, newPost)
    }else{
      dispatch(AddPost({ postData: newPost, token: user.token}))
      Reset()
      handleClose()
    }
    
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
          setimageUploadLoading(false)
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setimageUploadLoading(false)
            Reset()
            handleClose()
            newPost.imgURL = downloadURL
            dispatch(AddPost({ postData: newPost, token: user.token}))
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
          height={325}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
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
          <Stack direction="row" sx={{ alignItems: 'center'}} spacing={2} mt={2} mb={3}>
            <label htmlFor="file-input-img-modal">
              <InsertPhoto />
            </label>
            <input onChange={e => setimg(e.target.files[0])} id="file-input-img-modal" style={{ display: 'none'}} type="file" accept="image/png, image/jpeg" />
            { img ? <p>[{img.name}]</p> : null }
            <Mood />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={handlePostSubmit}>Post</Button>
          </ButtonGroup>
          { imageUploadLoading ? <Box mt={1} mb={1}><LinearProgress /></Box> : null}
        </Box>
      </SytledModal>
  )
}

export { CreatePostModal }