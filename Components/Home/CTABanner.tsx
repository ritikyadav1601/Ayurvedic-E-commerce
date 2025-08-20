import React, { FC } from 'react'

const CTABanner: FC = () => {
  return (
    <div className="bg-[#C99A3D] text-white py-12 px-5 md:px-20">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-xl md:text-4xl font-playfair mb-4">
          Start Your Wellness Journey Today
        </h2>
        <p className="text-sm md:text-lg font-inter mb-6">
          Subscribe to get exclusive Ayurvedic health tips, offers and new product updates directly in your inbox.
        </p>

        <div className="flex flex-row justify-center gap-1 md:gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3  rounded-md text-black w-full sm:w-auto flex-1 border border-white "
          />
          <button className="bg-white text-[#C99A3D] px-6 py-3 rounded-md font-inter hover:bg-gray-200 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default CTABanner
