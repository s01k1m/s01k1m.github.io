import { allPosts } from '@/contentlayer/generated'
import Link from 'next/link'

interface PropsType {
  tagData: object
}

const Tags = ({ tagData }: PropsType) => {
  const styleTag: string =
    'relative ml-2 rounded-full border-[2px] border-solid border-[#999] p-2 px-4 pr-5 hover:border-black hover:bg-black hover:text-white'

  return (
    <div className="flex">
      <Link href="/tags/">
        <div className={styleTag}>
          <span>All</span>
          <span className="absolute ml-1 text-[10px] text-[#999]">
            {allPosts.length}
          </span>
        </div>
      </Link>
      {Object.keys(tagData).map((key, index) => {
        return (
          <Link key={index} href={`/tags/${key}`}>
            <div className={styleTag}>
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
