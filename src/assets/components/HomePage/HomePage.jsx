/* eslint-disable react/no-unescaped-entities */
 
/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import ImageSlider from "../ImageSlider/ImageSlider";
function Home() {
  const images = [
    "/Images/18.jpg",
    "/Images/13.jpg",
    "/Images/8.jpg",
    "/Images/5.jpg",
    "/Images/4.jpg",
    "/Images/17.jpg",
    "/Images/20.jpg",
    "/Images/9.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Function to randomly change images every 2 seconds
  useEffect(() => {
    const changeImage = setInterval(() => {
      setCurrentImage(Math.floor(Math.random() * images.length));
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(changeImage); // Cleanup interval on component unmount
  }, [images.length]);
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Advanced CNC Works - Home</title>
        <meta
          name="description"
          content="Top CNC services for industrial work."
        />
      </Helmet>
      <div className="my-5 max-h-80 flex justify-center relative bg-cover">
        <div className="bg-contain w-full ">
          <img
            src={images[currentImage]}
            alt={`Random CNC Equipment ${currentImage + 1}`}
            className="w-full max-h-80 md:h-80 lg:h-96 object-cover "
          />
        </div>
      </div>
      {/* Hero Section */}
      <section className="bg-zinc-200 text-zinc-700 py-14">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to Advanced CNC Works
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Delivering precision CNC machining services with top-notch equipment
            and expertise.
          </p>
          <a
            href="/services"
            className="mt-8 inline-block bg-white text-blue-900 font-bold py-3 px-6 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Explore Our Services
          </a>
        </div>
      </section>
      <section className=" px-10">
        <h1 className="text-4xl font-extrabold my-8 text-zinc-700">About us</h1>
         {/* List Section */}
         <ul className="list-none space-y-6 text-lg text-gray-700">
          <li className="flex">
            <div>
              <h3 className="font-semibold text-xl text-zinc-700">Precision and Innovation</h3>
              <p>
                At <span className="font-semibold text-gray-900">Advanced CNC Works</span>, we provide precise CNC solutions 
                tailored to your specific needs. From metal cutting to 3D carving, quality is at the core of every project.
              </p>
            </div>
          </li>

          <li className="flex ">
            <div>
              <h3 className="font-semibold text-xl text-zinc-700">State-of-the-Art Equipment</h3>
              <p>
                Our advanced equipment and skilled team enable us to execute complex designs with exceptional accuracy. 
                Whether it's CNC machined parts or custom cabinetry, we deliver unmatched precision.
              </p>
            </div>
          </li>

          <li className="flex">
            <div>
              <h3 className="font-semibold text-xl text-zinc-700">Customer-Centered Approach</h3>
              <p>
                We work closely with our clients to ensure each project meets their unique specifications. Your satisfaction 
                is our top priority, and we consistently deliver high-quality results.
              </p>
            </div>
          </li>
        </ul>
        <a
          href="/about"
          className="mt-8 inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-400 hover:text-white transition duration-300"
        >
          More...
        </a>
      </section>
      <ImageSlider></ImageSlider>

      {/* Call to Action Section */}
      <section className="bg-blue-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Ready to Start Your Project?</h2>
          <p className="mt-4 text-lg">
            Get in touch with us today for professional CNC services.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block bg-white text-blue-900 font-bold py-3 px-6 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
