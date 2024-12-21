import React from "react";

const TrackOrderPage = () => {
  return (
    <section>
      {/* Order Tracking Section */}
      <div className="bg-[#44B7B6] py-16 px-4 text-center text-white mt-10">
        <h2 className="text-3xl font-bold mb-6">ORDER TRACKING</h2>
        <p className="text-lg mb-8">
          To track your order, please enter your <span className="font-semibold">Order ID</span> and <span className="font-semibold">Billing Email</span> in the boxes below and press the "Track" button.
          This was given to you on your receipt and in the confirmation email you should have received.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Order ID Input */}
          <input
            type="text"
            placeholder="Found in your order confirmation email."
            className="w-72 border border-gray-300 rounded-md px-4 py-2 focus:outline-none text-gray-700"
          />
          {/* Billing Email Input */}
          <input
            type="email"
            placeholder="Email you used during checkout."
            className="w-72 border border-gray-300 rounded-md px-4 py-2 focus:outline-none text-gray-700"
          />
          {/* Track Button */}
          <button className="bg-red-500 text-white px-6 py-2 rounded-md font-bold">
            TRACK
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16 px-4 text-center">
        <h3 className="text-3xl font-bold mb-4">Get answers to all your questions you might have.</h3>
        <p className="text-lg text-gray-600 mb-8">
          We will answer any questions you may have about our online sales right here.
        </p>
        <button className="bg-[#44B7B6] text-white px-8 py-3 rounded-md font-semibold">
          CONTACT OUR COMPANY
        </button>
      </div>
    </section>
  );
};

export default TrackOrderPage;
