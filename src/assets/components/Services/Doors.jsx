/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const ThreeDDoorsService = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-800">
          3D Doors Service
        </h2>
        <p className="mt-4 text-center text-gray-600 text-lg">
          Explore our exclusive range of 3D door designs that combine
          durability, aesthetics, and innovation for a modern look.
        </p>

        {/* Introduction Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-900">
              About Our 3D Doors
            </h3>
            <p className="mt-4 text-gray-600">
              Our 3D doors are designed with cutting-edge technology to create
              stunning visuals and intricate patterns that stand out. Made from
              high-quality materials such as MDF, wood, and Corian, these doors
              are perfect for both residential and commercial spaces. Whether
              you’re looking for a contemporary look or a more traditional
              design with a modern twist, our 3D doors offer a versatile
              solution.
            </p>
            <p className="mt-4 text-gray-600">
              We focus on delivering precision in every design, ensuring that
              each door is a masterpiece of craftsmanship. Our doors are
              durable, visually appealing, and can be customized to fit your
              specific needs. From minimalist patterns to more complex designs,
              we offer a range of styles to suit any environment.
            </p>
          </div>
          <div>
            <img
              src="/Images/23.jpg"
              alt="3D Doors"
              className="w-full h-64 object-cover rounded-lg   hover:scale-95 duration-300 shadow-xl"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:order-2">
            <h3 className="text-2xl font-bold text-blue-900">Key Features</h3>
            <ul className="mt-4 text-gray-600 list-disc pl-5">
              <li>High-quality materials like MDF, Corian, and wood.</li>
              <li>Intricate 3D patterns and designs.</li>
              <li>Customizable to fit your space and design requirements.</li>
              <li>Durable and long-lasting construction.</li>
              <li>Ideal for both residential and commercial spaces.</li>
            </ul>
          </div>
          <div className="md:order-1">
            <img
              src="/Images/25.jpg"
              alt="3D Doors Features"
              className="w-full h-64 object-cover rounded-lg  hover:scale-95 duration-300 shadow-xl"
            />
          </div>
        </div>

        {/* Why Choose Our 3D Doors */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-blue-900">
            Why Choose Our 3D Doors?
          </h3>
          <p className="mt-4 text-gray-600">
            Our 3D doors stand out for their innovative design and exceptional
            craftsmanship. Here's why you should choose us:
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold text-blue-900">
                Customizable Designs
              </h4>
              <p className="mt-4 text-gray-600">
                Each 3D door design is fully customizable, allowing you to
                create a door that perfectly complements your style and needs.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold text-blue-900">
                Durable Construction
              </h4>
              <p className="mt-4 text-gray-600">
                Built with high-quality materials, our 3D doors are designed to
                last, providing both aesthetic appeal and longevity.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold text-blue-900">
                Expert Craftsmanship
              </h4>
              <p className="mt-4 text-gray-600">
                Our team of skilled artisans ensures that every door is crafted
                to perfection, with attention to detail in every aspect.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-blue-900">
            Gallery
          </h3>
          <p className="mt-4 text-center text-gray-600">
            Explore our gallery of 3D door designs. Each piece showcases the
            unique patterns and high-quality materials we use in our work.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <img
              src="/Images/26.jpg"
              alt="3D Door Gallery 1"
              className="w-full h-64 object-cover rounded-lg  hover:scale-95 duration-300 shadow-xl"
            />
            <img
              src="/Images/29.jpg"
              alt="3D Door Gallery 2"
              className="w-full h-64 object-cover rounded-lg  hover:scale-95 duration-300 shadow-xl"
            />
            <img
              src="/Images/27.jpg"
              alt="3D Door Gallery 3"
              className="w-full h-64 object-cover rounded-lg  hover:scale-95 duration-300 shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeDDoorsService;
