import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const HomeHero = () => {
  let navigate=useNavigate()
  return (
    <section className="max-w-7xl mx-auto mt-5">
      <div className="relative overflow-hidden rounded-[35px] border border-neutral-700 bg-[#111111]">

        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 flex justify-between items-center px-12 py-10">

          {/* Left Side */}
          <div className="max-w-2xl">

            <p className="text-lime-400 uppercase tracking-widest text-lg mb-3">
              GOOD MORNING 👋
            </p>

            <h1 className="text-5xl font-bold leading-tight text-white">
              Welcome back,
              <br />
              <span className="text-lime-400">babita!</span>
            </h1>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              Discover today's picks — hand-curated products across
              electronics, fashion, and more.
            </p>

            <div className="flex gap-5 mt-7">

              <button onClick={()=>{
                navigate('/main/shop')
              }} className="bg-lime-400 text-black px-4 py-2 rounded-2xl font-semibold text-md flex items-center  cursor-pointer gap-3 hover:scale-105 duration-300">
                Shop Now
                <ArrowRight size={18} />
              </button>

              <button onClick={()=>{
                navigate('/main/shop')
              }} className="border border-neutral-700 text-white px-5 py-2 rounded-2xl text-md hover:border-lime-400  cursor-pointer duration-300">
                View All Products
              </button>

            </div>

          </div>

          {/* Right Side Cards */}
          <div className="flex flex-col gap-6">

            <div className="bg-lime-400/10 border border-lime-700 rounded-3xl w-60 h-25 flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold text-lime-400">
                20+
              </h2>

              <p className="text-gray-300 mt-2 text-md">
                Products Available
              </p>
            </div>

            <div className="border border-gray-500 rounded-3xl w-60 h-25 flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold text-white">
                Free
              </h2>

              <p className="text-gray-400 mt-2 text-md">
                Delivery on ₹999+
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeHero;