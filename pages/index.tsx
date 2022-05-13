import type { NextPage } from 'next'
import Head from 'next/head'
import AppLinks from '../components/AppLinks'
import Blogs from '../components/Blogs'
import Buisness from '../components/Buisness'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonial'
import WhyUs from '../components/WhyUs'

const Home: NextPage = () => {
  return (
    <div className="relative flex min-h-screen flex-col ">
      <Head>
        <title>Sass Landing page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src="/Vector 1580.svg" className="absolute" />
      <img src="/hero.svg" className="absolute right-0" />
      <main className="z-10 min-h-screen px-24 py-10">
        <Header />
        <Hero />
      </main>
      <div className="px-24 py-10">
        <Buisness />
        <Testimonials />
        <AppLinks />
        <Blogs />
        <WhyUs />
      </div>
    </div>
  )
}

export default Home
