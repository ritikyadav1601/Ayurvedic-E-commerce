import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface BlogCard {
  title: string
  description: string
  image: string
  slug: string
}

const blogs: BlogCard[] = [
  {
    title: "Top 5 Ayurvedic Herbs for Daily Use",
    description: "Discover the most powerful herbs that support overall health & wellness in your day-to-day life.",
    image: "/blog.jpg",
    slug: "/blogs/herbs-for-daily-use"
  },
  {
    title: "How Ayurveda Boosts Immunity Naturally",
    description: "Learn how Ayurvedic remedies and natural formulations strengthen your immune system effectively.",
    image: "/blog2.jpg",
    slug: "/blogs/ayurveda-for-immunity"
  },
  {
    title: "Holistic Skin Care the Ayurvedic Way",
    description: "Explore natural skin care routines and ingredients used in Ayurveda for glowing, healthy skin.",
    image: "/blog3.jpg",
    slug: "/blogs/ayurvedic-skin-care"
  }
]

const BlogSection: FC = () => {
  return (
    <div className="bg-[#fffdf3] py-14 px-5 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-5xl font-playfair text-[#C99A3D]">
          Ayurvedic Tips & Guides
        </h2>
        <p className="text-sm md:text-lg font-inter text-[#C99A3D] mt-2">
          Learn how to live healthier – naturally
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className='relative w-full h-52'>
              <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
            </div>
            
            <div className="p-5">
              <h3 className="text-sm md:text-xl font-playfair text-[#C99A3D] mb-2">{blog.title}</h3>
              <p className="text-[10px] md:text-sm font-inter text-[#5D623C] mb-4">
                {blog.description}
              </p>
              <Link href={blog.slug}>
                <span className="text-[#C99A3D] text-[10px] md:text-[16px] font-inter underline cursor-pointer">
                  Read More →
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogSection
