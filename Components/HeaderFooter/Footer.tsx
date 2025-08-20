import React, { FC } from 'react'
import Link from 'next/link'

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
          <ul className="space-y-2 font-inter text-[#5D623C] md:text-[16px] text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Helpful Links */}
        <div>
          <h4 className="text-[16px] md:text-lg font-playfair text-[#C99A3D] mb-3">Helpful Links</h4>
          <ul className="space-y-2 font-inter text-[#5D623C] md:text-[16px] text-sm">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/shipping-returns">Shipping & Returns</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-[16px] md:text-lg font-playfair text-[#C99A3D] mb-3">Contact</h4>
          <p className="font-inter text-[#5D623C] md:text-[16px] text-sm">Email: support@ayurvedastore.com</p>
          <p className="font-inter text-[#5D623C] md:text-[16px] text-sm">Phone: +91 9876543210</p>
          <p className="font-inter text-[#5D623C] mt-2 md:text-[16px] text-sm">123 Herbal Street, New Delhi, India</p>
        </div>
      </div>

      <div className="text-center mt-10 text-[#5D623C] font-inter">
        © 2025 AyurvedaStore. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
