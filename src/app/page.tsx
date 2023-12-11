// '/' 페이지
import { allPosts } from '@/contentlayer/generated'
import Link from 'next/link'
import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare } from 'react-icons/fa'
import { RiArrowRightUpLine } from 'react-icons/ri'
// import RecentPosts from '../components/RecentPosts'
import Portfolio from 'src/components/Portfolio'
import MyWorks from 'src/components/MyWorks'

const Home = ({ posts }: any) => {
  return (
    <>
      <span className="title">SOL KIM</span>
      <div className="contact mt-4 flex">
        <FaLinkedin size="24" />
        <FaGithubSquare size="24" className="ml-2" />
        <FaEnvelopeSquare size="24" className="ml-2" />
      </div>
      <div className="mt-4 text-[20px]">Frontend developer</div>
      <div className="mt-4 text-[16px] text-[#989898]">
        More about me
        <RiArrowRightUpLine className="inline" />
      </div>
      {/* <RecentPosts posts={posts} /> */}
      <Portfolio />
      <MyWorks />
    </>
  )
}

async function generateStaticParams() {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)),
  )

  return {
    props: {
      posts,
    },
  }
}

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

export default Home
