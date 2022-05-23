import { Clear, Edit, PhotoCamera } from '@mui/icons-material'
import { Avatar, Box, Button, LinearProgress, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AvatarStyles, ImgStyles, ModalContainer, StyledTextField } from './styles'
import app from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { EditProfile } from '../../redux/features/Profile/ProfileSlice'

function EditProfileModal({ open, setopen }) {

  const { profile } = useSelector(state => state.profile)
  const dispatch = useDispatch()

  const { user } = useSelector(state => state)

  const [coverImg, setcoverImg] = useState(profile?.user?.coverImg || null)

  const [img, setimg] = useState(profile?.user?.img || null)

  const [FullName, setFullName] = useState(profile?.user?.FullName)
  const [Bio, setBio] = useState(profile?.user?.Bio)
  const [Url, setUrl] = useState(profile?.user?.Url)

  const [imageUploadLoading, setimageUploadLoading] = useState(false)

  const handleCoverChange = (event) => {
    const file = event.target.files[0]

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
            setcoverImg(downloadURL)
            setimageUploadLoading(false)
          });          
        }
      );
  }

  const handleImgChange = (event) => {
    const file = event.target.files[0]

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

  const handleSubmit = () => {
    const userData = { ...profile.user, img, coverImg, FullName, Bio, Url}
    dispatch(EditProfile({ userData, token: user.token}))
    handleClose()
  }

  const handleClose = () => {
    setopen(false)
  }

  const defaultCover = 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80'

  return (
    <>
    <Modal
        open={open}
        onClose={()=>setopen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer bgcolor='background.paper'>
          <Box sx={{ display: 'flex', alignItems: 'center', p: 2}}>
            <Clear onClick={handleClose} sx={{ marginRight: 1, color: 'text.primary'}} />
            <Typography color='text.primary' sx={{flexGrow: 1}} variant="h6">
              Edit Profile
            </Typography>
            <Button onClick={handleSubmit} variant="outlined">Save</Button>
          </Box>
          <Box sx={{ height: '14rem'}}>
            <Box position="relative">
              <img src={coverImg || defaultCover} style={ImgStyles} alt="cover" />
              <Avatar src={img} sx={AvatarStyles} />
              <Box position="absolute" sx={{ 
                  color: "#fff",
                  zIndex: 3,
                  bottom: '-2rem', 
                  left: '7.5rem' 
                }}>
                <label htmlFor="file-input-img">
                  <PhotoCamera />
                </label>
                <input 
                  onChange={handleImgChange} 
                  id="file-input-img" 
                  style={{ display: 'none'}}
                  type="file" 
                  accept="image/png, image/jpeg" />
              </Box>

              <Box position="absolute" sx={{ color: "#fff", zIndex: 3, top: '1rem', right: '1rem'}}>
                <label htmlFor="file-input-cover-img">
                  <PhotoCamera />
                </label>
                <input 
                  onChange={handleCoverChange} 
                  id="file-input-cover-img" 
                  style={{ display: 'none'}}
                  type="file" 
                  accept="image/png, image/jpeg" />
              </Box>
            </Box>
          </Box>
          { imageUploadLoading ? <Box p={1}>
            <LinearProgress />
          </Box>   : null }       
          <Box p={2}>
            <StyledTextField value={FullName} onChange={(e)=> setFullName(e.target.value)} id="outlined-basic" label="Full Name" variant="outlined" />
            <StyledTextField value={Bio} onChange={(e)=> setBio(e.target.value)} id="outlined-basic" label="Bio" variant="outlined" />
            <StyledTextField value={Url} onChange={(e)=> setUrl(e.target.value)} id="outlined-basic" label="URL" variant="outlined" />
          </Box>
        </ModalContainer>
      </Modal>
    </>
  )
}


export { EditProfileModal }