// import Container from '../../../components/Container'
import { allPosts } from '@/contentlayer/generated'
// import { InferGetStaticPropsType } from 'next'
import { getMDXComponent } from 'next-contentlayer/hooks'

import '../../styles/post.css'

// const Post = ({ post }: any) => {
//   const MDXComponent = useMDXComponent(post.body.code)

//   const customMeta = {
//     title: post.title,
//     description: post.description,
//     date: new Date(post.createdAt).toISOString(),
//   }

//   return (
//     <>
//       <div className="prose mt-10">
//         <h1 className="text-center text-[32px] font-bold">{post.title}</h1>
//         <hr className="m-5 h-1" />
//         <MDXComponent />
//       </div>
//     </>
//   )
// }

// // Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//   // const posts = await fetch('https://.../posts').then((res) => res.json())

//   return allPosts.map((post) => ({
//     slug: post._raw.flattenedPath,
//   }))
// }

// // Multiple versions of this page will be statically generated
// // using the `params` returned by `generateStaticParams`

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

// export default Post

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (post) {
    return { title: post.title }
  }
}

const Post = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) {
    // Handle the case where no post is found
    // You can show an error message, redirect the user, etc.
    return
  }

  const Content = getMDXComponent(post.body.code)

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <div className="title">{post.title}</div>
      </div>
      <hr className="checkered x-full black my-3 h-8" />
      <Content />
    </article>
  )
}

export default Post
