import Link from 'next/link'

const BlogPost = ({ date, title, des, slug }) => {
  return (
    <Link href={`/posts/${slug}`} passHref>
      <div className="font-medium text-xs text-gray-400">{date}</div>
      <div className={`font-extrabold text-2xl mt-2`}>{title}</div>
      <div className={`font-medium text-gray-600 text-xl mt-1`}>{des}</div>
    </Link>
  )
}

export default BlogPost
