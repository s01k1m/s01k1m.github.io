import Link from 'next/link'
import '../app/styles/post.scss'

export interface PostPropsType {
  title: string
  date: string
  des: string
  slug: string
  category: string[]
}

const BlogPost = ({ title, date, des, slug, category }: PostPropsType) => {
  return (
    <Link
      href={`/posts/${slug}`}
      passHref
      className=" group mb-[10px] w-full sm:w-[48%]"
    >
      {/* <div className="text-xs font-medium text-gray-400">{date}</div> */}
      <div
        className={`relative z-10 mt-4 inline-block text-2xl font-extrabold drop-shadow-md hover:text-white hover:text-shadow-away group-hover:text-white group-hover:text-shadow-away `}
      >
        {title}
      </div>
      <div
        className={`mt-2 flex  flex-nowrap items-center justify-between text-ellipsis hover:text-white hover:text-shadow-away group-hover:text-white group-hover:text-shadow-away`}
      >
        <div className={`max-x-[70%] mt-1 text-ellipsis`}>{des}</div>
        <div>
          {category.map((tag) => {
            return (
              <span className="m-0.5 rounded-full bg-gray-800 p-1 px-2 text-[12px] text-gray-200 group-hover:bg-modric-blue">
                {tag.trim()}
              </span>
            )
          })}
        </div>
      </div>
    </Link>
  )
}

export default BlogPost
