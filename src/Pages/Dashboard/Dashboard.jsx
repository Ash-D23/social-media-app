import React, { useEffect } from 'react'
import { Feed, NewPost } from '../../Components'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../../redux/features/Posts/PostsSlice'
import { fetchBookmarks } from '../../redux/features/Bookmarks/Bookmarks'

function Dashboard() {

  const { posts } = useSelector(state => state.posts)
  const { user} = useSelector(state => state)
  const { bookmarks } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBookmarks(user.token))
    dispatch(fetchPosts())
  }, [])

  console.log(bookmarks)

  return (
    <>
      <NewPost />
      <Feed posts={posts.posts} />
    </>
  )
}

export { Dashboard }