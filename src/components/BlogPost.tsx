'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import '../app/styles/post.scss'

export interface PostPropsType {
  title: string
  date: string
  des: string
  slug: string
  tags: string[]
}

const BlogPost = ({ title, date, des, slug, tags }: PostPropsType) => {
  const [isReady, setIsReady] = useState<Boolean>(false)
  useEffect(() => {
    setIsReady(true)
  }, [])

  return isReady ? (
    <Link href={`/posts/${slug}`} passHref className="group mb-[10px] w-full">
      {/* <div className="text-xs font-medium text-gray-400">{date}</div> */}
      <div
        className={`relative z-10 w-full text-2xl font-extrabold hover:text-white hover:text-shadow-away group-hover:text-white group-hover:text-shadow-away `}
      >
        {title}
      </div>
      <div
        className={`mt-[-8px] grid grid-cols-[2fr,1fr] items-center justify-between gap-1 hover:text-white hover:text-shadow-away group-hover:text-white group-hover:text-shadow-away`}
      >
        <div
          className={`ml-[-10px] box-border overflow-x-auto text-ellipsis whitespace-nowrap py-4 pl-3 text-[#767676] group-hover:text-white`}
        >
          {des}
        </div>
        <div className="flex flex-wrap items-center justify-end gap-1">
          {tags?.map((tag) => {
            return (
              <Link
                href={`/tags/${tag}`}
                className="group-hover:shadow-away rounded-full bg-gray-800 p-1 px-2 text-[12px] text-gray-200 hover:bg-modric-blue"
              >
                <div>{tag.trim()}</div>
              </Link>
            )
          })}
        </div>
      </div>
    </Link>
  ) : (
    <></>
  )
}

export default BlogPost
