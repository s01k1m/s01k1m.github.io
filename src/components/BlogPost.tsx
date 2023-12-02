import Link from 'next/link'

const BlogPost = ({ date, title, des, slug }) => {
  return (
    <Link
      href={`/posts/${slug}`}
      passHref
      className="xs:w-[48%] mb-[10px] w-full"
    >
      {/* <div className="font-medium text-xs text-gray-400">{date}</div> */}
      <div className={`hover:animated mt-2 text-2xl font-extrabold`}>
        {title}
      </div>
      <div className={`mt-1 text-xl font-medium text-gray-600`}>{des}</div>
    </Link>
  )
}

export default BlogPost
