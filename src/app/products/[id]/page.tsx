"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  Heart,
  Share2,
  Star,
  Minus,
  Plus,
  ShoppingCart,
} from "lucide-react";

// ✅ Define types
interface Product {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  images: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  category: string;
  ingredients: string[];
  benefits: string[];
  howToUse: string[];
  specifications: Record<string, string>;
}

// ✅ Sample product fetcher
const getProductById = (id: number): Product => {
  const products: Record<number, Product> = {
    1: {
      id: 1,
      name: "Ayurvedic Hair Oil",
      description:
        "Nourishes scalp & strengthens hair roots with natural herbs and essential oils.",
      fullDescription:
        "Our premium Ayurvedic Hair Oil is crafted using ancient Ayurvedic formulations that have been trusted for centuries. This powerful blend of natural herbs and essential oils penetrates deep into the scalp to nourish hair follicles, strengthen roots, and promote healthy hair growth. Regular use helps reduce hair fall, prevents premature graying, and adds natural shine to your hair.",
      price: "₹299",
      originalPrice: "₹399",
      discount: "25% OFF",
      images: [
        "/product.jpg",
        "/product2.jpg",
        "/product3.jpg",
        "/product4.jpg",
      ],
      rating: 4.5,
      reviews: 127,
      inStock: true,
      category: "Hair Care",
      ingredients: [
        "Coconut Oil",
        "Brahmi",
        "Bhringraj",
        "Amla",
        "Fenugreek",
        "Rosemary Oil",
      ],
      benefits: [
        "Reduces hair fall by up to 80%",
        "Promotes new hair growth",
        "Prevents premature graying",
        "Adds natural shine and softness",
        "Strengthens hair roots",
        "Improves scalp circulation",
      ],
      howToUse: [
        "Apply oil to scalp and hair roots",
        "Gently massage for 5-10 minutes",
        "Leave for 30 minutes or overnight",
        "Wash with mild shampoo",
        "Use 2-3 times per week for best results",
      ],
      specifications: {
        "Net Weight": "100ml",
        "Shelf Life": "24 months",
        "Suitable For": "All hair types",
        Packaging: "Glass bottle with dropper",
      },
    },
  };

  return products[id] || products[1];
};

// ✅ Updated type for page props (Next.js 15)
interface ProductDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const [productId, setProductId] = useState<number>(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<
    "description" | "ingredients" | "benefits" | "usage" | "specifications"
  >("description");
  const [isFavorite, setIsFavorite] = useState(false);

  // ✅ Handle async params
  useEffect(() => {
    const loadProduct = async () => {
      try {
        const resolvedParams = await params;
        const id = Number(resolvedParams?.id) || 1;
        setProductId(id);
        setProduct(getProductById(id));
      } catch (error) {
        console.error("Error loading product:", error);
        setProduct(getProductById(1));
      }
    };

    loadProduct();
  }, [params]);

  const handleQuantityChange = (action: "increase" | "decrease") => {
    if (action === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const tabs = [
    { id: "description", label: "Description" },
    { id: "ingredients", label: "Ingredients" },
    { id: "benefits", label: "Benefits" },
    { id: "usage", label: "How to Use" },
    { id: "specifications", label: "Specifications" },
  ] as const;

  // Show loading state while product is being fetched
  if (!product) {
    return (
      <div className="min-h-screen bg-[#F9F6F1] flex items-center justify-center">
        <div className="text-[#5D623C] text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F6F1]">
      {/* Breadcrumb */}
      <div className="px-6 md:px-12 lg:px-20 py-4">
        <div className="flex items-center gap-2 text-sm text-[#777]">
          <Link href="/" className="hover:text-[#C99A3D]">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#C99A3D]">
            Products
          </Link>
          <span>/</span>
          <span className="text-[#5D623C]">{product.name}</span>
        </div>
      </div>

      {/* Back Button */}
      <div className="px-6 md:px-12 lg:px-20 mb-6">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-[#5D623C] hover:text-[#C99A3D] transition-colors"
        >
          <ChevronLeft size={20} />
          Back to Products
        </Link>
      </div>

      {/* Product Info & Images */}
      <div className="px-6 md:px-12 lg:px-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden group">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {product.discount && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.discount}
                </div>
              )}
            </div>
            <div className="flex gap-3 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-[#C99A3D]"
                      : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-6">
            {/* Category + Stock */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-[#C99A3D] font-inter bg-[#C99A3D]/10 px-2 py-1 rounded">
                  {product.category}
                </span>
                {product.inStock && (
                  <span className="text-sm text-green-600 font-inter bg-green-100 px-2 py-1 rounded">
                    In Stock
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-playfair text-[#5D623C] mb-3">
                {product.name}
              </h1>
              <p className="text-[#777] font-inter text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* ⭐ Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-[#5D623C] font-semibold">
                {product.rating}
              </span>
              <span className="text-[#777]">({product.reviews} reviews)</span>
            </div>

            {/* 💰 Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-[#C99A3D]">
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>

            {/* Quantity + Actions */}
            <div className="space-y-4">
              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-[#5D623C] font-semibold">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange("decrease")}
                    className="p-2 hover:bg-gray-100 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange("increase")}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Add to Cart / Favorite / Share */}
              <div className="flex gap-3">
                <button className="flex-1 bg-[#C99A3D] text-white px-6 py-3 rounded-lg font-inter font-semibold hover:bg-[#a87e2f] transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>

                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-3 border border-gray-300 rounded-lg transition-colors ${
                    isFavorite
                      ? "bg-red-50 border-red-200"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <Heart
                    size={20}
                    className={
                      isFavorite ? "text-red-500 fill-current" : "text-gray-600"
                    }
                  />
                </button>

                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 size={20} className="text-gray-600" />
                </button>
              </div>
            </div>

            {/* Buy Now */}
            <button className="w-full bg-[#5D623C] text-white px-6 py-3 rounded-lg font-inter font-semibold hover:bg-[#4a5230] transition-colors">
              Buy Now
            </button>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          <div className="border-b border-gray-200 mb-8">
            <div className="flex gap-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 px-1 font-inter font-semibold whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? "text-[#C99A3D] border-b-2 border-[#C99A3D]"
                      : "text-[#777] hover:text-[#5D623C]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-4xl">
            {activeTab === "description" && (
              <p className="text-[#777] font-inter text-lg leading-relaxed">
                {product.fullDescription}
              </p>
            )}

            {activeTab === "ingredients" && (
              <div>
                <h3 className="text-xl font-playfair text-[#5D623C] mb-4">
                  Natural Ingredients
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {product.ingredients.map((ingredient, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-white rounded-lg"
                    >
                      <div className="w-2 h-2 bg-[#C99A3D] rounded-full"></div>
                      <span className="font-inter text-[#5D623C]">
                        {ingredient}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "benefits" && (
              <div>
                <h3 className="text-xl font-playfair text-[#5D623C] mb-4">
                  Key Benefits
                </h3>
                <div className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-white rounded-lg"
                    >
                      <div className="w-6 h-6 bg-[#C99A3D] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="font-inter text-[#5D623C]">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "usage" && (
              <div>
                <h3 className="text-xl font-playfair text-[#5D623C] mb-4">
                  How to Use
                </h3>
                <div className="space-y-4">
                  {product.howToUse.map((step, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 bg-white rounded-lg"
                    >
                      <div className="w-8 h-8 bg-[#C99A3D] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="font-inter text-[#5D623C]">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div>
                <h3 className="text-xl font-playfair text-[#5D623C] mb-4">
                  Product Specifications
                </h3>
                <div className="bg-white rounded-lg overflow-hidden">
                  {Object.entries(product.specifications).map(
                    ([key, value], index) => (
                      <div
                        key={index}
                        className={`flex p-4 ${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        <div className="w-1/3 font-semibold text-[#5D623C] font-inter">
                          {key}:
                        </div>
                        <div className="w-2/3 text-[#777] font-inter">
                          {value}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}