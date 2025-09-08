"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, clearCart } = useCart();

  const handleDecrease = (id: number, current: number) => {
    if (current > 1) updateQuantity(id, current - 1);
  };

  const handleIncrease = (id: number, current: number) => {
    updateQuantity(id, current + 1);
  };

  return (
    <div className="min-h-screen bg-[#F9F6F1] px-6 md:px-12 lg:px-20 py-10">
      <h1 className="text-2xl md:text-3xl font-playfair text-[#5D623C] mb-6">Your Cart</h1>

      {items.length === 0 ? (
        <div className="bg-white rounded-xl p-8 text-center">
          <p className="text-[#777] font-inter mb-4">Your cart is empty.</p>
          <Link href="/products" className="inline-block bg-[#C99A3D] text-white px-5 py-3 rounded-lg font-inter font-semibold hover:bg-[#a87e2f] transition-colors">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-4 flex items-center gap-4">
                <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className="font-inter text-[#5D623C] font-semibold">{item.name}</p>
                  <p className="text-[#C99A3D] font-semibold">₹{item.price}</p>
                </div>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button onClick={() => handleDecrease(item.id, item.quantity)} className="p-2 hover:bg-gray-100" disabled={item.quantity <= 1}>
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300 min-w-[48px] text-center">{item.quantity}</span>
                  <button onClick={() => handleIncrease(item.id, item.quantity)} className="p-2 hover:bg-gray-100">
                    <Plus size={16} />
                  </button>
                </div>
                <button onClick={() => removeItem(item.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white rounded-xl p-6 h-fit">
            <h2 className="font-playfair text-xl text-[#5D623C] mb-4">Order Summary</h2>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#777]">Subtotal</span>
              <span className="font-semibold text-[#5D623C]">₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-[#777]">Shipping</span>
              <span className="text-[#5D623C]">Calculated at checkout</span>
            </div>
            <Link href="/checkout" className="block w-full text-center bg-[#5D623C] text-white px-5 py-3 rounded-lg font-inter font-semibold hover:bg-[#4a5230] transition-colors mb-3">
              Proceed to Checkout
            </Link>
            <button onClick={clearCart} className="w-full border border-red-300 text-red-600 px-5 py-3 rounded-lg font-inter font-semibold hover:bg-red-50 transition-colors">
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


