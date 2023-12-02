import Container from '../../../components/Container'
import { allPosts } from '@/contentlayer/generated'
// import { InferGetStaticPropsType } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'

const Post = ({ post }: any) => {
  const MDXComponent = useMDXComponent(post.body.code)

  const customMeta = {
    title: post.title,
    description: post.description,
    date: new Date(post.createdAt).toISOString(),
  }

  return (
    <Container customMeta={customMeta}>
      <div className="mt-10 prose">
        <h1 className="text-sky-700">{post.title}</h1>
        <MDXComponent />
      </div>
    </Container>
  )
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  // const posts = await fetch('https://.../posts').then((res) => res.json())

  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`

// export const getStaticPaths = async () => {
//   return {
//     paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
//     fallback: false,
//   }
// }

// export const getStaticProps = async ({ params }) => {
//   const post = allPosts.find((p) => p._raw.flattenedPath === params.slug)
//   return {
//     props: {
//       post,
//     },
//   }
// }

export default Post
