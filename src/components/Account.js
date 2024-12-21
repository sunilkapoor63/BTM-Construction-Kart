import React, { useState } from "react";

const MyAccountPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-lg">
        {/* Login Header */}
        <h2 className="text-2xl font-bold text-center mb-6">LOGIN</h2>

        {/* Username or Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Username or email address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="email"
            placeholder=""
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#44B7B6]"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder=""
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#44B7B6]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-4 mt-6 flex items-center text-gray-600"
          >
            👁️
          </button>
        </div>

        {/* Login Button */}
        <div className="mb-4">
          <button className="w-full bg-red-500 text-white py-2 rounded-md font-bold hover:bg-red-600">
            LOGIN
          </button>
        </div>

        {/* Remember Me & Lost Password */}
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="mr-2 cursor-pointer"
            />
            <label htmlFor="remember" className="cursor-pointer">
              Remember me
            </label>
          </div>
          <a
            href="/forgot-password"
            className="text-[#44B7B6] hover:underline"
          >
            Lost your password?
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyAccountPage;
