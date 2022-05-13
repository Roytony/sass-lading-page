import { TiTick } from 'react-icons/ti'

const Hero = () => {
  return (
    <div className="pt-32">
      <div>
        <p className="text-xl font-semibold">
          {' '}
          Product growth solution in single platform
        </p>
        <h1 className="text-6xl font-semibold leading-normal">
          Managing Buisness <br />
          Payments has never <br />
          been easier
        </h1>
        <p className="w-[40%] leading-6 text-[#757095]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ipsa
          est autem accusantium repellat eveniet! Quisquam, aspernatur ducimus.
          Qui adipisci cupiditate ullam repudiandae voluptate vel deserunt. Vero
          nihil beatae voluptates, maxime deleniti, porro eos rerum, ducimus
          repellat fuga atque temporibus.
        </p>
        <div className="mt-4 flex w-[30%] justify-between rounded-md bg-white p-4 shadow-md">
          <div>
            <p className="text-sm text-gray-500">
              Register using email address
            </p>
            <input className="focus:outline-none" placeholder="abc@gmail.com" />
          </div>
          <button className="rounded-md bg-[#1B1C31] px-8 py-2 font-bold text-white">
            Submit
          </button>
        </div>
        <div className="flex py-4">
          <div className="flex items-center space-x-2">
            <TiTick className="text-orange-500" />
            <p>Free Register</p>
          </div>
          <div className="flex items-center space-x-2">
            <TiTick className="text-orange-500" />
            <p>Great Service</p>
          </div>
        </div>
      </div>
      {/* <Image src="/hero.svg" width={800} height={800} /> */}
    </div>
  )
}

export default Hero
