"use client";

import React, { FC, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Ayurveda?",
    answer:
      "Ayurveda is a holistic system of medicine that originated in India over 5,000 years ago, focusing on balance between mind, body, and spirit.",
  },
  {
    question: "Are your products safe?",
    answer:
      "Yes, all our products are made from natural ingredients, tested for quality, and follow Ayurvedic principles for safety and effectiveness.",
  },
  {
    question: "How do I choose the right product?",
    answer:
      "Our experts can guide you in choosing the right Ayurvedic remedy based on your unique body type (dosha) and health needs.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we provide worldwide shipping so you can experience Ayurveda no matter where you are.",
  },
];

const FAQ: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-playfair text-[#C99A3D] mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-[#5D623C] font-inter text-base md:text-lg">
          Find answers to the most common questions about Ayurveda and our products.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-[#C99A3D]/40 rounded-xl p-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-[#5D623C]">{faq.question}</h3>
              <ChevronDown
                className={`h-5 w-5 text-[#C99A3D] transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {openIndex === index && (
              <p className="mt-3 text-sm text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
