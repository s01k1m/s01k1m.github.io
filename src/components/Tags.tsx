'use client'

import { allPosts } from '@/contentlayer/generated'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface PropsType {
  tagData: object
}

const Tags = ({ tagData }: PropsType) => {
  const pathname = usePathname()
  console.log(pathname)
  const isActiveTag = (tag: string) => {
    if (tag === '/tags') return pathname === tag

    return pathname.includes(tag)
  }

  return (
    <div className="flex">
      <Link href="/tags/">
        <div
          className={`relative ml-2 rounded-full border-[2px] border-solid border-[#999] p-2 px-4 pr-5 hover:border-black hover:bg-black hover:text-white
          ${isActiveTag('/tags') ? 'border-black bg-black text-white' : ''} `}
        >
          <span>All</span>
          <span className="absolute ml-1 text-[10px] text-[#999]">
            {allPosts.length}
          </span>
        </div>
      </Link>
      {Object.keys(tagData).map((key, index) => {
        return (
          <Link key={index} href={`/tags/${key}`}>
            <div
              className={`relative ml-2 rounded-full border-[2px] border-solid border-[#999] p-2 px-4 pr-5 hover:border-black hover:bg-black hover:text-white
          ${isActiveTag(`/${key}`) ? 'border-black bg-black text-white' : ''} `}
            >
              <span>{key}</span>
              <span className="absolute ml-1 text-[10px] text-[#999]">
                {tagData[key]}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Tags
