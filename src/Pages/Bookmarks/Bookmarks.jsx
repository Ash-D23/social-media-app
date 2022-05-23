import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Feed } from '../../Components'
import { fetchBookmarks } from '../../redux/features/Bookmarks/Bookmarks'
import { FlexCenterBox } from '../../Utilities'

function Bookmarks() {

  const { bookmarks, user} = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBookmarks(user.token))
  }, [])

  return (
    <>
      <Feed posts={bookmarks?.posts} isbookmark={true} />
      {bookmarks?.posts.length === 0 ? (
        <FlexCenterBox p={2} >
          <img style={{ height: '75vh'}} src="/Images/empty.svg" />
        </FlexCenterBox>
      ) : null}
    </>
  )
}

export { Bookmarks }