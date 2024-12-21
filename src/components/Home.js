import React from "react";

const bestSellingProducts = [
  {
    title: "GRADE 1 AAC Block",
    image: "https://buildwale.com/wp-content/uploads/2023/07/aac_100-500x400.jpg", 
    description: "AAC Grade 1 Light Weight Block 100mm (4inch)",
    price: "₹49.00",
    oldPrice: "₹59.00",
    link: "#",
  },
  {
    title: "SIPOREX",
    image: "https://buildwale.com/wp-content/uploads/2023/07/siporex-8-500x400.png", 
    description: "Siporex Light Weight Block 200mm (8inch) - Full Load",
    price: "₹102.00",
    oldPrice: "₹117.00",
    link: "#",
  },
  {
    title: "FIBER CEMENT BOARD",
    image: "https://buildwale.com/wp-content/uploads/2023/09/fcb-6x4-6mm-500x400.jpg", 
    description: "Fiber Cement Board 6ft x 4ft Sheet, 6mm",
    price: "₹590.00",
    link: "#",
  },
  {
    title: "BLOCK JOINTING MORTAR",
    image: "https://buildwale.com/wp-content/uploads/2023/07/block-jointing-mortar_031-500x400.jpg", 
    description: "Block Jointing Mortar AAC Block Fix 40KG Bag",
    price: "₹589.60",
    oldPrice: "₹670.00",
    link: "#",
  },
];

const productCategories = [
    {
      name: "SIPOREX AAC BLOCKS",
      image: "https://lntsufin.com/storage/mediafiles/catalog/live/16793-533/original/16793-533_image_0.jpg", 
    },
    {
      name: "AEROCON AAC BLOCKS",
      image: "https://lntsufin.com/storage/mediafiles/catalog/live/16592-1788/original/16592-1788_image_0.jpg", 
    },
    {
      name: "AEROCON PANEL",
      image: "https://buildwale.com/wp-content/uploads/2023/07/panel_75.png", 
    },
    {
      name: "FIBER CEMENT BOARD",
      image: "https://www.shutterstock.com/image-photo/fiber-cement-board-samples-swatch-260nw-1940150191.jpg", 
    },
  ];

  const newProducts = [
    {
      title: "SIPOREX",
      image: "https://buildwale.com/wp-content/uploads/2023/07/siporex-6inch-500x400.png", 
      description: "Siporex Light Weight Block 150mm (6inch) - Full Load",
      price: "₹76.50",
      oldPrice: "₹91.25",
      link: "#",
    },
    {
      title: "FIBER CEMENT BOARD",
      image: "https://buildwale.com/wp-content/uploads/2023/07/siporex-6inch-500x400.png", 
      description: "Fiber Cement Board 6ft x 4ft Sheet, 8mm",
      price: "₹650.00",
      link: "#",
    },
    {
      title: "BIRLA AEROCON",
      image: "https://buildwale.com/wp-content/uploads/2023/07/panel_75-500x400.png", 
      description: "Aerocon Concrete Wall Panel 3000x600x75mm (3inch) Thick",
      price: "₹2,699.00",
      oldPrice: "₹2,849.00",
      link: "#",
    },
    {
      title: "ULTRATECH FIXOBLOCK",
      image: "https://buildwale.com/wp-content/uploads/2023/07/fixblock-1-500x400.png", 
      description: "UltraTech FixoBlock Jointing Mortar – 40Kg Bag",
      price: "₹790.50",
      oldPrice: "₹850.00",
      link: "#",
    },
  ];

  const brands = [
    { name: "BIRLA AEROCON", logo: "https://buildwale.com/wp-content/uploads/2023/07/birla.png" }, 
    { name: "ULTRATECH FIXOBLOCK", logo: "https://buildwale.com/wp-content/uploads/2023/07/fixoblock.png" },
    { name: "MAXLITE AAC BLOCKS", logo: "https://buildwale.com/wp-content/uploads/2023/07/maxlite.png" },
    { name: "MEGHALITE AAC BLOCKS", logo: "https://buildwale.com/wp-content/uploads/2023/07/meghalite.png" },
    { name: "RAMCO SUPERGRADE", logo: "https://buildwale.com/wp-content/uploads/2023/07/ramco.png" },
    { name: "SIPOREX", logo: "https://buildwale.com/wp-content/uploads/2023/07/siporex-1.png" },
  ];
  
  const benefits = [
    { title: "Save Time", icon: "https://buildwale.com/wp-content/uploads/2023/07/save-time-100x100.png" }, 
    { title: "Assured Quality", icon: "https://buildwale.com/wp-content/uploads/2023/07/assured-quality-100x100.png" },
    { title: "Best Price", icon: "https://buildwale.com/wp-content/uploads/2023/07/best-price-100x100.png" },
    { title: "Timely delivery", icon: "https://buildwale.com/wp-content/uploads/2023/07/timely-delivery-on-site-100x100.png" },
    { title: "Call Support", icon: "https://buildwale.com/wp-content/uploads/2023/07/call-support-100x100.png" },
  ];

const HomePageMain = () => {
  return (
    <main className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Main Banner Content */}
        <section className="bg-grey-100 p-8 text-center">
          <h2 className="text-[#44B7B6] font-semibold text-lg mb-2">
            Light Weight Blocks
          </h2>
          <h1 className="text-4xl font-bold mb-4">SIPOREX AAC BLOCKS</h1>
          <p className="text-gray-600 mb-6">
            AAC, high-insulating, durable building product, which is produced in
            a wide range of sizes.
          </p>
          <button className="bg-red-500 text-white px-6 py-2 rounded-full font-bold">
            BUY NOW
          </button>
        </section>

        {/* Best Selling Products Section */}
        <section className="mt-12 bg-white">
          <h2 className="text-2xl font-bold text-center mb-8">
            Best Selling Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellingProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-md p-4"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover mb-4"
                />
                <h3 className="text-sm font-semibold text-gray-700 text-center mb-2">
                  {product.title}
                </h3>
                <p className="text-center text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                <div className="text-center mb-4">
                  <span className="text-teal-500 font-bold">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-gray-500 line-through ml-2 text-sm">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
                <div className="text-center">
                  <a
                    href={product.link}
                    className="bg-red-500 text-white py-2 px-4 rounded-full text-sm uppercase font-bold"
                  >
                    View Product
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Product Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-lg shadow-md p-4"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>


    <section className="bg-white py-12">
      {/* <div className="max-w-screen-xl mx-auto px-4"> */}
        <h2 className="text-2xl font-bold text-center mb-8">New Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-4"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-sm font-semibold text-gray-700 text-center mb-2">
                {product.title}
              </h3>
              <p className="text-center text-gray-600 text-sm mb-4">
                {product.description}
              </p>
              <div className="text-center mb-4">
                <span className="text-teal-500 font-bold">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-gray-500 line-through ml-2 text-sm">
                    {product.oldPrice}
                  </span>
                )}
              </div>
              <div className="text-center">
                <a
                  href={product.link}
                  className="bg-red-500 text-white py-2 px-4 rounded-full text-sm uppercase font-bold"
                >
                  View Product
                </a>
              </div>
            </div>
          ))}
        {/* </div> */}
      </div>
    </section>

    <section className="bg-gray-100 py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Our Brands</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 w-auto grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Do You Benefit Section */}
      <section className="bg-white py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            How do you benefit?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className="h-16 w-16 mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-700">
                  {benefit.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      </div>
    </main>
  );
};

export default HomePageMain;
