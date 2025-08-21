"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "The Healing Power of Ayurveda",
    excerpt:
      "Discover how Ayurveda helps restore balance and promotes natural healing...",
    image: "/blog.jpg",
    date: "August 10, 2025",
    author: "Dr. Meera Sharma",
    slug: "healing-power-of-ayurveda",
  },
  {
    id: 2,
    title: "Top 5 Ayurvedic Herbs for Immunity",
    excerpt:
      "Boost your immunity with these powerful Ayurvedic herbs that have been trusted for centuries...",
    image: "/blog2.jpg",
    date: "August 15, 2025",
    author: "Rohit Kumar",
    slug: "ayurvedic-herbs-for-immunity",
  },
  {
    id: 3,
    title: "Ayurveda and Modern Lifestyle",
    excerpt:
      "Learn how Ayurveda can be integrated into today’s busy lifestyle to improve overall health...",
    image: "/blog3.jpg",
    date: "August 18, 2025",
    author: "Priya Singh",
    slug: "ayurveda-modern-lifestyle",
  },
];

const BlogPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-playfair text-[#C99A3D] text-center mb-10">
        Our Blogs
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={300}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-[#C99A3D] mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
              <p className="text-xs text-gray-500 mb-4">
                By {blog.author} • {blog.date}
              </p>
              <Link
                href={`/blog/${blog.slug}`}
                className="text-[#C99A3D] font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
