import React, { useEffect } from 'react'
import { Feed, NewPost } from '../../Components'
import { useSelector, useDispatch } from 'react-redux'
import { FlexCenterBox } from '../../Utilities'

function Dashboard() {

  const posts  = useSelector(state => state.posts)

  const reversePost = posts?.posts?.posts ? [...posts.posts.posts].reverse() : []

  return (
    <>
      <NewPost />
      <Feed posts={reversePost} isLoading={posts.loading} />
      {reversePost?.posts?.posts.length === 0 ? (
        <FlexCenterBox p={2} >
          <img style={{ height: '75vh'}} src="/Images/empty.svg" />
        </FlexCenterBox>
      ) : null}
    </>
  )
}

export { Dashboard }