import React from "react";

const ContactUsPage = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-8 rounded-md shadow-lg">
        
        {/* Contact Information Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">CONTACT US</h2>
          <p className="mb-4">
            <span className="font-semibold">Bangalore</span>
          </p>
          <p className="mb-4">
            AG Project Solutions - Build Wale <br />
            #19, Lagger Main Road, <br />
            Parvathi Nagar, Peenya 3rd Phase, <br />
            Bengaluru- 560058
          </p>
          <p className="mb-2">
            <span className="font-semibold">Mobile:</span> +91 98861 72266 <br />
            <span className="text-sm">(MON - SAT: 09:00AM - 07:00PM)</span>
          </p>
          <p className="mb-2">
            <span className="font-semibold">Phone:</span> 080 4117 9485
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:info@buildwale.com" className="text-[#44B7B6]">
              info@buildwale.com
            </a>
          </p>
          <p className="mb-4">
            <span className="font-semibold">Whatsapp:</span> +91 98861 72266
          </p>
        </div>

        {/* Contact Form Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">CONTACT US</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm ">Your name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#44B7B6]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm">Your email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#44B7B6]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm">Subject</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#44B7B6]"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm">
                Your message (optional)
              </label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#44B7B6]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gray-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Google Map Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Locate Us</h2>
          <div className="w-full h-80 rounded-md overflow-hidden shadow-md">
            <iframe
              title="Google Maps"
              src="https://maps.google.com/maps?q=Lagger%20Main%20Road,%20Peenya&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
            
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
