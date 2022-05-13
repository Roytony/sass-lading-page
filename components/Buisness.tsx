import Image from 'next/image'

const Buisness = () => {
  return (
    <section className="relative ">
      <img src="/Vector 1578.svg" className="absolute -z-10 w-full" />
      <div className="absolute" />
      <div className="mx-auto flex h-80 w-[60%] flex-col items-center justify-center rounded-md bg-[url('/bridge.jpg')] bg-cover ">
        <h1 className="text-4xl font-semibold text-white">
          Push your Product to next level
        </h1>
        <p className="py-2  text-center text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <br /> Beatae fugit quae error culpa nihil ipsum ipsam explicabo
          aspernatur ad nemo?
        </p>
        <button className="my-2 rounded-lg bg-[#F57059] px-10 py-4 text-white">
          Get Started
        </button>
      </div>
      <div className="mx-auto mt-20">
        <h1 className="text-center text-5xl font-bold ">
          We help your buisness grow faster
        </h1>
        <p className="py-6 text-center">
          Why kept very ever home mrs. Considered sympathize ten
          <br /> uncommonly occasional assistance sufficient.
        </p>
      </div>
      <div className="mx-6 mt-24 grid  grid-cols-3 gap-10">
        <BusinessCard
          img={'/icons/Group-1.svg'}
          title="offer belonging"
          para="Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as."
        />
        <BusinessCard
          img={'/icons/Group.svg'}
          title="Promotion & Provision"
          para="Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as."
        />
        <BusinessCard
          img={'/icons/Vector.svg'}
          title="Blessing application"
          para="Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as."
        />
      </div>
      <div className="flex items-center justify-center pt-16">
        <button className=" rounded-lg bg-[#F57059] px-10 py-4 text-white ">
          More about platoform
        </button>
      </div>
    </section>
  )
}

interface BuisnessProps {
  img: string
  title: string
  para: string
}

const BusinessCard = ({ img, title, para }: BuisnessProps) => (
  <article className="rounded-xl bg-white p-5 py-10">
    <Image src={img} width={50} height={50} />
    <h3 className="py-4 text-2xl font-semibold">{title}</h3>
    <p className="text-md py-4 leading-7 text-gray-800 ">{para}</p>
    <a className="text-green-600" href="#">
      Read more
    </a>
  </article>
)

export default Buisness
