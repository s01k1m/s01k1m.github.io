// 'use client'
import { useEffect, useState } from 'react'

import styled from 'styled-components'
import moment from 'moment'
import { AnimatePresence, motion } from 'framer-motion'

import { CommentArrayType } from 'src/app/guestbook/page'

const Comment = styled.div`
  li {
    list-style: none;
  }

  .chat {
    display: inline-block;
    padding: 30px;
    background: #579ffb;
    border-radius: 15px 0 15px 15px;
    margin: 8px 20px;
    color: #fff;
    box-shadow: 2px 2px 20px -2px rgba(60, 51, 176, 0.4);
  }

  .guest{
    transform-origin: 100% 0%;
  }

  .owner {
    color: black;
    background: #ececec;
    border-radius: 0 15px 15px 15px;
    transform-origin: 0% 0%; // 애니메이션 왼쪽에서 시작
    
  }

  .chat .name {
    font-weight: 700;
    font-size: 14px;
  }

  .chat .comments {
    min-width: 210px;
  }

  .typing {
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 0.2rem;
    box-sizing: border-box;
    background: #ccc;
    border-radius: 50%;
    
    &.typing-1 { animation: typing 3s infinite }
    &.typing-2 { animation: typing 3s 250ms infinite }
    &.typing-3 { animation: typing 3s 500ms infinite }
  }


@keyframes typing {
	0%, 75%, 100% {
		transform: translate(0, 0.25rem) scale(0.9);
		opacity: 0.5;
	}
	
	25% {
		transform: translate(0, -0.25rem) scale(1);
		opacity: 1;
	}
}

.animationEffect {
  // animation: slideUp 1s ease-in-out;
}

@keyframes slideUp {
  from {
    opacity:0;
    transform: translateY(+100%);
  }
  to {
    opacity:1;
    transform: translateY();
  }
}

}
`

const GuestbookComments = ({ commentsData }: CommentArrayType) => {
  const [isLoading, setIsLoading] = useState<Boolean>(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500)
  }, [])

  return (
    <Comment>
      <div className="mb-5 text-center">
        <span className="rounded-full bg-[#EEE] p-2 px-3 text-[0.9rem] text-[#999]">
          Today at {moment().format('LT')}
        </span>
      </div>
      <AnimatePresence initial={false} mode="popLayout">
        {isLoading ? (
          <div className="chat owner animationEffect">
            <div className="typing typing-1"></div>
            <div className="typing typing-2"></div>
            <div className="typing typing-3"></div>
          </div>
        ) : (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              opacity: { duration: 0.2 },
              layout: {
                type: 'spring',
                bounce: 0.4,
              },
            }}
            className="chat owner animationEffect"
          >
            <div className="name">Sol Kim</div>
            <div className="comments mt-4">
              Hi, welcome to my blog! Go ahead and send me a message. 😄
            </div>
          </motion.div>
        )}

        {/* <div className="h-[600px] overflow-y-scroll"> */}
        {commentsData?.map((comment, index) => {
          return (
            <motion.div
              key={comment.id + index + comment.createdAt}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: Math.min((index + 1) * 0.2, 1),
                opacity: { duration: 0.2 },
                layout: {
                  type: 'spring',
                  bounce: 0.4,
                },
              }}
              className="guest flex justify-end"
            >
              <div className="chat" key={comment.id}>
                <div className="flex justify-between">
                  <div className="name">{comment.name}</div>
                  <div className="time mt-auto text-[0.9rem] opacity-70">
                    {moment(comment.createdAt).format('YYYY. MM. DD')}
                  </div>
                </div>
                <div className="comments mt-4">{comment.comment}</div>
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </Comment>
  )
}

export default GuestbookComments
