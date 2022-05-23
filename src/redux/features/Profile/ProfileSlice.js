import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { toastsuccess } from '../../../Utilities/ToastMessage'

const initialState = {
  profile: null,
  userPosts: []
}

export const fetchProfile= createAsyncThunk('posts/fetchProfile', (id) => {
  return axios
    .get('/api/users/'+id)
    .then(response => response.data)
})

export const EditProfile = createAsyncThunk('posts/EditProfile', (data) => {
  return axios
    .post('/api/users/edit', { userData: data.userData }, {
      headers: {
        authorization: data.token,
      }
    })
    .then(response => response.data)
})

export const fetchUserPosts= createAsyncThunk('posts/fetchUserPosts', (id) => {
  return axios
    .get('/api/posts/user/'+id)
    .then(response => response.data.posts)
})

const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchProfile.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.loading = false
      state.profile = action.payload
      state.error = ''
    })
    builder.addCase(fetchProfile.rejected, (state, action) => {
      state.loading = false
      state.profile = null
      state.error = action.error.message
    })
    builder.addCase(EditProfile.pending, state => {
      state.loading = true
    })
    builder.addCase(EditProfile.fulfilled, (state, action) => {
      toastsuccess('Profile Updated')
      state.loading = false
      state.profile = action.payload
      state.error = ''
    })
    builder.addCase(EditProfile.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  }
})

export default ProfileSlice.reducer
export const { ordered, restocked } = ProfileSlice.actions