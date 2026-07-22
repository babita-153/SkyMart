const Footer = () => {
  return (
    <div className="border-t sticky-bottom-0  border-neutral-800 bg-[#0D0D0D]">
        <hr />
      <div className="max-w-7xl mx-auto py-5 flex flex-col items-center justify-center">
        {/* Logo */}
        <h2 className="text-xl md:text-xl font-semibold">
          <span className="text-white">Sky</span>
          <span className="text-lime-400">Mart</span>
        </h2>

        {/* Copyright */}
        <p className="mt-3 text-sm md:text-base text-gray-500 text-center">
          © 2025 SkyMart • Built with React + Redux + TanStack Query
        </p>
      </div>
    </div>
  );
};

export default Footer;