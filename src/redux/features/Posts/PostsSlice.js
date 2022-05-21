import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  posts: []
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', () => {
  return axios
    .get('/api/posts')
    .then(response => response.data)
})

const PostsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchPosts.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false
      state.posts = action.payload
      state.error = ''
    })
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false
      state.posts = []
      state.error = action.error.message
    })
  }
})

export default PostsSlice.reducer
export const { ordered, restocked } = PostsSlice.actions