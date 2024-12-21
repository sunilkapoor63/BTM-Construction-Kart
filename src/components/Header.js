import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderHeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("MENU");
  const location = useLocation(); // Get the current route

  const isHomePage = location.pathname === "/";

  const categories = [
    { label: "AAC Blocks Grade 1", icon: "🧱" },
    { label: "Siporex AAC Blocks", icon: "🧱" },
    { label: "Aerocon Panel", icon: "📄" },
    { label: "Fiber Cement Board", icon: "🪵" },
    { label: "Meghalite AAC Blocks", icon: "🧱" },
    { label: "Calcium Silicate Board", icon: "📏" },
    { label: "Aerocon AAC Blocks", icon: "🧱" },
    { label: "Xtralite AAC Blocks", icon: "🧱" },
    { label: "Jointing Mortar", icon: "🛠️" },
    { label: "Tools-AAC Block", icon: "🔧" },
  ];

  const menuItems = [
    { label: "HOME", path: "/" },
    { label: "PRODUCTS", path: "/products" },
    { label: "CONTACT US", path: "/contact-us" },
    { label: "MY ACCOUNT", path: "/my-account" },
    { label: "TRACK ORDER", path: "/track-order" },
  ];

  return (
    <section className="w-full">
      {/* Top Bar */}
      <div className="bg-[#45b8be] flex justify-center items-center h-12 text-white font-sans tracking-wide">
        <span className="whitespace-nowrap text-sm md:text-base">
          ಉತ್ತಮ ಬೆಲೆ ಭರವಸೆ &nbsp;&nbsp;|&nbsp;&nbsp; BEST PRICE ASSURED
        </span>
      </div>

      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="mx-auto max-w-screen-xl px-4 flex items-center justify-between py-8">
          {/* Mobile Hamburger for Small Screens */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-gray-700 text-2xl focus:outline-none"
            >
              ☰
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="https://buildwale.com/wp-content/uploads/2023/07/logo.svg"
                alt="BuildWale Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Search Section */}
          <div className="hidden lg:flex relative flex-1 mx-4">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              🔍
            </button>
          </div>

          {/* Login Section */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="text-gray-700 text-sm font-semibold cursor-pointer">
              LOGIN / REGISTER
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-teal-500 font-bold">₹0.00</span>
              <span className="text-sm text-gray-500">0 items</span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu (Sidebar) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
          <div className="w-72 bg-white h-full shadow-lg">
            {/* Close Button */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 text-2xl focus:outline-none"
              >
                ✕
              </button>
            </div>

            {/* Search Bar Inside Sidebar */}
            <div className="p-4 border-b">
              <input
                type="text"
                placeholder="Search for products"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
              />
            </div>

            {/* Tab Switching */}
            <div className="flex border-b">
              <button
                className={`w-1/2 py-3 ${
                  activeTab === "MENU" ? "border-b-2 border-[#44B7B6]" : ""
                }`}
                onClick={() => setActiveTab("MENU")}
              >
                MENU
              </button>
              <button
                className={`w-1/2 py-3 ${
                  activeTab === "CATEGORIES"
                    ? "border-b-2 border-[#44B7B6]"
                    : ""
                }`}
                onClick={() => setActiveTab("CATEGORIES")}
              >
                CATEGORIES
              </button>
            </div>

            {/* Menu List (Mobile) */}
            <div className="p-4">
              {activeTab === "MENU" &&
                menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block py-3 text-gray-800 border-b hover:text-[#44B7B6]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

              {activeTab === "CATEGORIES" &&
                categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center py-3 border-b text-gray-800 hover:text-[#44B7B6]"
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.label}
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Browse Categories Section */}
      <div className="hidden lg:flex mx-auto max-w-screen-xl px-4 items-center space-x-10">
        <div className="relative flex items-center">
          {isHomePage ? (
            <div className="px-8 py-6 bg-[#44B7B6] text-white">
              ☰ <span className="ml-3 uppercase font-bold">Browse Categories</span>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg">
                <ul className="p-2">
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div 
              className="px-9 py-6 bg-[#44B7B6] text-white cursor-pointer"
              onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)}
            >
              ☰ <span className="ml-3 uppercase font-bold">Browse Categories</span>
              {categoriesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg">
                  <ul className="p-2">
                    {categories.map((category, index) => (
                      <li
                        key={index}
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                      >
                        <span className="mr-2">{category.icon}</span>
                        {category.label}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Navigation Links */}
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="hover:text-[#44B7B6] font-medium"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HeaderHeroSection;
