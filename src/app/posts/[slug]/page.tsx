// import Container from '../../../components/Container'
import moment from 'moment'
import { allPosts } from '@/contentlayer/generated'
// import { InferGetStaticPropsType } from 'next'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { GiDiamonds } from 'react-icons/gi'
import { MdCalendarMonth } from 'react-icons/md'
import '../../styles/post.scss'

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
    <article className="mx-auto max-w-xl py-8 ">
      <div className="mb-8 text-center">
        <div className="title">{post.title}</div>
        <div className="time mt-6 flex items-center justify-center text-[0.9rem] text-gray-600 opacity-70">
          <MdCalendarMonth className="mr-1 inline-block" />
          {moment(post.createdAt).format('YYYY. MM. DD')}
        </div>
      </div>
      {/* <hr className="checkered h-15 absolute left-0 top-[-65px] m-0 mx-0 my-1 h-8 w-[100vw]" /> */}
      <figure>
        <span className="my-6 flex items-center">
          <span className="h-px flex-1 bg-black"></span>
          <span className="shrink-0 px-6">
            <GiDiamonds />
          </span>
          <span className="h-px flex-1 bg-black"></span>
        </span>
      </figure>
      <Content />
    </article>
  )
}

export default Post
