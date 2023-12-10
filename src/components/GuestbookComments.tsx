// 'use client'
import { useEffect, useState } from 'react'

import styled from 'styled-components'
import moment from 'moment'
import { CommentArrayType } from 'src/app/guestbook/page'

const Comment = styled.div`
  .chat {
    display: inline-block;
    min-width: 200px;
    padding: 20px;
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
    font-weight: 500;
    font-size: 18px;
  }

  .chat .comments {
    margin-top: 10px;
  }
`

const GuestbookComments = ({ commentsData }: CommentArrayType) => {
  return (
    <Comment>
      <div className="chat owner">
        <div className="name">Sol K</div>
        <div className="comments">
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
                  <div className="time">
                    {moment(comment.createdAt).format('YYYY. MM. DD')}
                  </div>
                </div>
                <div className="comments mt-2">{comment.comment}</div>
              </div>
            </div>
          )
        })}
      </div>
    </Comment>
  )
}

export default GuestbookComments
