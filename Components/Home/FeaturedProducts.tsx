import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const products = [
  { name: "Herbal Immunity Tonic", price: "₹299", image: "/product.jpg" },
  { name: "Digestive Care Powder", price: "₹249", image: "/product2.jpg" },
  { name: "Stress Relief Tea", price: "₹199", image: "/product3.jpg" },
  { name: "Stress Relief Tea ", price: "₹199", image: "/product4.jpg" },
]

const FeaturedProducts = () => {
  return (
    <div className="bg-[#fffdf3] py-12 px-5 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-5xl font-playfair text-[#5D623C]">Best Sellers</h2>
        <p className="text-sm md:text-lg font-inter text-[#707B5B] mt-2">
          Our most loved Ayurvedic products
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-transform duration-100">
            <div className='relative w-full h-48 md:h-60'>
              <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300 "
            />
            </div>
            
            <div className="p-2 md:p-5 text-center">
              <h3 className="text-sm md:text-xl font-playfair text-[#5D623C]">{product.name}</h3>
              <p className="text-sm md:ext-lg font-inter text-[#7F8E6C] mt-1 md:mt-2">{product.price}</p>
              <button className="text-[10px] mt-1 md:mt-3 bg-[#5D623C] text-white px-3 py-1 md:px-5 md:py-2 rounded-md font-inter hover:bg-[#475338] transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
