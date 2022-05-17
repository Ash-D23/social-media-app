import React from 'react'
import { Feed, NewPost } from '../../Components'

function Dashboard() {
  return (
    <>
      <NewPost />
      <Feed />
    </>
  )
}

export { Dashboard }