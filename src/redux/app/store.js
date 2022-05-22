import { configureStore } from '@reduxjs/toolkit'
import PostsReducer from '../features/Posts/PostsSlice'
import ProfileReducer from '../features/Profile/ProfileSlice'
import UserReducer from '../features/User/UserSlice'
import BookmarksReducer from '../features/Bookmarks/Bookmarks'

const store = configureStore({
  reducer: {
    posts: PostsReducer,
    profile: ProfileReducer,
    user: UserReducer,
    bookmarks: BookmarksReducer
  }
})

export default store