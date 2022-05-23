import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { toastsuccess } from '../../../Utilities'
import { EditProfile } from '../Profile/ProfileSlice'

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: JSON.parse(localStorage.getItem("token")) || null
}

export const signIn = createAsyncThunk('user/signIn', (data) => {
  return axios
    .post('/api/auth/login', data)
    .then(response => response.data)
})

export const signUp = createAsyncThunk('user/SignUp', (data) => {
  return axios
    .post('/api/auth/signup', data)
    .then(response => response.data)
})

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: state => {
      localStorage.setItem('user', null)
      localStorage.setItem('token', null)
      state.user = null
      state.token = null
    }
  },
  extraReducers: builder => {
    builder.addCase(signIn.pending, state => {
      state.loading = true
    })
    builder.addCase(signIn.fulfilled, (state, action) => {
      localStorage.setItem('user', JSON.stringify(action.payload.foundUser))
      localStorage.setItem('token', JSON.stringify(action.payload.encodedToken))
      toastsuccess("Login Successfull")
      state.loading = false
      state.user = action.payload.foundUser
      state.token = action.payload.encodedToken
      state.error = ''
    })
    builder.addCase(signIn.rejected, (state, action) => {
      state.loading = false
      state.user = ''
      state.token = ''
      state.error = action.error.message
    })
    builder.addCase(signUp.pending, state => {
      state.loading = true
    })
    builder.addCase(signUp.fulfilled, (state, action) => {
      localStorage.setItem('user', JSON.stringify(action.payload.foundUser))
      localStorage.setItem('token', JSON.stringify(action.payload.encodedToken))
      toastsuccess("Sign Up Successfull")
      state.loading = false
      state.user = action.payload.foundUser
      state.token = action.payload.encodedToken
      state.error = ''
    })
    builder.addCase(signUp.rejected, (state, action) => {
      state.loading = false
      state.user = ''
      state.token = ''
      state.error = action.error.message
    })
    builder.addCase(EditProfile.fulfilled, (state, action) => {
      state.user = action.payload.user
    })
  }
})

export default UserSlice.reducer
export const { logout } = UserSlice.actions