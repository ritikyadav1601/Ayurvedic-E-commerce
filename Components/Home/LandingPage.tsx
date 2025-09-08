"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react'

const LandingPage = () => {
  const slides = useMemo(() => ([
    {
      src: '/landing-page.png',
      heading: 'Rediscover Health with Ayurveda',
      subtext: 'Ancient healing for today’s lifestyle',
    },
    {
      src: '/product.jpg',
      heading: 'Natural Remedies, Real Results',
      subtext: 'Crafted from time-tested Ayurvedic ingredients',
    },
    {
      src: '/product2.jpg',
      heading: 'Balance Body, Mind, and Spirit',
      subtext: 'Personalized wellness for modern living',
    },
  ]), []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const total = slides.length;

  const goTo = (idx: number) => setCurrentIndex((idx + total) % total);
  const next = () => goTo(currentIndex + 1);
  const prev = () => goTo(currentIndex - 1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIdx) => (prevIdx + 1) % total);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [total]);

  return (
    <div className="relative w-full h-[50vh] md:h-[57vh] overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={idx !== currentIndex}
        >
          <Image
            src={slide.src}
            alt={slide.heading}
            fill
            className="object-cover"
            priority={idx === 0}
          />
        </div>
      ))}

      <div className='absolute top-20 left-10 md:top-35 md:left-15 lg:left-30 z-50 md:w-180 w-50'>
        <div className='text-xl  md:text-7xl font-playfair text-[#C99A3D]  '>{slides[currentIndex].heading}</div>
        <div className='text-md md:text-2xl font-inter text-[#5C6B57] md:my-5 my-2'>{slides[currentIndex].subtext}</div> 
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

      <div className="absolute inset-x-0 bottom-4 z-50 flex items-center justify-between px-4">
        <button
          aria-label="Previous slide"
          onClick={prev}
          className="bg-black/40 text-white rounded-full px-3 py-2 hover:bg-black/60 transition-colors"
        >
          ‹
        </button>
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 w-2 rounded-full transition-all ${i === currentIndex ? 'bg-[#C99A3D] w-6' : 'bg-white/70 hover:bg-white'}`}
            />
          ))}
        </div>
        <button
          aria-label="Next slide"
          onClick={next}
          className="bg-black/40 text-white rounded-full px-3 py-2 hover:bg-black/60 transition-colors"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default LandingPage
