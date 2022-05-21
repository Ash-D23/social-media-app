import React, { useEffect } from 'react'
import { Feed, NewPost } from '../../Components'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../../redux/features/Posts/PostsSlice'

function Dashboard() {

  const { posts } = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <>
      <NewPost />
      <Feed posts={posts.posts} />
    </>
  )
}

export { Dashboard }