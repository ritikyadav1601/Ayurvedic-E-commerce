"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Ayurvedic Hair Oil",
    description: "Nourishes scalp & strengthens hair roots.",
    price: "₹299",
    image: "/product.jpg",
  },
  {
    id: 2,
    name: "Herbal Face Cream",
    description: "Brightens skin naturally with herbal extracts.",
    price: "₹399",
    image: "/product2.jpg",
  },
  {
    id: 3,
    name: "Digestive Churna",
    description: "Boosts digestion & relieves bloating.",
    price: "₹199",
    image: "/product3.jpg",
  },
  {
    id: 4,
    name: "Immunity Booster",
    description: "Enhances immunity & overall wellness.",
    price: "₹499",
    image: "/product4.jpg",
  },
  {
    id: 5,
    name: "Ayurvedic Hair Oil",
    description: "Nourishes scalp & strengthens hair roots.",
    price: "₹299",
    image: "/product.jpg",
  },
  {
    id: 6,
    name: "Herbal Face Cream",
    description: "Brightens skin naturally with herbal extracts.",
    price: "₹399",
    image: "/product2.jpg",
  },
  {
    id: 7,
    name: "Digestive Churna",
    description: "Boosts digestion & relieves bloating.",
    price: "₹199",
    image: "/product3.jpg",
  },
  {
    id: 8,
    name: "Immunity Booster",
    description: "Enhances immunity & overall wellness.",
    price: "₹499",
    image: "/product4.jpg",
  },
  {
    id: 9,
    name: "Ayurvedic Hair Oil",
    description: "Nourishes scalp & strengthens hair roots.",
    price: "₹299",
    image: "/product.jpg",
  },
  {
    id: 10,
    name: "Herbal Face Cream",
    description: "Brightens skin naturally with herbal extracts.",
    price: "₹399",
    image: "/product2.jpg",
  },
  {
    id: 11,
    name: "Digestive Churna",
    description: "Boosts digestion & relieves bloating.",
    price: "₹199",
    image: "/product3.jpg",
  },
  {
    id: 12,
    name: "Immunity Booster",
    description: "Enhances immunity & overall wellness.",
    price: "₹499",
    image: "/product4.jpg",
  },
  {
    id: 13,
    name: "Ayurvedic Hair Oil",
    description: "Nourishes scalp & strengthens hair roots.",
    price: "₹299",
    image: "/product.jpg",
  },
  {
    id: 14,
    name: "Herbal Face Cream",
    description: "Brightens skin naturally with herbal extracts.",
    price: "₹399",
    image: "/product2.jpg",
  },
  {
    id: 15,
    name: "Digestive Churna",
    description: "Boosts digestion & relieves bloating.",
    price: "₹199",
    image: "/product3.jpg",
  },
  {
    id: 16,
    name: "Immunity Booster",
    description: "Enhances immunity & overall wellness.",
    price: "₹499",
    image: "/product4.jpg",
  },
];

export default function ProductsPage() {
  return (
    <div className="py-6 md:py-16 px-4 md:px-12 lg:px-20 bg-[#F9F6F1]">
      <h1 className="text-xl md:text-4xl font-playfair text-[#5D623C] text-center mb-5 md:mb-10 ">
        Our Ayurvedic Products
      </h1>
      <p className="text-center text-sm md:text-[16px] text-[#777] max-w-2xl mx-auto mb-6 md:mb-12 font-inter">
        Explore our wide range of authentic Ayurvedic products crafted with
        natural herbs to support your wellness journey.
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className="group cursor-pointer"
          >
            <div className="bg-[#f9f6f167] rounded-2xl md:p-5 hover:shadow-xl transition-all duration-300 h-full">
              <div className="relative w-full h-45 md:h-56 mb-4 overflow-hidden rounded-xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h2 className="text-md md:text-xl font-semibold text-[#5D623C] font-playfair mb-2">
                {product.name}
              </h2>
              <p className="text-sm text-[#777] font-inter mb-3">
                {product.description}
              </p>
              <p className="text-sm md:text-lg font-bold text-[#C99A3D] mb-4">
                {product.price}
              </p>
              
              {/* Button - Visible on mobile/tablet, hidden on desktop until hover */}
              <div className="md:opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:transform lg:translate-y-4 lg:group-hover:translate-y-0 transition-all duration-300">
                <div className="text-sm inline-block bg-[#C99A3D] text-white px-3 py-1 md:px-5 md:py-2 rounded-lg font-inter hover:bg-[#a87e2f] transition text-center md:w-full">
                  View Details
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}