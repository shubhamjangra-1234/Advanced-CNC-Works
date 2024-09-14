/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaHammer,
  FaCubes,
  FaTree,
  FaDoorOpen,
  FaDraftingCompass,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "MS and CS Works",
      icon: <FaHammer className="text-4xl text-blue-600" />,
      description:
        "We provide high-quality mild steel and carbon steel fabrication works, focusing on precision and durability.",
      image:
        "https://imgs.search.brave.com/_TEbUlyzX860jIEAs6T4HCfhrG2AvoxjbKy8CvlfNmw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzU3LzUzLzMy/LzM2MF9GXzU3NTMz/MjAzX0dWakdPSFo3/WE1BSGJJbjh3TTMz/a3BLbjFxdVhGQ2tN/LmpwZw",
      link: "/services/steel",
    },
    {
      title: "Corian Mandir",
      icon: <FaCubes className="text-4xl text-blue-600" />,
      description:
        "Custom-made Corian mandirs with intricate designs and premium craftsmanship.",
      image: "/public/Images/36.jpg",
      link: "/services/mandir",
    },
    {
      title: "Wooden Work",
      icon: <FaTree className="text-4xl text-blue-600" />,
      description:
        "Wooden crafting for doors, windows, furniture, and more, using top-quality wood materials.",
      image: "/public/Images/9.jpg",
      link: "/services/wood",
    },

    {
      title: "3D Doors",
      icon: <FaDoorOpen className="text-4xl text-blue-600" />,
      description:
        "Innovative 3D door designs with enhanced durability and unique aesthetics.",
      image: "/public/Images/25.jpg",
      link: "/services/door",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Our Services
        </h2>
        <p className="mt-4 text-center text-gray-600 text-lg">
          We offer a wide range of services to meet the needs of our diverse
          clientele. Here are some of our key services.
        </p>

        {/* Service Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-6">{service.icon}</div>
              <a href={service.link}>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
                  {service.title}
                </h3>
              </a>
              <a href={service.link}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover hover:scale-95 duration-300 mb-4 rounded-lg"
                />
              </a>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Extra Description */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center text-blue-900">
            Additional Services & Information
          </h3>
          <p className="mt-4 text-gray-600 text-center">
            Widely used in 3D carved plates with wave patterns. Cabinet doors,
            craft wooden doors, non-painting wooden panels, doors, screens,
            craft windows, computer desks, and panel furniture auxiliary
            processing, etc. We can engrave brass, ACP board, MDF, wood, Corian,
            iron, plastic board, PVC, acrylic, CNC, laser & bending work, etc.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="/public/Images/35.jpg"
              alt="Engraving Work"
              className="w-full h-64 object-cover rounded-lg  hover:scale-95 duration-300 shadow-xl"
            />
            <img
              src="/public/Images/8.jpg"
              alt="Wood Crafting"
              className="w-full h-64 object-cover rounded-lg  hover:scale-95 duration-300 shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
