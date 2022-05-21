import { configureStore } from '@reduxjs/toolkit'
import PostsReducer from '../features/Posts/PostsSlice'
import ProfileReducer from '../features/Profile/ProfileSlice'
import UserReducer from '../features/User/UserSlice'

const store = configureStore({
  reducer: {
    posts: PostsReducer,
    profile: ProfileReducer,
    user: UserReducer
  }
})

export default store