import WorkWeb from './WorkWeb'

const MyWorks = () => {
  return (
    <section className="my-10 ">
      <h1 className={`text-3xl font-extrabold`}>Explore my works</h1>
      <div className="mt-4 flex flex-wrap justify-between gap-1">
        <WorkWeb imageSrc="/luka.gif" />
        <WorkWeb imageSrc="/luka.gif" />
        <WorkWeb imageSrc="/luka.gif" />
      </div>
    </section>
  )
}

export default MyWorks
