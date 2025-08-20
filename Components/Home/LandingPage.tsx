import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const LandingPage = () => {
  return (
    <div className="relative w-full h-[50vh] md:h-[57vh]">
      <Image
        src="/landing-page.png"
        alt="Landing Page Image"
        fill
        className="object-cover"
        priority
      />

      <div className='absolute top-20 left-10 md:top-35 md:left-30 z-50 md:w-180 w-50'>
        <div className='text-xl  md:text-7xl font-playfair text-[#C99A3D]  '>Rediscover Health with Ayurveda</div>
        <div className='text-md md:text-2xl font-inter text-[#5C6B57] md:my-5 my-2'>Ancient healing for today’s lifestyle</div> 
        <div className='flex flex-col md:flex-row gap-2 md:gap-4 md:mt-5'> 
            <Link href="/">
            <button className='bg-[#C99A3D] text-white  p-1 md:px-6 md:py-2 text-sm md:text-md font-inter rounded-md md:font-semibold hover:bg-[#A87B2F] transition-colors'>
                Explore Now
            </button>
        </Link>
        <Link href="/">
            <button className='bg-[#C99A3D] text-white  p-1 md:px-6 md:py-2 text-sm md:text-md font-inter rounded-md md:font-semibold hover:bg-[#A87B2F] transition-colors'>
                Buy Now
            </button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage
