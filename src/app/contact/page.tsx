"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for contacting us! We’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-[#FDFBF7]  px-4 py-8 md:py-16 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl md:text-4xl font-playfair text-[#C99A3D] mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-sm md:text-[16px] text-center text-[#5D623C] mb-12 font-inter">
          Have questions about our Ayurvedic products or services? Reach out to us—we’d love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-md md:text-xl font-playfair text-[#C99A3D] mb-4">
              Get in Touch
            </h2>
            <p className="text-[#5D623C] mb-6 font-inter text-sm md:text-[16px]">
              You can contact us via phone, email, or visit our office.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 ">
                <Phone className="text-[#C99A3D]" />
                <span className="text-[#5D623C] font-inter text-sm md:text-[16px]" >+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-[#C99A3D]" />
                <span className="text-[#5D623C] font-inter text-sm md:text-[16px]">support@ayurvedastore.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-[#C99A3D]" />
                <span className="text-[#5D623C] font-inter text-sm md:text-[16px]">
                  123 Ayurveda Street, Faridabad, Haryana, India
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <div className="mb-4">
                <label className="block text-[#5D623C] font-inter mb-2 text-sm md:text-[16px]">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-1 py-1.5 md:px-3 md:py-2 focus:outline-none focus:ring-2 focus:ring-[#C99A3D]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#5D623C] font-inter mb-2 text-sm md:text-[16px]">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-1 py-1.5 md:px-3 md:py-2  focus:outline-none focus:ring-2 focus:ring-[#C99A3D]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#5D623C] font-inter mb-2 text-sm md:text-[16px]">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-1 py-1.5 md:px-3 md:py-2  focus:outline-none focus:ring-2 focus:ring-[#C99A3D]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#C99A3D] text-white py-2 rounded-lg hover:bg-[#a8812f] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7015.25851454599!2d77.3033!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d89f6a59e4b%3A0x8b7caa6df1f2f6c4!2sFaridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1671637926214!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
