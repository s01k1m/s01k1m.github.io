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
    <Link href={`/posts/${slug}`} passHref className="group mb-[10px] w-full">
      {/* <div className="text-xs font-medium text-gray-400">{date}</div> */}
      <div
        className={`relative z-10 w-full text-2xl font-extrabold hover:text-white hover:text-shadow-away group-hover:text-white group-hover:text-shadow-away `}
      >
        {title}
      </div>
      <div
        className={`mt-1 grid grid-cols-[2fr,1fr] items-center justify-between gap-1 hover:text-white hover:text-shadow-away group-hover:text-white group-hover:text-shadow-away`}
      >
        <div
          className={`mt-1 box-border overflow-x-auto text-ellipsis whitespace-nowrap text-[#767676] group-hover:text-white`}
        >
          {des}
        </div>
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
