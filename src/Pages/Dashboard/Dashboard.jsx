import React, { useEffect } from 'react'
import { Feed, NewPost } from '../../Components'
import { useSelector, useDispatch } from 'react-redux'

function Dashboard() {

  const { posts } = useSelector(state => state.posts)
  
  const { bookmarks } = useSelector(state => state)

  return (
    <>
      <NewPost />
      <Feed posts={posts.posts} />
    </>
  )
}

export { Dashboard }