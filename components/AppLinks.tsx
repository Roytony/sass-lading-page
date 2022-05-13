import { FaGooglePlay } from 'react-icons/fa'
import { BsApple } from 'react-icons/bs'

const AppLinks = () => {
  return (
    <section className="relative mt-96 flex flex-col items-center justify-center">
      <img src="/icons/Vector 1579.svg" className="absolute -z-10 w-full" />
      <div>
        <p className="text-center font-bold text-[#F57059]">
          Project Management App
        </p>
        <h1 className="py-4 text-center text-4xl font-semibold leading-normal">
          Download Our app and start your free <br />
          trail to get started today
        </h1>
        <p className="text-xl text-gray-600">
          End-to-end payments and financial management in a single solution.
        </p>
        <div className="mt-5 flex items-center justify-center space-x-4 text-white">
          <button className="flex items-center space-x-2 rounded-md  bg-[#F57059] py-2 px-8">
            <FaGooglePlay />
            <p>Google Play</p>
          </button>
          <button className="flex items-center  space-x-2 rounded-md bg-[#05796B] py-2 px-8">
            <BsApple />
            <p>Playstore</p>
          </button>
        </div>
      </div>
    </section>
  )
}

export default AppLinks
