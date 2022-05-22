import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Feed } from '../../Components'
import { fetchBookmarks } from '../../redux/features/Bookmarks/Bookmarks'

function Bookmarks() {

  const { bookmarks, user} = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBookmarks(user.token))
  }, [])

  return (
    <>
      <Feed posts={bookmarks?.posts} />
    </>
  )
}

export { Bookmarks }