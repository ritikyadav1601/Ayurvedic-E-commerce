import React, { FC } from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Footer: FC = () => {
  return (
    <div className="bg-[#F5F5E5] px-5 md:px-20 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8">
        {/* Brand / About */}
        <div className="sm:col-span-1">
          <h3 className="text-lg md:text-xl font-playfair text-[#C99A3D] mb-4">AYURVEDA STORE</h3>
          <p className=" text-sm md:text-[16px] font-inter text-[#5D623C]">
            Bringing you the ancient wisdom of Ayurveda through pure and natural products for your holistic wellness.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[16px] md:text-lg font-playfair text-[#C99A3D] mb-3">Quick Links</h4>
          <ul className="space-y-2 font-inter text-[#5D623C] md:text-[16px] text-sm ">
            <li><Link className='hover:text-[#C99A3D] transition-colors' href="/">Home</Link></li>
            <li><Link className='hover:text-[#C99A3D] transition-colors' href="/categories">Categories</Link></li>
            <li><Link className='hover:text-[#C99A3D] transition-colors' href="/about">About Us</Link></li>
            <li><Link className='hover:text-[#C99A3D] transition-colors' href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Helpful Links */}
        <div>
          <h4 className="text-[16px] md:text-lg font-playfair text-[#C99A3D] mb-3">Helpful Links</h4>
          <ul className="space-y-2 font-inter text-[#5D623C] md:text-[16px] text-sm">
            <li><Link className='hover:text-[#C99A3D] transition-colors' href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link className='hover:text-[#C99A3D] transition-colors' href="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><Link className='hover:text-[#C99A3D] transition-colors' href="/faq">FAQ</Link></li>
            <li><Link className='hover:text-[#C99A3D] transition-colors' href="/shipping-returns">Shipping & Returns</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="flex text-[16px] md:text-lg font-playfair text-[#C99A3D] mb-3">
            Connect with Us
          </h4>

          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/ayurvedastore"
              target="_blank"
              className="text-[#5D623C] hover:text-[#C99A3D] transition-colors"
            >
              <FaFacebookF size={22} />
            </Link>

            <Link
              href="https://www.instagram.com/ayurvedastore"
              target="_blank"
              className="text-[#5D623C] hover:text-[#C99A3D] transition-colors"
            >
              <FaInstagram size={22} />
            </Link>

            <Link
              href="https://www.twitter.com/ayurvedastore"
              target="_blank"
              className="text-[#5D623C] hover:text-[#C99A3D] transition-colors"
            >
              <FaSquareXTwitter size={22} />
            </Link>

            <Link
              href="https://www.linkedin.com/company/ayurvedastore"
              target="_blank"
              className="text-[#5D623C] hover:text-[#C99A3D] transition-colors"
            >
              <FaLinkedinIn size={22} />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-[#5D623C] font-inter">
        © 2025 AyurvedaStore. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
