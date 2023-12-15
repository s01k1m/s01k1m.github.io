// '/blog' 페이지
import { allPosts } from '@/contentlayer/generated'
import BlogPost from '../../components/BlogPost'

const Blog = () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)), // 최신 순 정렬
  )

  return (
    <>
      <div className="title ">Blog</div>
      <div className="n  mt-10  grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {posts.map((post) => (
          <BlogPost
            date={post.createdAt}
            title={post.title}
            des={post.description as string}
            slug={post._raw.flattenedPath}
            key={post._id}
            category={post.category as string[]}
          />
        ))}
      </div>
    </>
  )
}

export default Blog
