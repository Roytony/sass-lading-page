const WhyUs = () => {
  return (
    <section className="mt-10 flex h-[400px] w-full items-center justify-between bg-[#05796B] px-24 text-white">
      <div>
        <p className="text-sm font-bold">Why Choose us</p>
        <h1 className="text-5xl font-bold leading-normal">
          Track Your Crypto
          <br />
          Portfolio on the <br />
          best way Possible
        </h1>
        <p className="py-4 text-lg">
          Mean if he they been no hold mr. Is at much do made.
          <br /> Latter person am secure of estate genius at.
        </p>
      </div>
      <div className="flex flex-col space-y-4">
        <input className="px-6 py-4" placeholder="Email Address" />
        <input className="px-6 py-4" placeholder="Password" />
        <button className="bg-[#F57059] px-6 py-4">Get Started</button>
      </div>
    </section>
  )
}

export default WhyUs
