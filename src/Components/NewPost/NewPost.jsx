import { Clear, InsertPhoto, Mood } from '@mui/icons-material'
import { Badge, Box, Button, LinearProgress, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { FlexSpaceBetweenBox } from '../../Utilities'
import app from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useDispatch, useSelector } from 'react-redux';
import { AddPost } from '../../redux/features/Posts/PostsSlice';

function NewPost() {

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
    }
    Reset()
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
            setimageUploadLoading(false)
            newPost.imgURL = downloadURL
            dispatch(AddPost({ postData: newPost, token: user.token}))
          });          
        }
      );
  }

  return (
    <Box p={2} sx={{  
        marginTop: 1,
        marginLeft: {
          xs:1,
          sm:3, 
        },
        marginRight: {
          xs:1,
          sm:3, 
        },
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))`
    }}>
        <TextField
            placeholder="Write Something Interesting"
            multiline
            rows={2}
            value={text}
            onChange={(e)=> settext(e.target.value)}
            sx={{ width: '100%'}}
        />
        { img ? <Box position="relative" pt={1}>
            <img style={{ width: '200px', height: '100px'}} src={URL.createObjectURL(img)} alt="new" />
            <Badge onClick={() => setimg('')} sx={{ position: 'absolute', top: '20px', left: '180px'}} color="secondary" overlap="circular" badgeContent={<Clear sx={{ fontSize: "14px"}} />}>

            </Badge>
        </Box> : null }
        <FlexSpaceBetweenBox mt={1}>
          <Stack direction="row" spacing={2}>
            <label htmlFor="file-input-img">
              <InsertPhoto />
            </label>
            <input onChange={e => setimg(e.target.files[0])} id="file-input-img" style={{ display: 'none'}} type="file" accept="image/png, image/jpeg" />
            <Mood />
          </Stack>
          <Button onClick={handlePostSubmit} variant="contained">
            Post
          </Button>
        </FlexSpaceBetweenBox>
        { imageUploadLoading ? <Box mt={1} mb={1}><LinearProgress /></Box> : null}
    </Box>
  )
}

export { NewPost }