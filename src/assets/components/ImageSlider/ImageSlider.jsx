/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";

const images = [
  "/Images/1.jpg",
  "/Images/2.jpg",
  "/Images/3.jpg",
  "/Images/4.jpg",
  "/Images/5.jpg",
  "/Images/6.jpg",
  "/Images/7.jpg",
  "/Images/8.jpg",
  "/Images/9.jpg",
  "/Images/10.jpg",
  "/Images/12.jpg",
  "/Images/14.jpg",
  "/Images/15.jpg",
  "/Images/16.jpg",
  "/Images/17.jpg",
  "/Images/18.jpg",
  "/Images/19.jpg",
  "/Images/20.jpg",
  "/Images/21.jpg",
  "/Images/22.jpg",
  "/Images/23.jpg",
  "/Images/24.jpg",
  // Add more image URLs as needed
];

const ImageGallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    let scrollAmount = 10;
    let scrollSpeed = 3; // Speed of scrolling

    const scrollGallery = () => {
      if (gallery) {
        gallery.scrollLeft += scrollSpeed;
        scrollAmount += scrollSpeed;
        if (scrollAmount >= gallery.scrollWidth / 2) {
          gallery.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(scrollGallery, 20); // Adjust interval for scroll speed

    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => {
      setInterval(scrollGallery, 20);
    };

    gallery.addEventListener("mouseenter", handleMouseEnter);
    gallery.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(interval);
      gallery.removeEventListener("mouseenter", handleMouseEnter);
      gallery.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full my-8 relative overflow-hidden">
      <div
        ref={galleryRef}
        className="opacity-90 w-full shadow-xl shadow-zinc-800 flex overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar"
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="w-72 h-72 border-2 object-cover m-2"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
