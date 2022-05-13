import Image from 'next/image'

const Blogs = () => {
  return (
    <section>
      <div className="mt-80 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Our Latest Blog Posts</h1>
        <button className="rounded-md bg-[#F57059] px-6 py-4 text-white">
          See All Blog Posts
        </button>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-10">
        <Blog />
        <Blog />
        <div className="grid grid-rows-4 gap-2">
          <SmallBlog />
          <SmallBlog />
          <SmallBlog />
          <SmallBlog />
        </div>
      </div>
    </section>
  )
}

const Blog = () => (
  <article>
    <Image
      src="https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg?auto=compress&cs=tinysrgb&w=1600"
      width={600}
      objectFit="cover"
      height={300}
      className="rounded-xl"
    />
    <h3 className="text-2xl font-semibold">
      Believing neglected so so allowance existence departure.
    </h3>
    <p className="text-sm leading-6 text-gray-800">
      Blessing welcomed ladyship she met humoured sir breeding her. Six
      curiosity day assurance bed necessary.
    </p>
  </article>
)

const SmallBlog = () => {
  return (
    <article className="flex space-x-4 divide-y-2">
      <Image
        src="https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg?auto=compress&cs=tinysrgb&w=1600"
        width={150}
        objectFit="cover"
        height={60}
        className="rounded-xl"
      />
      <h2 className="text-xl font-semibold">
        Partiality on or continuing in particular principles
      </h2>
    </article>
  )
}

export default Blogs
