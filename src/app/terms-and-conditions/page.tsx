"use client";

import React from "react";

const TermsAndConditionsPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-playfair font-bold text-[#C99A3D] mb-6">
        Terms & Conditions
      </h1>

      <p className="text-gray-700 mb-6 leading-relaxed font-inter">
        Welcome to <span className="font-semibold">Ayurveda Store</span>. By
        accessing or using our website, you agree to comply with and be bound by
        the following terms and conditions. Please read them carefully.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-playfair text-[#C99A3D] mb-3">
          1. Use of Website
        </h2>
        <p className="text-gray-700 font-inter leading-relaxed">
          You agree to use this website for lawful purposes only. You must not
          use it in any way that may damage, disable, or impair the website or
          interfere with others' use.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-playfair text-[#C99A3D] mb-3">
          2. Products & Services
        </h2>
        <p className="text-gray-700 font-inter leading-relaxed">
          All products and services displayed are subject to availability. We
          reserve the right to modify, discontinue, or update any product or
          service without prior notice.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-playfair text-[#C99A3D] mb-3">
          3. Pricing & Payment
        </h2>
        <p className="text-gray-700 font-inter leading-relaxed">
          Prices listed are in INR and may change without notice. Payments must
          be made in full before the delivery of products or services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-playfair text-[#C99A3D] mb-3">
          4. Intellectual Property
        </h2>
        <p className="text-gray-700 font-inter leading-relaxed">
          All content, logos, designs, and graphics are the property of Ayurveda
          Store and are protected by copyright laws. Unauthorized use is
          strictly prohibited.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-playfair text-[#C99A3D] mb-3">
          5. Limitation of Liability
        </h2>
        <p className="text-gray-700 font-inter leading-relaxed">
          We are not liable for any damages arising from the use of our products
          or services. Our remedies are limited to the maximum extent permitted
          by law.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-playfair text-[#C99A3D] mb-3">
          6. Governing Law
        </h2>
        <p className="text-gray-700 font-inter leading-relaxed">
          These Terms & Conditions are governed by the laws of India. Any
          disputes shall be subject to the exclusive jurisdiction of the courts
          in Haryana, India.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-playfair text-[#C99A3D] mb-3">
          7. Contact Us
        </h2>
        <p className="text-gray-700 font-inter leading-relaxed">
          For questions regarding these Terms & Conditions, please contact us at{" "}
          <a
            href="mailto:info@ayurvedastore.com"
            className="text-[#C99A3D] font-medium"
          >
            info@ayurvedastore.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditionsPage;
