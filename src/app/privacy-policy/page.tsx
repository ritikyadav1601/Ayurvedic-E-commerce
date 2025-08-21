import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-[#5D623C] font-inter">
      <h1 className="text-3xl md:text-4xl font-playfair text-[#C99A3D] mb-6">
        Privacy Policy
      </h1>
      <p className="mb-4">
        At <span className="font-semibold">Ayurveda Store</span>, we value your
        privacy and are committed to protecting your personal information. This
        Privacy Policy explains how we collect, use, and safeguard your data
        when you visit or make a purchase from our website.
      </p>

      <h2 className="text-xl font-semibold text-[#C99A3D] mt-8 mb-3">
        Information We Collect
      </h2>
      <p className="mb-4">
        We may collect personal details such as your name, email address, phone
        number, shipping address, and payment information when you interact with
        our website or place an order.
      </p>

      <h2 className="text-xl font-semibold text-[#C99A3D] mt-8 mb-3">
        How We Use Your Information
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>To process and fulfill your orders.</li>
        <li>To provide customer support and respond to inquiries.</li>
        <li>
          To send promotional emails and updates (only if you opt-in).
        </li>
        <li>
          To improve our website’s performance and user experience.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-[#C99A3D] mt-8 mb-3">
        Data Protection
      </h2>
      <p className="mb-4">
        We use industry-standard security measures to ensure your personal data
        is safe and protected. However, no online system is completely secure,
        and we cannot guarantee absolute security.
      </p>

      <h2 className="text-xl font-semibold text-[#C99A3D] mt-8 mb-3">
        Sharing of Information
      </h2>
      <p className="mb-4">
        We do not sell or rent your personal information to third parties. We
        may share your details only with trusted service providers (e.g.,
        payment processors, delivery partners) to fulfill your order.
      </p>

      <h2 className="text-xl font-semibold text-[#C99A3D] mt-8 mb-3">
        Cookies
      </h2>
      <p className="mb-4">
        Our website uses cookies to enhance user experience, track analytics,
        and store preferences. You can choose to disable cookies through your
        browser settings.
      </p>

      <h2 className="text-xl font-semibold text-[#C99A3D] mt-8 mb-3">
        Your Rights
      </h2>
      <p className="mb-4">
        You have the right to access, update, or request deletion of your
        personal data. Please contact us if you wish to exercise these rights.
      </p>

      <h2 className="text-xl font-semibold text-[#C99A3D] mt-8 mb-3">
        Changes to Privacy Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will be
        reflected on this page with an updated date.
      </p>

      <h2 className="text-xl font-semibold text-[#C99A3D] mt-8 mb-3">
        Contact Us
      </h2>
      <p>
        If you have any questions regarding this Privacy Policy, please contact
        us at:{" "}
        <a
          href="mailto:support@ayurvedastore.com"
          className="text-[#C99A3D] underline"
        >
          support@ayurvedastore.com
        </a>
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
