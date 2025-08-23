// app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-700 font-inter">
      {/* Hero Section */}
      <section className="relative w-full h-[30vh] md:h-[60vh] flex items-center justify-center bg-[#f9f7f1]">
        <div className="absolute inset-0">
          <Image
            src="/about-hero.jpg"
            alt="About Ayurveda Store"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <h1 className="relative z-10 text-2xl md:text-6xl font-playfair text-[#C99A3D] text-center">
          About Ayurveda Store
        </h1>
      </section>

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto md:px-6 md:py-12 px-4 py-8">
        <h2 className="text-xl md:text-4xl font-playfair text-[#C99A3D] mb-6 text-center">
          Who We Are
        </h2>
        <p className="text-sm md:text-lg leading-relaxed text-center text-gray-600">
          At Ayurveda Store, we believe in the timeless wisdom of Ayurveda – a
          holistic science that nurtures the body, mind, and soul. Our mission
          is to provide authentic Ayurvedic products that promote wellness,
          balance, and natural healing for a healthier lifestyle.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#f9f7f1] md:py-12 md:px-6 py-8 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <Image
              src="/mission.jpg"
              alt="Ayurveda Mission"
              width={600}
              height={400}
              className="rounded-2xl shadow-md object-cover w-full"
            />
          </div>
          <div>
            <h3 className="text-lg md:text-2xl font-playfair text-[#C99A3D] mb-3 md:mb-4">
              Our Mission
            </h3>
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
              To bring the healing power of Ayurveda into every home by offering
              safe, natural, and effective products. We are committed to
              sustainability, purity, and excellence.
            </p>
            <h3 className="text-lg md:text-2xl font-playfair text-[#C99A3D] mb-3 md:mb-4">
              Our Vision
            </h3>
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
              To be a trusted global brand in Ayurveda, inspiring people to live
              a balanced, healthier life in harmony with nature.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto md:py-16 md:px-6 py-8 px-4">
        <h2 className="text-xl md:text-4xl font-playfair text-[#C99A3D] text-center mb-8 md:mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 text-center">
          <div className="p-4 md:p-6 border rounded-xl shadow-sm bg-white hover:shadow-lg transition">
            <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-[#C99A3D]">
              Authenticity
            </h4>
            <p className="text-sm md:text-base text-gray-600">
              All our products are sourced from trusted Ayurvedic practitioners
              and crafted with traditional methods.
            </p>
          </div>
          <div className="p-4 md:p-6 border rounded-xl shadow-sm bg-white hover:shadow-lg transition">
            <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-[#C99A3D]">
              Sustainability
            </h4>
            <p className="text-sm md:text-base text-gray-600">
              We care for nature as much as we care for your health by ensuring
              eco-friendly packaging and ethical sourcing.
            </p>
          </div>
          <div className="p-4 md:p-6 border rounded-xl shadow-sm bg-white hover:shadow-lg transition">
            <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-[#C99A3D]">
              Wellness First
            </h4>
            <p className="text-sm md:text-base text-gray-600">
              Our focus is always on improving the overall well-being of our
              customers with safe and effective products.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="bg-[#f9f7f1] md:py-16 md:px-6 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl md:text-4xl font-playfair text-[#C99A3D] mb-8 md:mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {/* Team Member 1 */}
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-3 md:mb-4">
                <Image
                  src="/testimonial.jpg"
                  alt="Founder"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-[#C99A3D]">Dr. Ananya Sharma</h4>
              <p className="text-sm md:text-base text-gray-600">Founder & Ayurvedic Expert</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-3 md:mb-4">
                <Image
                  src="/testimonial2.jpg"
                  alt="Co-Founder"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-[#C99A3D]">Rajesh Kumar</h4>
              <p className="text-sm md:text-base text-gray-600">Co-Founder & Operations Head</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-3 md:mb-4">
                <Image
                  src="/testinomial3.jpg"
                  alt="Marketing Head"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-[#C99A3D]">Priya Desai</h4>
              <p className="text-sm md:text-base text-gray-600">Marketing & Community</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}