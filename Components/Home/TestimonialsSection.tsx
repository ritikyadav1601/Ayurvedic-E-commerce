import React, { FC } from 'react'
import Image from 'next/image'

interface Testimonial {
  name: string
  feedback: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: "Riya Sharma",
    feedback:
      "These herbal products have become part of my daily routine. I feel more energetic and balanced!",
    image: "/testimonial.jpg"
  },
  {
    name: "Amit Verma",
    feedback:
      "The digestive tonic helped me a lot. I truly trust their natural quality and purity.",
      image: "/testimonial2.jpg"
  },
  {
    name: "Sneha Kapoor",
    feedback:
      "Great results and great taste! Absolutely love the stress relief tea.",
    image: "/testinomial3.jpg"
  }
]

const TestimonialsSection: FC = () => {
  return (
    <div className="bg-[#fffdf3] py-14 px-5 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-5xl font-playfair text-[#C99A3D]">
          What Our Customers Say
        </h2>
        <p className="text-sm md:text-lg font-inter text-[#C99A3D] mt-2">
          Real stories, real results
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-[#F5F5E5] p-3 md:p-8 rounded-xl shadow-md text-center"
          >
            <div className="mx-auto mb-4 w-24 h-24 relative">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <p className="font-inter text-[10px] md:text-[16px] text-[#5D623C] mb-2 md:mb-4">"{item.feedback}"</p>
            <h4 className="font-playfair text-sm md:text-lg text-[#C99A3D]">{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialsSection
