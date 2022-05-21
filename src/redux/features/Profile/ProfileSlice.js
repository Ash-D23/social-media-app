import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  profile: null,
  userPosts: []
}

export const fetchProfile= createAsyncThunk('posts/fetchProfile', (id, token) => {
  return axios
    .get('/api/users/'+id, {
      headers: {
        authorization: token,
      }
    })
    .then(response => response.data)
})

export const fetchUserPosts= createAsyncThunk('posts/fetchUserPosts', (id, token) => {
  return axios
    .get('/api/posts/user/'+id, {
      headers: {
        authorization: token,
      }
    })
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
    builder.addCase(fetchUserPosts.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUserPosts.fulfilled, (state, action) => {
      state.loading = false
      state.userPosts = action.payload
      state.error = ''
    })
    builder.addCase(fetchUserPosts.rejected, (state, action) => {
      state.loading = false
      state.userPosts = null
      state.error = action.error.message
    })
  }
})

export default ProfileSlice.reducer
export const { ordered, restocked } = ProfileSlice.actions