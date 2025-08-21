// app/shipping-returns/page.tsx
import React from "react";

const ShippingReturnsPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 font-inter text-gray-700">
      <h1 className="text-3xl md:text-4xl font-playfair text-[#C99A3D] mb-6">
        Shipping & Returns
      </h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3 text-[#C99A3D]">Shipping Policy</h2>
        <p className="mb-4">
          At AyurVeda Store, we strive to deliver your orders in a timely and efficient manner. 
          All orders are processed within <span className="font-semibold">2–3 business days</span> 
          (excluding weekends and holidays) after receiving your order confirmation email.
        </p>
        <p className="mb-4">
          You will receive another notification once your order has shipped, along with a tracking number. 
          Delivery times may vary depending on your location and chosen shipping method.
        </p>
        <p className="mb-4">
          We currently ship across India. For international orders, please contact our customer support team 
          at <span className="font-semibold">support@ayurvedastore.com</span>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3 text-[#C99A3D]">Shipping Rates</h2>
        <p className="mb-4">
          Standard shipping charges apply and will be calculated at checkout based on your location 
          and the weight of the package. 
        </p>
        <p className="mb-4">
          Orders above ₹999 qualify for <span className="font-semibold">free standard shipping</span> 
          across India.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3 text-[#C99A3D]">Return Policy</h2>
        <p className="mb-4">
          We want you to be completely satisfied with your purchase. If you are not happy with your order, 
          you may request a return within <span className="font-semibold">7 days of receiving the product</span>.
        </p>
        <p className="mb-4">
          To be eligible for a return, the item must be unused, unopened, and in its original packaging. 
          Certain items such as personal care products cannot be returned due to hygiene reasons.
        </p>
        <p className="mb-4">
          To start a return, please email us at <span className="font-semibold">support@ayurvedastore.com</span> 
          with your order details. Once approved, we will share the return instructions. 
          Please note that customers are responsible for return shipping costs.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3 text-[#C99A3D]">Refunds</h2>
        <p className="mb-4">
          Once we receive and inspect your return, we will notify you of the approval or rejection of your refund. 
          If approved, the refund will be processed to your original payment method within 
          <span className="font-semibold"> 5–7 business days</span>.
        </p>
        <p className="mb-4">
          For any questions regarding shipping or returns, feel free to contact our customer support team.
        </p>
      </section>
    </div>
  );
};

export default ShippingReturnsPage;
