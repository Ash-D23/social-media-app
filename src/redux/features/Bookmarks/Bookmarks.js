import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  posts: []
}

export const fetchBookmarks = createAsyncThunk('bookmarks/fetchBookmarks', (token) => {
  return axios
    .get('/api/users/bookmark', {
        headers: {
          authorization: token
        }
      })
    .then(response => response.data)
})

export const AddBookmarks = createAsyncThunk('bookmarks/AddBookmarks', (data) => {
  return axios
    .post('/api/users/bookmark/'+data.id, { postData: data.postData },  {
      headers: {
        authorization: data.token,
      }
    })
    .then(response => response.data)
})

export const DeleteBookmarks = createAsyncThunk('bookmarks/DeleteBookmarks', (data) => {
  return axios
    .post('/api/users/remove-bookmark/'+data.id, {} ,{
      headers: {
        authorization: data.token,
      }
    })
    .then(response => response.data)
})

const BookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchBookmarks.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchBookmarks.fulfilled, (state, action) => {
      state.loading = false
      state.posts = action.payload.bookmarks
      state.error = ''
    })
    builder.addCase(fetchBookmarks.rejected, (state, action) => {
      state.loading = false
      state.posts = []
      state.error = action.error.message
    })
    builder.addCase(AddBookmarks.pending, state => {
      state.loading = true
    })
    builder.addCase(AddBookmarks.fulfilled, (state, action) => {
      state.loading = false
      state.posts = action.payload.bookmarks
      state.error = ''
    })
    builder.addCase(AddBookmarks.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
    builder.addCase(DeleteBookmarks.pending, state => {
      state.loading = true
    })
    builder.addCase(DeleteBookmarks.fulfilled, (state, action) => {
      state.loading = false
      state.posts = action.payload.bookmarks
      state.error = ''
    })
    builder.addCase(DeleteBookmarks.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  }
})

export default BookmarksSlice.reducer
export const {  } = BookmarksSlice.actions