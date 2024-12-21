import React, { useState } from "react";

const allProducts = [
  {
    name: "Calcium Silicate Board 6ft x 4ft Sheet, 6mm",
    price: "₹580.00",
    image: "https://buildwale.com/wp-content/uploads/2024/09/Calcium-Silicate-Board-02-300x300.jpg",
    link: "#",
  },
  {
    name: "AAC Grade 1 Light Weight Block 75mm (3inch)",
    price: "₹41.50",
    oldPrice: "₹45.50",
    image: "https://buildwale.com/wp-content/uploads/2023/07/aac_100-300x300.jpg",
    link: "#",
  },
  {
    name: "AAC Grade 1 Light Weight Block 100mm (4inch)",
    price: "₹49.00",
    oldPrice: "₹59.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/aac_150-300x300.jpg",
    link: "#",
  },
  {
    name: "AAC Grade 1 Light Weight Block 125mm (5inch)",
    price: "₹62.00",
    oldPrice: "₹72.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/aac_200-300x300.jpg",
    link: "#",
  },
  {
    name: "AAC Grade 1 Light Weight Block 150mm (6inch)",
    price: "₹76.50",
    oldPrice: "₹91.25",
    image: "https://buildwale.com/wp-content/uploads/2023/07/aac_230-300x300.jpg",
    link: "#",
  },
  {
    name: "AAC Grade 1 Light Weight Block 200mm (8inch)",
    price: "₹102.00",
    oldPrice: "₹117.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/siporex-4inch-300x300.png",
    link: "#",
  },
  {
    name: "AAC Grade 1 Light Weight Block 230mm (9inch)",
    price: "₹122.00",
    oldPrice: "₹135.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/siporex-6inch-300x300.png",
    link: "#",
  },
  {
    name: "Siporex Light Weight Block 100mm",
    price: "₹49.00",
    oldPrice: "₹59.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/siporex-9inch-300x300.png",
    link: "#",
  },
  {
    name: "Fiber Cement Board 6ft x 4ft",
    price: "₹650.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/siporex-9inch-300x300.png",
    link: "#",
  },
  {
    name: "Aerocon Panel 50mm (2inch)",
    price: "₹900.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/meghalite-8.jpg",
    link: "#",
  },
  {
    name: "Xtralite AAC Block 100mm",
    price: "₹95.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/meghalite-8.jpg",
    link: "#",
  },
  {
    name: "Jointing Mortar 40KG Bag",
    price: "₹589.00",
    oldPrice: "₹670.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/meghalite-8.jpg",
    link: "#",
  },

  {
    name: "Meghalite AAC Light Weight Block 150mm (6inch)",
    price: "₹76.50",
    image: "https://buildwale.com/wp-content/uploads/2023/09/fcb-6x4-6mm-600x600.jpg",
    link: "#",
  },
  {
    name: "Meghalite AAC Lightweight Block 200mm (8inch)",
    price: "₹102",
    oldPrice: "₹45.50",
    image: "https://buildwale.com/wp-content/uploads/2023/09/fcb-4x6-8mm-600x600.jpg",
    link: "#",
  },
  {
    name: "Aerocon Concrete Wall Panel 3000x600x50mm (2inch)",
    price: "₹1849.00",
    oldPrice: "₹1999.00",
    image: "https://buildwale.com/wp-content/uploads/2023/09/fcb-4x6-10mm-600x600.jpg",
    link: "#",
  },
  {
    name: "Fiber Cement Board 6ft x 4ft Sheet, 6mm",
    price: "₹662.00",
    oldPrice: "₹590.00",
    image: "https://buildwale.com/wp-content/uploads/2023/09/fcb-4x8-10mm-600x600.jpg",
    link: "#",
  },
  {
    name: "Fiber Cement Board 6ft x 4ft Sheet, 8mm",
    price: "₹650",
    oldPrice: "₹700.00",
    image: "https://buildwale.com/wp-content/uploads/2023/09/fcb-4x8-10mm-600x600.jpg",
    link: "#",
  },
  {
    name: "Fiber Cement Board 6ft x 4ft Sheet, 10mm",
    price: "₹740.00",
    oldPrice: "₹700.00",
    image: "https://buildwale.com/wp-content/uploads/2023/09/fcb-4x8-18mm-600x600.jpg",
    link: "#",
  },
  {
    name: "Fiber Cement Board 8ft x 4ft Sheet, 10mm",
    price: "₹122.00",
    oldPrice: "₹135.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/panel_75.png",
    link: "#",
  },
  {
    name: "Fiber Cement Board 8ft x 4ft Sheet, 12mm",
    price: "₹49.00",
    oldPrice: "₹59.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/panel_75.png",
    link: "#",
  },
  {
    name: "Fiber Cement Board 8ft x 4ft Sheet, 18mm",
    price: "₹650.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/panel_50.png",
    link: "#",
  },
  {
    name: "Aerocon Concrete Wall Panel 3000x600x75mm (3inch) ",
    price: "₹900.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/panel_75-300x300.png",
    link: "#",
  },
  {
    name: "Aerocon Concrete Wall Panel 2700x600x50mm (2inch) ",
    price: "₹95.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/panel_75-300x300.png",
    link: "#",
  },
  {
    name: "Aerocon Concrete Wall Panel 2400x600x50mm (2inch) ",
    price: "₹589.00",
    oldPrice: "₹670.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/aerocon-4-300x300.png",
    link: "#",
  },

  {
    name: "Aerocon Concrete Wall Panel 2700x600x75mm (3inch) ",
    price: "₹580.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/aerocon-6-300x300.png",
    link: "#",
  },
  {
    name: "Aerocon Concrete Wall Panel 2400x600x75mm (3inch) ",
    price: "₹41.50",
    oldPrice: "₹45.50",
    image: "https://buildwale.com/wp-content/uploads/2023/07/aerocon-8-300x300.png",
    link: "#",
  },
  {
    name: "Aerocon AAC Light Weight Block 100mm (4inch)",
    price: "₹49.00",
    oldPrice: "₹59.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/xtralite-300x300.jpg",
    link: "#",
  },
  {
    name: "Aerocon Light Weight Block 150mm (6inch)",
    price: "₹62.00",
    oldPrice: "₹72.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/xtralite-300x300.jpg",
    link: "#",
  },
  {
    name: "Aerocon Light Weight Block 200mm (8inch)",
    price: "₹76.50",
    oldPrice: "₹91.25",
    image: "https://buildwale.com/wp-content/uploads/2023/07/xtralite-300x300.jpg",
    link: "#",
  },
  {
    name: "Ultratech Xtralite AAC Blocks 100mm (4 Inch)",
    price: "₹102.00",
    oldPrice: "₹117.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/block-jointing-mortar_031-300x300.jpg",
    link: "#",
  },
  {
    name: "Ultratech Xtralite AAC Blocks 150mm (6 Inch)",
    price: "₹122.00",
    oldPrice: "₹135.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/fixblock-1-300x300.png",
    link: "#",
  },
  {
    name: "Ultratech Xtralite AAC Blocks 200mm (8 Inch)",
    price: "₹49.00",
    oldPrice: "₹59.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/ready-mix-plaster-300x300.png",
    link: "#",
  },
  {
    name: "Block Jointing Mortar AAC Block Fix 40KG Bag",
    price: "₹650.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/saw-11-300x300.png",
    link: "#",
  },
  {
    name: "UltraTech FixoBlock Jointing Mortar – 40Kg Bag",
    price: "₹900.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/notch-trowelpsd.png",
    link: "#",
  },
  {
    name: "Ready Mix Super Plaster 40kg Bag",
    price: "₹95.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/rubber-hammer.png",
    link: "#",
  },
  {
    name: "AAC Block Cutting Hand Saw 28inch",
    price: "₹589.00",
    oldPrice: "₹670.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/trowel.png",
    link: "#",
  },

  {
    name: "Notch Trowel",
    price: "₹49.00",
    oldPrice: "₹59.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/water-level-scale.png",
    link: "#",
  },
  {
    name: "Rubber Hammer",
    price: "₹650.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/fcb.jpg",
    link: "#",
  },
  {
    name: "Trowel",
    price: "₹900.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/xtralite-300x300.jpg",
    link: "#",
  },
  {
    name: "Water Level Scale",
    price: "₹795.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/block-jointing-mortar_031-300x300.jpg",
    link: "#",
  },
  {
    name: "AAC Block Hand Saw 24inch",
    price: "₹1589.00",
    image: "https://buildwale.com/wp-content/uploads/2023/07/carbide-tipped-hand-saw.png",
    link: "#",
  },
];

// Pagination Logic
const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-16 px-4 bg-white ">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 ">Our Products</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-[#44B7B6] text-xl font-bold">
                {product.price}{" "}
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-base">
                    {product.oldPrice}
                  </span>
                )}
              </p>
              <a
                href={product.link}
                className="block text-center bg-red-500 text-white py-2 rounded-md font-semibold mt-4 hover:bg-red-600"
              >
                VIEW PRODUCT
              </a>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`mx-1 px-4 py-2 rounded-md ${
                currentPage === page
                  ? "bg-[#44B7B6] text-white"
                  : "bg-white border"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
