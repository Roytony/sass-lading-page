import Image from 'next/image'

const Testimonials = () => {
  return (
    <section className="mt-64">
      <h2 className="text-center font-semibold text-blue-900">Testimonials</h2>
      <h1 className="text-center text-2xl font-semibold">
        Check what our clients are saying{' '}
      </h1>
      <div className="mx-auto mt-10 flex w-[80%] items-center justify-between">
        <Image src="/image 61.svg" width={400} height={600} />

        <div className="w-[50%]">
          <Image src="/icons/appo.svg" width={50} height={50} />
          <div className="flex space-x-5 py-4">
            <Image src="/icons/Star 6.svg" width={30} height={30} />
            <Image src="/icons/Star 6.svg" width={30} height={30} />
            <Image src="/icons/Star 6.svg" width={30} height={30} />
            <Image src="/icons/Star 6.svg" width={30} height={30} />
            <Image src="/icons/Star 6.svg" width={30} height={30} />
          </div>
          <p className="text-3xl font-bold leading-normal">
            Is be upon sang fond must shew. Really boy law county she unable her
            sister. Feet you off its like like six. Among sex are leave law
            built now.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
