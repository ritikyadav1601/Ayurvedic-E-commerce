import React, { FC } from 'react'
import { CheckCircle } from 'lucide-react'


const benefits: string[] = [
  "100% Natural Ingredients",
  "Doctor-approved Formulas",
  "Cruelty Free & Eco-Friendly",
  "Trusted by thousands of customers",
]

const WhyChooseUs: FC = () => {
  return (
    <div className="bg-[#F5F5E5] py-12 px-5 md:px-20">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-5xl font-playfair text-[#5D623C]">Why Choose Us</h2>
        <p className="text-sm md:text-lg font-inter text-[#707B5B] mt-2">
          Experience the purity of Ayurveda with unmatched quality
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-2 gap-2 md:gap-6">
        {benefits.map((item: string, index: number) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md flex items-center p-4 md:p-5"
          >
            <CheckCircle className="text-[#5D623C] mr-3" />
            <p className="text-[11px] md:text-[16px] font-inter text-[#5D623C]">{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUs
