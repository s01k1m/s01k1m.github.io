// https://nextjs.org/docs/app/api-reference/file-conventions/not-found
'use client'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const NotFound = styled.div`
  .img::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(8px);
    filter: grayscale(60%);
  }
`
function NotFoundPage() {
  return (
    <NotFound>
      <div className="img absolute left-0 top-0 -z-10 flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-cover bg-top bg-no-repeat object-cover text-center"> 
      {/* bg-[url('/1.jpg')]  */}
        <div className="text-[20px] font-black blur-none">
          4⚽️4. Getting ready for kickoff 🔧
        </div>

        <Image
          src="/luka.gif"
          width={400}
          height={400}
          alt="smile of luka"
          className="mx-auto my-4 rounded-md blur-none"
        />
        <Link className="text-[20px] font-black blur-none" href="/">
          Return home
        </Link>
      </div>
    </NotFound>
  )
}

export default NotFoundPage
