// '/tags' 페이지
import { allPosts } from '@/contentlayer/generated'
import Tags from 'src/components/Tags'

type Props = {
  params: {
    tag: string
  }
}

export function createTagCount(allBlogs) {
  const tagCount: Record<string, number> = {}
  allBlogs.forEach((file) => {
    if (file.tags) {
      file.tags.forEach((tag) => {
        const formattedTag = tag.trim()
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1
        } else {
          tagCount[formattedTag] = 1
        }
      })
    }
  })

  return tagCount
}

const TagsLayout = ({ children }: { children: React.ReactNode }) => {
  const posts = allPosts
  if (!posts) return []

  const tags = new Set(posts.map((post) => post.tags).flat())
  const tagList = Array.from(tags).sort()

  // Call createTagCount with allPosts
  const tagData = createTagCount(allPosts)

  return (
    <>
      <div className="title mb-10">Tags</div>
      <Tags tagData={tagData} />
      <div className="mt-10">{children}</div>
    </>
  )
}

export default TagsLayout
