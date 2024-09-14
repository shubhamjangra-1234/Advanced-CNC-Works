/* eslint-disable no-unused-vars */
import React from "react";

const WoodenWork = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title Section */}
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Wooden Work Services
        </h2>
        <p className="mt-4 text-center text-gray-600 text-lg">
          At Advanced CNC Works, we specialize in high-quality wooden work,
          offering a range of services including doors, windows, furniture, and
          decorative wood carving.
        </p>

        {/* Wooden Work Introduction Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-900">
              Custom Wooden Crafting
            </h3>
            <p className="mt-4 text-gray-600">
              We take pride in our craftsmanship, offering custom-made wooden
              products such as doors, windows, and furniture. Our expertise
              includes CNC precision cutting, carving, and engraving to achieve
              the finest details in every piece.
            </p>
          </div>
          <div>
            <img
              src="/Images/9.jpg"
              alt="Custom Wooden Crafting"
              className="w-full h-64 object-cover rounded-lg   hover:scale-95 duration-300 shadow-xl"
            />
          </div>
        </div>

        {/* Wooden Door Services */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:order-2">
            <h3 className="text-2xl font-bold text-blue-900">Wooden Doors</h3>
            <p className="mt-4 text-gray-600">
              Our wooden doors are crafted with precision and attention to
              detail, offering both durability and aesthetic appeal. Whether you
              need modern designs or traditional styles, our wooden doors
              enhance the beauty of any space.
            </p>
          </div>
          <div className="md:order-1">
            <img
              src="/Images/25.jpg"
              alt="Wooden Doors"
              className="w-full h-64 object-cover rounded-lg   hover:scale-95 duration-300 shadow-xl"
            />
          </div>
        </div>

        {/* Wooden Furniture Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-900">
              Wooden Furniture
            </h3>
            <p className="mt-4 text-gray-600">
              Our team creates custom wooden furniture that is both functional
              and stylish. From tables and chairs to cabinetry and shelving, we
              offer designs tailored to your specific needs, combining
              craftsmanship with modern techniques.
            </p>
          </div>
          <div>
            <img
              src="/Images/18.jpg"
              alt="Wooden Furniture"
              className="w-full h-64 object-cover rounded-lg   hover:scale-95 duration-300 shadow-xl"
            />
          </div>
        </div>

        {/* Decorative Wooden Carvings */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:order-2">
            <h3 className="text-2xl font-bold text-blue-900">
              Decorative Wooden Carvings
            </h3>
            <p className="mt-4 text-gray-600">
              We specialize in decorative wooden carvings, providing intricate
              designs that are perfect for doors, panels, and furniture. Our
              advanced CNC technology ensures precise cuts and detailed carvings
              that bring your vision to life.
            </p>
          </div>
          <div className="md:order-1">
            <img
              src="/Images/4.jpg"
              alt="Decorative Wooden Carvings"
              className="w-full h-64 object-cover rounded-lg   hover:scale-95 duration-300 shadow-xl"
            />
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center text-blue-900">
            Why Choose Our Wooden Work Services?
          </h3>
          <p className="mt-4 text-gray-600 text-center">
            Our expertise in woodwork spans years of experience in crafting,
            carving, and building durable, high-quality products. We combine
            traditional craftsmanship with modern CNC technology to meet the
            needs of both residential and commercial clients. From intricate
            designs to large-scale projects, we are committed to delivering
            excellence in every piece.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="/Images/8.jpg"
              alt="Precision Woodwork"
              className="w-full h-64 object-cover rounded-lg   hover:scale-95 duration-300 shadow-xl"
            />
            <img
              src="/Images/20.jpg"
              alt="High-Quality Craftsmanship"
              className="w-full h-64 object-cover rounded-lg   hover:scale-95 duration-300 shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WoodenWork;
