'use client'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useSession } from 'next-auth/react'

import GuestbookForm from 'src/components/GuestbookForm'
import GuestbookComments from 'src/components/GuestbookComments'

export interface CommentType {
  id: number
  name: string
  comment: string
  createdAt: string
}

export interface CommentArrayType {
  commentsData: CommentType[] | undefined
}

const Guestbook = () => {
  const { data: session } = useSession() // for nickname
  const [commentsData, setCommentsData] = useState<CommentType[]>()

  async function fetchComments() {
    const response = await fetch('/api/guestbook')

    if (response.ok) {
      const data = await response.json()
      setCommentsData(data.data)
    }
  }

  useEffect(() => {
    fetchComments()
  }, [])

  const handleRefreshClick = () => {
    // 방명록 작성 시 서버에서 데이터를 다시 가져옴
    fetchComments()
  }

  return (
    <>
      <div className="title">Guestbook</div>
      <div className="mt-4">
        안녕하세요 👋{' '}
        <span className="font-extrabold">
          {session ? `${session?.user.name} ` : null}
        </span>{' '}
        만나서 반가워요!
      </div>
      <GuestbookForm fetchComments={handleRefreshClick} />
      <GuestbookComments commentsData={commentsData} />
    </>
  )
}

export default Guestbook
