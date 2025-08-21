'use client';
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#F9F6EE] p-4 md:px-10">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <Link href="/" className="font-playfair text-2xl md:text-3xl font-semibold text-[#C99A3D]">
          AYURVEDA
        </Link>

        {/* Desktop Menu Links */}
        <nav className="hidden md:flex gap-8 font-inter font-semibold text-[#5C6B57]">
          <Link href='/' className='hover:text-[#C99A3D] transition-colors'>Home</Link>
          <Link href='/products' className='hover:text-[#C99A3D] transition-colors'>Products</Link>
          <Link href='/about' className='hover:text-[#C99A3D] transition-colors'>About</Link>
          <Link href='/contact' className='hover:text-[#C99A3D] transition-colors'>Contact</Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href='/cart'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-[#5C6B57] hover:text-[#C99A3D] transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </Link>
          <Link href='/auth' className='font-inter font-semibold hover:text-[#C99A3D] transition-colors'>
            Login / SignUp
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#5C6B57]">
          {menuOpen ? (
            // close icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // hamburger icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Links */}
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-4 md:hidden font-inter font-semibold text-[#5C6B57]">
          <Link href='/' onClick={() => setMenuOpen(false)} className='hover:text-[#C99A3D] transition-colors'>Home</Link>
          <Link href='/products' onClick={() => setMenuOpen(false)} className='hover:text-[#C99A3D] transition-colors'>Products</Link>
          <Link href='/about' onClick={() => setMenuOpen(false)} className='hover:text-[#C99A3D] transition-colors'>About</Link>
          <Link href='/contact' onClick={() => setMenuOpen(false)} className='hover:text-[#C99A3D] transition-colors'>Contact</Link>
          <Link href='/blog' onClick={() => setMenuOpen(false)} className='hover:text-[#C99A3D] transition-colors'>Blog</Link>

          <div className="flex gap-6 items-center mt-2">
            <Link href='/cart' onClick={() => setMenuOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </Link>
            <Link href='/auth' onClick={() => setMenuOpen(false)} className='hover:text-[#C99A3D] transition-colors'>
              Login / SignUp
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header
