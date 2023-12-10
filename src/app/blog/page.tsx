// '/blog' 페이지
import { allPosts } from '@/contentlayer/generated'
import BlogPost from '../../components/BlogPost'

const Blog = () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)),
  )

  console.log('post', posts)

  return (
    <>
      <div className="xs:flex-row xs:justify-between mt-10 flex w-full flex-col flex-wrap justify-between">
        {posts.map((post) => (
          <BlogPost
            date={post.createdAt}
            title={post.title}
            des={post.description}
            slug={post._raw.flattenedPath}
            key={post._id}
          />
        ))}
      </div>
    </>
  )
}

// export const generateStaticParams = async () => {
//   const posts = allPosts.sort(
//     (a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)),
//   )
//   console.log(posts)
//   return {
//     props: {
//       posts,
//     },
//   }
// }

// export const getStaticProps = async () => {
//   const posts = allPosts.sort(
//     (a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)),
//   )

//   return {
//     props: {
//       posts,
//     },
//   }
// }

export default Blog
