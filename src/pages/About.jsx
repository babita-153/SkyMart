import { ArrowRight, MoveRight, PackageSearch, Star, UserStar, Van, Zap } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <div className='px-20 py-10 flex flex-col  gap-20'>
    <div className='flex flex-col gap-5 align-center items-center'>
      <div className="w-12 h-12 rounded-xl bg-lime-400 flex items-center justify-center">
            <Zap className="text-black w-9 h-9 fill-black" />
      </div>
      <h1 className=' font-semibold text-black text-6xl'>About <span className='text-lime-400 text-6xl'>SkyMart</span></h1>
      <p className='text-2xl  text-center text-gray-500'>SkyMart is a next-generation e-commerce platform built to make online shopping fast, fair, and enjoyable — for everyone.</p>
      <div className='flex gap-20  '>
        <div className=' bg-black p-3 border-white flex items-center justify-center rounded-2xl text-white font-semibold h-25  w-50 flex-col border-2'>
        <Star />
        <h1 className='text-2xl font-bold text-lime-400'>4.9 </h1>
        <p>Avg.Rating</p>
      </div>
         <div className=' bg-black p-3 border-white flex items-center justify-center rounded-2xl text-white font-semibold h-25  w-50 flex-col border-2'>
        <UserStar />
        <h1 className='text-2xl font-bold text-lime-400'>50k+ </h1>
        <p>Happy Customers</p>
      </div>
          <div className=' bg-black p-3 border-white flex items-center justify-center rounded-2xl text-white font-semibold h-25  w-50 flex-col border-2'>
        <PackageSearch />
        <h1 className='text-2xl font-bold text-lime-400'>20k+ </h1>
        <p>Products</p>
      </div>
          <div className=' bg-black p-3 border-white flex items-center justify-center rounded-2xl text-white font-semibold h-25  w-50 flex-col border-2'>
        <Van />
        <h1 className='text-2xl font-bold text-lime-400'>99% </h1>
        <p>On time Delivery</p>
      </div>
      </div>
    </div>

    <div className='border-2 border-lime-400 p-5 flex flex-col gap-2 rounded-xl'>
      <h1 className='text-2xl font-bold text-lime-400'>Our Story</h1>
      <p className='text-black font-semibold'>SkyMart started in 2022 as a small side project — two engineers tired of bloated, slow e-commerce experiences. We asked ourselves: what if shopping online was actually enjoyable?
<br /> <br />
Three years later, SkyMart serves over 50,000 customers across the country. We stock electronics, fashion, jewelry, and everyday essentials — all at prices that don't require a second mortgage.
<br /><br />
We're still the same team at heart: obsessed with speed, transparency, and making you feel good about every purchase you make here.</p>
    </div>

<section className="">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-black text-center mb-14">
      What We Stand For
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Card 1 */}
      <div className="border border-gray-700 rounded-3xl p-8 flex gap-6 hover:border-lime-400 transition">
        <div className="w-16 h-16 rounded-2xl bg-lime-900/40 flex items-center justify-center">
          <span className="text-lime-400 text-3xl">🛡️</span>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-white mb-3">Trust</h3>
          <p className="text-gray-400 text-lg leading-8">
            Every product is verified for quality and authenticity before
            listing.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="border border-gray-700 rounded-3xl p-8 flex gap-6 hover:border-lime-400 transition">
        <div className="w-16 h-16 rounded-2xl bg-lime-900/40 flex items-center justify-center">
          <span className="text-lime-400 text-3xl">🚚</span>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-white mb-3">Speed</h3>
          <p className="text-gray-400 text-lg leading-8">
            We obsess over delivery times so your orders arrive when promised.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="border border-gray-700 rounded-3xl p-8 flex gap-6 hover:border-lime-400 transition">
        <div className="w-16 h-16 rounded-2xl bg-lime-900/40 flex items-center justify-center">
          <span className="text-lime-400 text-3xl">💚</span>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-white mb-3">Community</h3>
          <p className="text-gray-400 text-lg leading-8">
            Built around real customer feedback, not just business metrics.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="border border-gray-700 rounded-3xl p-8 flex gap-6 hover:border-lime-400 transition">
        <div className="w-16 h-16 rounded-2xl bg-lime-900/40 flex items-center justify-center">
          <span className="text-lime-400 text-3xl">⭐</span>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-white mb-3">Quality</h3>
          <p className="text-gray-400 text-lg leading-8">
            We curate the best — no filler, no junk, just great products.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-black text-center mb-12">
      Meet the Team
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {/* Card */}
      <div className="bg-[#111111] border border-gray-700 rounded-3xl p-6 flex flex-col items-center hover:border-lime-400 transition">
        <div className="w-12 h-12 rounded-2xl bg-lime-400 flex items-center justify-center text-3xl font-bold text-black">
          A
        </div>

        <h3 className="mt-3 text-xl font-semibold text-white">
          Aryan Shah
        </h3>

        <p className="mt-1 text-gray-500 text-sm">
          Founder & CEO
        </p>
      </div>

      {/* Card */}
      <div className="bg-[#111111] border border-gray-700 rounded-3xl p-6 flex flex-col items-center hover:border-lime-400 transition">
        <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-3xl font-bold text-white">
          P
        </div>

        <h3 className="mt-3 text-xl font-semibold text-white ">
          Priya Mehta
        </h3>

        <p className="mt-1 text-gray-500 text-sm">
          Head of Product
        </p>
      </div>

      {/* Card */}
      <div className="bg-[#111111] border border-gray-700 rounded-3xl p-6 flex flex-col items-center hover:border-lime-400 transition">
        <div className="w-12 h-12 rounded-2xl bg-purple-500 flex items-center justify-center text-3xl font-bold text-white">
          R
        </div>

        <h3 className="mt-5 text-xl font-semibold text-white">
          Rohan Verma
        </h3>

        <p className="mt-1 text-gray-500 text-sm">
          Lead Engineer
        </p>
      </div>

      {/* Card */}
      <div className="bg-[#111111] border border-gray-700 rounded-3xl p-6 flex flex-col items-center hover:border-lime-400 transition">
        <div className="w-12 h-12 rounded-2xl bg-rose-500 flex items-center justify-center text-3xl font-bold text-white">
          S
        </div>

        <h3 className="mt-5 text-xl font-semibold text-white">
          Sneha Kapoor
        </h3>

        <p className="mt-1 text-gray-500 text-sm">
          Design Director
        </p>
      </div>
    </div>
  </div>
</section>

<section>
  <div className='bg-black border-2 flex flex-col items-center justify-center gap-5 rounded-2xl border-white p-10'>
    <h1 className='text-white text-xl'>Ready to shop?</h1>
    <p className='text-white'>Explore thousands of products at unbeatable prices.</p>
    <button onClick={()=>{
                navigate('/main/shop')
              }} className="bg-lime-400 text-black px-4 py-2 rounded-2xl font-semibold text-lg flex items-center  cursor-pointer gap-3 hover:scale-105 duration-300">
                Shop Now
                <ArrowRight size={18} />
              </button>

  </div>
</section>
    </div>
  )
}

export default About
