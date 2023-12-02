'use client'
import React, { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import styled from 'styled-components'
import axios from 'axios'

const Guestbook = styled.div``

const GuestbookForm = ({ fetchComments }: any) => {
  // `session` will match the returned value of `callbacks.session()` from `NextAuth()`
  const [inputValue, setInputValue] = useState<string>('')
  const { data: session } = useSession()

  const handlePost = async () => {
    const data = {
      name: session?.user.name,
      comment: inputValue,
    }

    const response = await axios.post('/api/guestbook', data)
  }
  return (
    <Guestbook>
      {!session && (
        <>
          not signed in <br />
          <button onClick={() => signIn('github')}>로그인하기</button>
        </>
      )}
      {session && (
        <form className="p-[20px]">
          <div className="flex justify-between">
            <input
              readOnly
              type="text"
              className="name disabled m-2 bg-transparent"
              value={session?.user.name}
            />
            <button
              type="button"
              className="text-[#ddd] hover:text-black"
              onClick={() => {
                signOut()
              }}
            >
              sign out
            </button>
          </div>
          <div className="flex h-[40px] justify-between gap-1">
            <input
              minLength={3}
              maxLength={200}
              required
              type="text"
              className="h-full w-auto flex-1 rounded-[4px] bg-[#ddd] ps-2 "
              placeholder="Enter your message..."
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <button
              type="button"
              className="disabled h-full rounded-[4px] bg-[#00C441] p-[10px] font-semibold text-white"
              onClick={() => {
                console.log('제출')
                setInputValue('')
                handlePost().then(() => {
                  fetchComments
                })
              }}
            >
              Send
            </button>
          </div>
        </form>
      )}
    </Guestbook>
  )
}

export default GuestbookForm
