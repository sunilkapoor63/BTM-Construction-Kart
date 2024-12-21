import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Description */}
        <div>
          <img
            src="https://buildwale.com/wp-content/uploads/2023/07/logo.svg"
            alt="BuildWale Logo"
            className="h-12 mb-4"
          />
          <p className="text-sm">
            Buildwale is your one-stop solution for all your building needs of
            modern construction. We are committed to giving you the very best of
            products, best price in the market along with superior quality and
            customer services.
          </p>
        </div>

        {/* Address Section */}
        <div>
          <h4 className="font-semibold mb-2">Address</h4>
          <p className="text-sm leading-relaxed">
            # 19, Lagger Main Road, <br />
            Parvathi Nagar, Peenya 3rd Phase, <br />
            Bengaluru - 560058 <br />
            Email: info@buildwale.com
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>FAQs</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="font-semibold mb-2">Products</h4>
          <ul className="space-y-2 text-sm">
            
            <li>Track Order</li>
            <li>Contact us</li>
            <li>Cart</li>
            <li>Products</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t mt-10 py-6 text-center">
        <p className="text-sm">
          © 2017 - 2023 - A G Project Solutions - Build Wale
        </p>

        <div className="flex items-center justify-center space-x-4 mt-4">
          <p className="text-xs">Secured Payments by</p>
          <img
            src="https://buildwale.com/wp-content/uploads/2023/07/payments.png"
            alt="PayU"
            className="h-4"
          />
         
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
