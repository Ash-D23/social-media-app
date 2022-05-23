import React, { useEffect } from 'react'
import { Feed, NewPost } from '../../Components'
import { useSelector, useDispatch } from 'react-redux'

function Dashboard() {

  const { posts } = useSelector(state => state.posts)

  const reversePost = posts?.posts ? [...posts.posts].reverse() : []

  return (
    <>
      <NewPost />
      <Feed posts={reversePost} />
    </>
  )
}

export { Dashboard }