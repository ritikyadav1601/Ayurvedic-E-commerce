import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const categories = [
  { name: "Immunity Boosters", image: "/Immunity.jpg" },
  { name: "Daily Wellness", image: "/DailyWellness.jpg" },
  { name: "Digestive Health", image: "/Digestive.jpg" },
  { name: "Energy & Vitality", image: "/Energy.jpg" },
  { name: "Stress Relief & Sleep", image: "/Relief.jpg" },
  { name: "Skin & Hair Care", image: "/Hair.jpg" },
  { name: "Healthy Life", image: "/HealthyLife.jpg" },
  { name: "Active Mind", image: "/ActiveMinds.jpg" },
]

const CategoryPage = () => {
  return (
    <div className="bg-[#F5F5E5]  py-10 px-5 md:px-20">
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-6xl font-playfair text-[#C99A3D]">
          Explore Our Herbal Collections
        </h1>
        <p className="text-sm md:text-xl font-inter text-[#5C6B57] mt-3">
          Natural remedies for every aspect of your health
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div key={index} className=" group bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className='relative w-full h-48 md:h-60'>
              <Image 
              src={category.image} 
              alt={category.name} 
              fill
              className="object-cover transition-transform duration-300 md:group-hover:scale-110"
            />
            </div>
            
            <div className="p-5 text-center">
              <h2 className="text-sm md:text-2xl font-playfair text-[#C99A3D]">{category.name}</h2>
              <Link href="/">
                <button className="text-[10px] md:text:md mt-3 bg-[#C99A3D] text-white px-3 py-1 md:px-6 md:py-2 rounded-md font-inter hover:bg-[#A87B2F] transition-colors">
                  Explore Products
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryPage
