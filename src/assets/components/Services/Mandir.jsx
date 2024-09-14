/* eslint-disable no-unused-vars */
import React from "react";

const CorianMandir = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Corian Mandir
        </h2>
        <p className="mt-4 text-center text-gray-600 text-lg">
          Custom-made Corian Mandirs crafted with intricate designs and
          exceptional craftsmanship for modern homes and spiritual spaces.
        </p>

        {/* Image Gallery */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <img
            src="/Images/32.jpg"
            alt="Corian Mandir Design 1"
            className="w-full h-64 object-cover rounded-lg   hover:scale-95 duration-300 shadow-xl"
          />
          <img
            src="/Images/33.jpg"
            alt="Corian Mandir Design 2"
            className="w-full h-64 object-cover rounded-lg   hover:scale-95 duration-300 shadow-xl"
          />
          <img
            src="/Images/43.jpg"
            alt="Corian Mandir Design 3"
            className="w-full h-64 object-cover rounded-lg   hover:scale-95 duration-300 shadow-xl"
          />
        </div>

        {/* Detailed Description Section */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-blue-900 text-center">
            Why Choose Corian Mandirs?
          </h3>
          <p className="mt-4 text-gray-600 text-lg text-center">
            Corian Mandirs are the perfect blend of modern elegance and
            spiritual significance. Made from high-quality, durable, and
            non-porous Corian material, these Mandirs are easy to maintain,
            customizable, and offer a unique aesthetic to any home.
          </p>

          <div className="mt-8">
            <h4 className="text-xl font-semibold text-gray-800">
              Features of Corian Mandirs:
            </h4>
            <ul className="mt-4 text-gray-600 list-disc pl-5 space-y-2">
              <li>High durability and resistance to stains and scratches.</li>
              <li>
                Customizable with intricate designs to suit personal
                preferences.
              </li>
              <li>
                Available in various colors and finishes to match any home
                decor.
              </li>
              <li>Easy to clean and maintain, ensuring long-lasting beauty.</li>
              <li>Non-porous surface ensures hygiene and ease of use.</li>
            </ul>
          </div>

          {/* Images with Detailed Description */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="/Images/38.jpg"
                alt="Corian Craft Work"
                className="w-full h-64 object-cover rounded-lg  hover:scale-95 duration-300 shadow-xl"
              />
              <h4 className="mt-4 text-xl font-semibold text-gray-800">
                Intricate Craft Work
              </h4>
              <p className="mt-2 text-gray-600">
                Our Corian Mandirs feature beautiful, intricate designs carved
                with precision, making each Mandir unique and visually
                appealing.
              </p>
            </div>
            <div>
              <img
                src="/Images/36.jpg"
                alt="Modern Mandir Design"
                className="w-full h-64 object-cover  hover:scale-95 duration-300 shadow-xl rounded-lg"
              />
              <h4 className="mt-4 text-xl font-semibold text-gray-800">
                Modern Design
              </h4>
              <p className="mt-2 text-gray-600">
                Combining modern design elements with traditional spiritual
                aesthetics, our Mandirs are perfect for contemporary homes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorianMandir;
