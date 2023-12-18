// '/blog' 페이지
import { allPosts } from '@/contentlayer/generated'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Title from 'src/components/Title'
import BlogPost from '../../components/BlogPost'

const Blog = () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)), // 최신 순 정렬
  )

  return (
    <>
      <Title title="Blog" />
      <div className="n  mt-10  grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {posts?.map((post) => (
          <BlogPost
            date={post.createdAt}
            title={post.title}
            des={post.description as string}
            slug={post._raw.flattenedPath}
            key={post._id}
            tags={post.tags as string[]}
          />
        ))}
      </div>
    </>
  )
}

export default Blog
