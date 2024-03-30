import Image from 'next/image'
import '../app/styles/work.css'

// import styled from 'styled-components'

// const Container = styled.div`
//   .bar:hover {
//   }
// `
interface Prop {
  imageSrc: string
}

const WorkWeb = ({ imageSrc }: Prop) => {
  return (
    <div className="web">
      {/* 익스플로러 창 모양 */}
      <div
        className="flex h-7 items-center space-x-1 rounded-t-xl bg-gray-200 pl-3"
        // bis_skin_checked="1"
      >
        <span className="red h-2 w-2 rounded-full bg-white hover:bg-red-500"></span>
        <span className="yellow hover h-2 w-2 rounded-full bg-white hover:bg-yellow-300"></span>
        <span className="green h-2 w-2 rounded-full bg-white hover:bg-green-500"></span>
      </div>
      <div className="h-auto w-full overflow-hidden rounded-b-xl bg-blue-200">
        <Image
          src={imageSrc}
          alt="work image"
          layout="responsive"
          width={500}
          height={500}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </div>
  )
}

export default WorkWeb
