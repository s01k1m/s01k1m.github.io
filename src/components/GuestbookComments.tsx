// 'use client'
import { useEffect, useState } from 'react'

import styled from 'styled-components'
import moment from 'moment'
import { CommentArrayType } from 'src/app/guestbook/page'

const Comment = styled.div`
  .chat {
    display: inline-block;
    min-width: 230px;
    padding: 30px;
    background: #579ffb;
    border-radius: 15px 15px 0 15px;
    margin: 5px 20px;
    color: #fff;
  }

  .owner {
    color: black;
    background: #ececec;
    border-radius: 15px 15px 15px 0;
  }

  .chat .name {
    font-weight: 700;
    font-size: 18px;
  }

  .chat .comments {
  }
`

const GuestbookComments = ({ commentsData }: CommentArrayType) => {
  return (
    <Comment>
      <div className="chat owner">
        <div className="name">Sol Kim</div>
        <div className="comments mt-4">
          Hi, welcome to my blog! Go ahead and send me a message. 😄
        </div>
      </div>
      <div className="h-[600px] overflow-y-scroll">
        {commentsData?.map((comment) => {
          return (
            <div className="flex justify-end">
              <div className="chat guest">
                <div className="flex justify-between">
                  <div className="name">{comment.name}</div>
                  <div className="time mt-auto text-[14px]">
                    {moment(comment.createdAt).format('YYYY. MM. DD')}
                  </div>
                </div>
                <div className="comments mt-4">{comment.comment}</div>
              </div>
            </div>
          )
        })}
      </div>
    </Comment>
  )
}

export default GuestbookComments
