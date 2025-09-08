"use client";

import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen bg-[#F9F6F1] px-6 md:px-12 lg:px-20 py-20 text-center">
      <div className="bg-white rounded-2xl p-10 max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-playfair text-[#5D623C] mb-3">Thank you for your order!</h1>
        <p className="text-[#777] font-inter mb-6">Your order has been placed successfully. We\'ll send you a confirmation email shortly.</p>
        <div className="flex gap-3 justify-center">
          <Link href="/products" className="bg-[#C99A3D] text-white px-5 py-3 rounded-lg font-inter font-semibold hover:bg-[#a87e2f] transition-colors">Continue Shopping</Link>
          <Link href="/" className="border border-gray-300 px-5 py-3 rounded-lg font-inter font-semibold text-[#5D623C] hover:bg-gray-50 transition-colors">Go to Home</Link>
        </div>
      </div>
    </div>
  );
}


