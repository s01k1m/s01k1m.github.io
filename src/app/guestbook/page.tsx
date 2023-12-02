'use client'
import React, { useEffect, useState } from 'react'
import Container from 'src/components/Container'
import GuestbookForm from 'src/components/GuestbookForm'
import GuestbookComments from 'src/components/GuestbookComments'
import { useSession } from 'next-auth/react'

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
  // const [reload, setReload] = useState<number>(0) // 방문객의 댓글 작성 시 방명록 리로드를 위한 시그널 상태값
  const [commentsData, setCommentsData] = useState<CommentType[]>()

  async function fetchComments() {
    console.log('댓글가져오기')
    const response = await fetch('/api/guestbook')

    if (response.ok) {
      const data = await response.json()
      setCommentsData(data.data)
    }
  }
  // fetchComments()

  useEffect(() => {
    fetchComments()
  }, [])

  return (
    <Container>
      <div className="title">Guestbook</div>
      <div className="mt-4">
        <span className="font-bold">
          {session ? `${session?.user.name}님 ` : null}
        </span>
        안녕하세요 👋 만나서 반가워요!
      </div>
      <GuestbookForm fetchComments={fetchComments} />
      <GuestbookComments commentsData={commentsData} />
    </Container>
  )
}

export default Guestbook
