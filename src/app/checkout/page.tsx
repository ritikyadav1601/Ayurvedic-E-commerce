"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation (already using required attrs). Route to success page.
    clearCart();
    router.push("/checkout/success");
  };

  return (
    <div className="min-h-screen bg-[#F9F6F1] px-6 md:px-12 lg:px-20 py-10">
      <h1 className="text-2xl md:text-3xl font-playfair text-[#5D623C] mb-6">Checkout</h1>

      {items.length === 0 ? (
        <div className="bg-white rounded-xl p-8 text-center">
          <p className="text-[#777] font-inter mb-4">Your cart is empty.</p>
          <Link href="/products" className="inline-block bg-[#C99A3D] text-white px-5 py-3 rounded-lg font-inter font-semibold hover:bg-[#a87e2f] transition-colors">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <form onSubmit={handlePlaceOrder} className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl p-6">
              <h2 className="font-playfair text-xl text-[#5D623C] mb-4">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#C99A3D]" required />
                <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#C99A3D]" required />
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#C99A3D] md:col-span-2" required />
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#C99A3D] md:col-span-2" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h2 className="font-playfair text-xl text-[#5D623C] mb-4">Shipping Address</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <textarea name="address" value={form.address} onChange={handleChange} placeholder="Street Address" className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#C99A3D] md:col-span-2" rows={3} required />
                <input name="city" value={form.city} onChange={handleChange} placeholder="City" className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#C99A3D]" required />
                <input name="state" value={form.state} onChange={handleChange} placeholder="State" className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#C99A3D]" required />
                <input name="postalCode" value={form.postalCode} onChange={handleChange} placeholder="Postal Code" className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#C99A3D]" required />
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-white rounded-xl p-6 h-fit">
            <h2 className="font-playfair text-xl text-[#5D623C] mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <span className="text-[#5D623C]">{item.name} × {item.quantity}</span>
                  <span className="text-[#5D623C]">₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#777]">Subtotal</span>
              <span className="font-semibold text-[#5D623C]">₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-[#777]">Shipping</span>
              <span className="text-[#5D623C]">Calculated at delivery</span>
            </div>
            <button type="submit" className="w-full bg-[#5D623C] text-white px-5 py-3 rounded-lg font-inter font-semibold hover:bg-[#4a5230] transition-colors">
              Place Order
            </button>
            <Link href="/cart" className="block text-center mt-3 text-[#C99A3D] hover:text-[#a87e2f]">Back to Cart</Link>
          </div>
        </form>
      )}
    </div>
  );
}


