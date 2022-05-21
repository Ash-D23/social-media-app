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

export const AddPost = createAsyncThunk('posts/AddPost', (data) => {
  return axios
    .post('/api/posts', { postData: data.postData },  {
      headers: {
        authorization: data.token,
      }
    })
    .then(response => response.data)
})

export const DeletePost = createAsyncThunk('posts/DeletePost', (data) => {
  return axios
    .delete('/api/posts/'+data.id, {
      headers: {
        authorization: data.token,
      }
    })
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
    builder.addCase(AddPost.pending, state => {
      state.loading = true
    })
    builder.addCase(AddPost.fulfilled, (state, action) => {
      state.loading = false
      state.posts = action.payload
      state.error = ''
    })
    builder.addCase(AddPost.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
    builder.addCase(DeletePost.pending, state => {
      state.loading = true
    })
    builder.addCase(DeletePost.fulfilled, (state, action) => {
      state.loading = false
      state.posts = action.payload
      state.error = ''
    })
    builder.addCase(DeletePost.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  }
})

export default PostsSlice.reducer
export const { ordered, restocked } = PostsSlice.actions