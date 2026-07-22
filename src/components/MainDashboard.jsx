import React from 'react'

const MainDashboard = () => {
  return (
    
       <div className=" lg:flex w-1/2 flex-col gap-5 justify-center px-16 border-r border-gray-800">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-lime-400 flex items-center justify-center">
            <span className="text-black text-xl font-bold">⚡</span>
          </div>
          <h1 className="text-2xl text-white font-bold">
            Sky <span className="text-lime-400">Mart</span>
          </h1>
        </div>

        <p className="uppercase text-lime-400 text-xl tracking-widest font-semibold">
          Welcome Back
        </p>

        <h2 className="lg:text-5xl md:text-3xl font-bold text-white leading-tight">
          Shop the future.
          <br />
          <span className="text-lime-400">Today.</span>
        </h2>

        <p className="text-gray-400  max-w-lg text-md">
          Thousands of products, lightning-fast delivery, and prices that make
          your wallet happy.
        </p>

        <div className="grid grid-cols-3 gap-6">
          {[
            ["20K+", "Products"],
            ["50K+", "Users"],
            ["4.9★", "Rating"],
          ].map(([num, text]) => (
            <div
              key={text}
              className="border border-gray-700 rounded-3xl p-4 text-center"
            >
              <h3 className="text-2xl font-bold text-lime-400">{num}</h3>
              <p className="text-gray-400 mt-2">{text}</p>
            </div>
          ))}
        </div>
      </div>

  )
}

export default MainDashboard
