"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart, parsePriceToNumber } from "../../context/CartContext";
import { useRouter } from "next/navigation";
import {
  ChevronLeft,
  Heart,
  Share2,
  Star,
  Minus,
  Plus,
  ShoppingCart,
  ChevronRight,
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

// ✅ Sample products data
const productsDatabase: Record<number, Product> = {
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
  2: {
    id: 2,
    name: "Herbal Hair Shampoo",
    description:
      "Gentle cleansing shampoo with natural herbs for healthy, lustrous hair.",
    fullDescription:
      "This gentle herbal shampoo is formulated with carefully selected natural ingredients that cleanse your hair without stripping away its natural oils. Enriched with traditional Ayurvedic herbs, it promotes scalp health and leaves your hair soft, manageable, and naturally shiny.",
    price: "₹249",
    originalPrice: "₹329",
    discount: "24% OFF",
    images: ["/product2.jpg", "/product.jpg", "/product3.jpg"],
    rating: 4.3,
    reviews: 89,
    inStock: true,
    category: "Hair Care",
    ingredients: ["Shikakai", "Reetha", "Amla", "Neem", "Aloe Vera"],
    benefits: [
      "Gentle cleansing without chemicals",
      "Maintains natural hair moisture",
      "Reduces dandruff and scalp irritation",
      "Adds natural shine",
      "Safe for daily use",
    ],
    howToUse: [
      "Wet hair thoroughly",
      "Apply shampoo and massage gently",
      "Rinse thoroughly with water",
      "Repeat if necessary",
    ],
    specifications: {
      "Net Weight": "200ml",
      "Shelf Life": "18 months",
      "Suitable For": "All hair types",
      Packaging: "Plastic bottle",
    },
  },
  3: {
    id: 3,
    name: "Ayurvedic Face Cream",
    description:
      "Nourishing face cream with turmeric and sandalwood for radiant skin.",
    fullDescription:
      "This luxurious Ayurvedic face cream combines the power of turmeric, sandalwood, and other precious herbs to give you naturally radiant and healthy skin. It deeply moisturizes, reduces signs of aging, and protects against environmental damage.",
    price: "₹399",
    originalPrice: "₹549",
    discount: "27% OFF",
    images: ["/product3.jpg", "/product.jpg", "/product2.jpg"],
    rating: 4.6,
    reviews: 156,
    inStock: true,
    category: "Skin Care",
    ingredients: ["Turmeric", "Sandalwood", "Rose Water", "Almond Oil", "Saffron"],
    benefits: [
      "Deep moisturization",
      "Reduces fine lines and wrinkles",
      "Natural glow enhancement",
      "Evens skin tone",
      "Anti-aging properties",
    ],
    howToUse: [
      "Cleanse face thoroughly",
      "Apply small amount to face and neck",
      "Massage gently in circular motions",
      "Use twice daily for best results",
    ],
    specifications: {
      "Net Weight": "50ml",
      "Shelf Life": "24 months",
      "Suitable For": "All skin types",
      Packaging: "Glass jar",
    },
  },
  4: {
    id: 4,
    name: "Herbal Hair Mask",
    description:
      "Deep conditioning hair mask with hibiscus and curry leaves for damaged hair.",
    fullDescription:
      "This intensive herbal hair mask is specially formulated to repair and rejuvenate damaged hair. Packed with hibiscus, curry leaves, and other nourishing herbs, it provides deep conditioning, repairs split ends, and restores hair's natural strength and vitality.",
    price: "₹349",
    originalPrice: "₹449",
    discount: "22% OFF",
    images: ["/product4.jpg", "/product.jpg", "/product2.jpg"],
    rating: 4.4,
    reviews: 78,
    inStock: true,
    category: "Hair Care",
    ingredients: ["Hibiscus", "Curry Leaves", "Coconut Oil", "Honey", "Yogurt"],
    benefits: [
      "Repairs damaged hair",
      "Deep conditioning treatment",
      "Reduces split ends",
      "Adds volume and thickness",
      "Restores natural shine",
    ],
    howToUse: [
      "Apply to clean, damp hair",
      "Leave on for 20-30 minutes",
      "Rinse thoroughly with lukewarm water",
      "Use once a week",
    ],
    specifications: {
      "Net Weight": "150ml",
      "Shelf Life": "12 months",
      "Suitable For": "Damaged hair",
      Packaging: "Plastic tube",
    },
  },
  5: {
    id: 5,
    name: "Natural Body Lotion",
    description:
      "Hydrating body lotion with coconut oil and shea butter for silky smooth skin.",
    fullDescription:
      "This rich and creamy body lotion is enriched with natural coconut oil and shea butter to provide long-lasting hydration. It absorbs quickly without leaving a greasy residue, leaving your skin feeling soft, smooth, and beautifully moisturized all day long.",
    price: "₹329",
    originalPrice: "₹429",
    discount: "23% OFF",
    images: ["/product.jpg", "/product2.jpg", "/product3.jpg"],
    rating: 4.2,
    reviews: 94,
    inStock: true,
    category: "Skin Care",
    ingredients: ["Coconut Oil", "Shea Butter", "Aloe Vera", "Vitamin E", "Lavender Oil"],
    benefits: [
      "Long-lasting hydration",
      "Quick absorption",
      "Soothes dry skin",
      "Non-greasy formula",
      "Pleasant fragrance",
    ],
    howToUse: [
      "Apply to clean, dry skin",
      "Massage gently until absorbed",
      "Use daily after shower",
      "Focus on dry areas like elbows and knees",
    ],
    specifications: {
      "Net Weight": "250ml",
      "Shelf Life": "24 months",
      "Suitable For": "All skin types",
      Packaging: "Pump bottle",
    },
  },
};

// ✅ Sample product fetcher
const getProductById = (id: number): Product => {
  return productsDatabase[id] || productsDatabase[1];
};

// ✅ Get related products based on category
const getRelatedProducts = (currentProductId: number, category: string, limit: number = 4): Product[] => {
  return Object.values(productsDatabase)
    .filter(product => product.id !== currentProductId && product.category === category)
    .slice(0, limit);
};

// ✅ Related Product Card Component 
const RelatedProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();
  return (
    <Link 
      href={`/products/${product.id}`}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {product.discount}
          </div>
        )}
        <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
          <Heart size={16} className="text-gray-600 hover:text-red-500" />
        </button>
      </div>
      
      <div className="p-4 space-y-3">
        <div>
          <span className="text-[10px] text-[#C99A3D] font-inter bg-[#C99A3D]/10 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        
        <h3 className="font-playfair text-sm md:text-xl text-[#5D623C] group-hover:text-[#C99A3D] transition-colors line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-[10px] md:text-[16px] text-[#777] font-inter line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={`${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-[#777]">({product.reviews})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#C99A3D]">{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {product.originalPrice}
              </span>
            )}
          </div>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem({
                id: product.id,
                name: product.name,
                price: parsePriceToNumber(product.price),
                image: product.images[0],
              }, 1);
            }}
            className="p-2 bg-[#C99A3D] text-white rounded-lg hover:bg-[#a87e2f] transition-colors"
          >
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </Link>
  );
};

// ✅ Updated type for page props (Next.js 15)
interface ProductDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { addItem } = useCart();
  const router = useRouter();
  const [productId, setProductId] = useState<number>(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
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
        const currentProduct = getProductById(id);
        setProduct(currentProduct);
        setRelatedProducts(getRelatedProducts(id, currentProduct.category));
      } catch (error) {
        console.error("Error loading product:", error);
        const fallbackProduct = getProductById(1);
        setProduct(fallbackProduct);
        setRelatedProducts(getRelatedProducts(1, fallbackProduct.category));
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
      <div className="px-2 md:px-12 lg:px-20 pb-16">
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
                <span className="text-xs md:text-sm text-[#C99A3D] font-inter bg-[#C99A3D]/10 px-2 py-1 rounded">
                  {product.category}
                </span>
                {product.inStock && (
                  <span className="text-xs md:text-sm text-green-600 font-inter bg-green-100 px-2 py-1 rounded">
                    In Stock
                  </span>
                )}
              </div>

              <h1 className="text-2xl md:text-4xl font-playfair text-[#5D623C] mb-3">
                {product.name}
              </h1>
              <p className="text-[#777] font-inter text-sm md:text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* ⭐ Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className={`${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-[#5D623C] font-semibold text-sm md:text-[16px]">
                {product.rating}
              </span>
              <span className="text-[#777] text-sm md:text-[16px]">({product.reviews} reviews)</span>
            </div>

            {/* 💰 Price */}
            <div className="flex items-center gap-3">
              <span className="text-xl md:text-3xl font-bold text-[#C99A3D]">
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm md:text-xl text-gray-500 line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>

            {/* Quantity + Actions */}
            <div className="space-y-4">
              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-[#5D623C] font-semibold text-sm md:text-[16px]">Quantity:</span>
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
                <button
                  onClick={() => {
                    if (!product) return;
                    addItem(
                      {
                        id: product.id,
                        name: product.name,
                        price: parsePriceToNumber(product.price),
                        image: product.images[0],
                      },
                      quantity
                    );
                  }}
                  className="flex-1 bg-[#C99A3D] text-white px-6 py-3 rounded-lg font-inter font-semibold hover:bg-[#a87e2f] transition-colors flex items-center justify-center gap-2"
                >
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
            <button
              onClick={() => {
                if (!product) return;
                addItem(
                  {
                    id: product.id,
                    name: product.name,
                    price: parsePriceToNumber(product.price),
                    image: product.images[0],
                  },
                  quantity
                );
                router.push("/checkout");
              }}
              className="w-full bg-[#5D623C] text-white px-6 py-3 rounded-lg font-inter font-semibold hover:bg-[#4a5230] transition-colors"
            >
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
                  className={`pb-4 px-1 font-inter font-semibold whitespace-nowrap transition-colors text-sm md:text-[16px] ${
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
              <p className="text-[#777] font-inter text-sm md:text-lg leading-relaxed">
                {product.fullDescription}
              </p>
            )}

            {activeTab === "ingredients" && (
              <div>
                <h3 className="text-sm md:text-xl font-playfair text-[#5D623C] mb-4">
                  Natural Ingredients
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {product.ingredients.map((ingredient, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-white rounded-lg"
                    >
                      <div className="w-2 h-2 bg-[#C99A3D] rounded-full"></div>
                      <span className="font-inter text-[#5D623C] text-xs md:text-[16px]">
                        {ingredient}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "benefits" && (
              <div>
                <h3 className="text-sm md:text-xl font-playfair text-[#5D623C] mb-4">
                  Key Benefits
                </h3>
                <div className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 md:p-4 bg-white rounded-lg"
                    >
                      <div className="w-4 h-4 md:w-6 md:h-6 bg-[#C99A3D] text-xs md:text-sm text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="font-inter text-[#5D623C] text-xs md:text-[16px]">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "usage" && (
              <div>
                <h3 className="text-sm md:text-xl font-playfair text-[#5D623C] mb-4">
                  How to Use
                </h3>
                <div className="space-y-4">
                  {product.howToUse.map((step, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-3 md:p-4 bg-white rounded-lg"
                    >
                      <div className="w-4 h-4 md:w-6 md:h-6 bg-[#C99A3D] text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="font-inter text-[#5D623C] text-xs md:text-[16px]">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div>
                <h3 className="text-sm md:text-xl font-playfair text-[#5D623C] mb-4">
                  Product Specifications
                </h3>
                <div className="bg-white rounded-lg overflow-hidden">
                  {Object.entries(product.specifications).map(
                    ([key, value], index) => (
                      <div
                        key={index}
                        className={`flex md:p-4 p-3 ${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        <div className="w-1/3 font-semibold text-[#5D623C] font-inter text-xs md:text-[16px]">
                          {key}:
                        </div>
                        <div className="w-2/3 text-[#777] font-inter text-xs md:text-[16px]">
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

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-playfair text-[#5D623C]">
                Related Products
              </h2>
              <Link 
                href="/products"
                className="inline-flex items-center gap-1 text-[#C99A3D] font-inter font-semibold hover:text-[#a87e2f] transition-colors text-sm md:text-base"
              >
                View All
                <ChevronRight size={16} />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <RelatedProductCard 
                  key={relatedProduct.id} 
                  product={relatedProduct} 
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}