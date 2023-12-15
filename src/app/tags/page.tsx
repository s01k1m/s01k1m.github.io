// '/tags' 페이지
import { allPosts } from '@/contentlayer/generated'
import Link from 'next/link'
import BlogPost from 'src/components/BlogPost'

export function generateMetadata() {
  return {
    title: `All Posts`,
  }
}

const TagsDefault = () => {
  let posts = allPosts

  if (!posts) return <p className="mt-10">Sorry, no Posts available.</p>

  if (!posts.length) {
    return (
      <>
        <div className="text-[32px] ">Results for #All</div>
        <div className=" mt-10  grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          sorry, no posts for that keywored.
          <Link href="/blog">Back to All Posts</Link>
        </div>
      </>
    )
  }

  posts = posts.sort(
    (a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)), // 최신 순 정렬
  )
  return (
    <>
      <div className="text-[30px]">
        Results for <span className="text-modric-gold">#All</span>
      </div>
      <div className="mt-10  grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {posts.map((post) => (
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

export default TagsDefault
