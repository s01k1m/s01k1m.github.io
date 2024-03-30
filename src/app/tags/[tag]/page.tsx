// '/tags' 페이지
import { allPosts } from '@/contentlayer/generated'
import Link from 'next/link'
import BlogPost from 'src/components/BlogPost'

type Props = {
  params: {
    tag: string
  }
}

export function generateStaticParams() {
  const posts = allPosts
  if (!posts) return []

  const tags = new Set(posts.map((post) => post.tags).flat())

  return Array.from(tags).map((tag) => ({ tag }))
}

export function generateMetadata({ params: { tag } }: Props) {
  return {
    title: `Posts about ${tag}`,
  }
}

const TagPostList = ({ params: { tag } }: Props) => {
  let posts = allPosts

  if (!posts) return <p className="mt-10">Sorry, no Posts available.</p>

  let tagPosts = posts.filter((post) => post.tags?.includes(tag))

  if (!tagPosts.length) {
    return (
      <>
        <div className="text-[30px]">Results for #{tag}</div>
        <div className=" mt-10  grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          sorry, no posts for that keywored.
          <Link href="/blog">Back to All Posts</Link>
        </div>
      </>
    )
  }

  tagPosts = tagPosts.sort(
    (a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)), // 최신 순 정렬
  )
  return (
    <>
      <div className="text-[30px] ">
        Results for <span className="text-modric-gold">#{tag}</span>
      </div>
      <div className=" mt-10  grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {tagPosts.map((post) => (
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

export default TagPostList
