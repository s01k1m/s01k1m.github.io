'use client'
import React, { useState, KeyboardEvent } from 'react'

import { signIn, signOut, useSession } from 'next-auth/react'
import styled from 'styled-components'
import axios from 'axios'
import { ImGithub } from 'react-icons/im'

import toast, { Toaster } from 'react-hot-toast'

const Guestbook = styled.div``

const GuestbookForm = ({ fetchComments }: any) => {
  // `session` will match the returned value of `callbacks.session()` from `NextAuth()`
  const [inputValue, setInputValue] = useState<string>('')
  const { data: session } = useSession()

  const handlePost = async () => {
    try {
      if (inputValue === '') {
        throw new Error('방명록을 작성해주세요')
      } else {
        const data = {
          name: session?.user.name,
          comment: inputValue,
        }

        const response = await axios.post('/api/guestbook', data)
        return response // 성공 시 어떤 값을 반환하도록 설정
      }
    } catch (error) {
      throw error // catch 블록에서 예외를 다시 던져주기
    }
  }

  const handleSubmit = () => {
    // 토스트 알림 적용
    toast.promise(
      handlePost()
        .then(() => {
          fetchComments()
          setInputValue('') // 인풋 비우기
        })
        .catch((error) => {
          console.error(error)
          return Promise.reject(error)
        }), // catch 블록에서 프로미스를 rejected로 만들어주기,
      {
        loading: 'Saving...',
        success: <b>Successfully submitted!</b>,
        error: <b>Unable to submit your entry.</b>,
      },
    )
  }

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <Guestbook>
      {!session && (
        <div className="mx-[20px] my-[10px] flex flex-col items-center justify-center">
          <div className="my-2">방명록을 작성하기 위해 로그인 해주세요</div>
          <button
            className="animated flex w-[100px] justify-around rounded-full bg-blue-500 p-3 font-bold text-white hover:bg-blue-700"
            onClick={() => signIn('github')}
          >
            <ImGithub />
            <div>Log in</div>
          </button>
        </div>
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
              onChange={(e) => {
                setInputValue(e.target.value)
              }}
              onKeyUp={handleEnter}
              value={inputValue}
            />
            <button
              type="button"
              className="disabled h-full rounded-[4px] bg-[#00C441] p-[10px] font-semibold text-white"
              onClick={(e) => {
                e.preventDefault()
                handleSubmit()
              }}
            >
              Send
            </button>
            <Toaster position="bottom-center" reverseOrder={false} />
          </div>
        </form>
      )}
    </Guestbook>
  )
}

export default GuestbookForm
