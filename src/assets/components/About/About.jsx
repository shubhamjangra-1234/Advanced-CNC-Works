/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";

const About = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          About Advanced CNC Works
        </h2>
        <p className="mt-4 text-center text-gray-600 text-lg">
          Learn more about our company, background, team, and why we are the
          right choice for CNC machining services.
        </p>

        {/* Our Work Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-900">Our Work</h3>
            <p className="mt-4 text-gray-600">
              At Advanced CNC Works, we provide high-precision machining
              services using state-of-the-art equipment. Our work spans across
              various industries including automotive, aerospace, and
              manufacturing, delivering custom components with the highest
              quality.
            </p>
          </div>
          <div>
            <img
              src="/public/Images/17.jpg"
              alt="Our CNC Work"
              className="w-full h-64 object-cover rounded-lg hover:scale-95 duration-300 shadow-lg"
            />
          </div>
        </div>

        {/* Our Background Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:order-2">
            <h3 className="text-2xl font-bold text-blue-900">Our Background</h3>
            <p className="mt-4 text-gray-600">
              With over years of experience in CNC machining, we have built a
              reputation for delivering precise, high-quality parts and
              components. Our commitment to innovation, quality, and customer
              satisfaction has driven us to the forefront of the CNC industry.
            </p>
          </div>
          <div className="md:order-1">
            <img
              src="/public/Images/13.jpg"
              alt="Our Background"
              className="w-full h-64 object-cover rounded-lg hover:scale-95 duration-300 shadow-lg"
            />
          </div>
        </div>

        {/* Our Team Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-900">Our Team</h3>
            <p className="mt-4 text-gray-600">
              Our team consists of highly skilled engineers and technicians who
              are experts in CNC machining. We work together to ensure every
              project is completed to the highest standard, from initial design
              to final production. Our collaborative approach guarantees the
              best results for our clients.
            </p>
          </div>
          <div>
            <img
              src="/public/Images/18.jpg"
              alt="Our Team"
              className="w-full h-64 object-cover rounded-lg hover:scale-95 duration-300 shadow-lg"
            />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-blue-900">Why Choose Us?</h3>
          <p className="mt-4 text-gray-600">
            We combine decades of experience with cutting-edge technology to
            deliver exceptional CNC machining services. Our attention to detail,
            commitment to quality, and customer-first approach make us the ideal
            partner for all your CNC needs.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold text-blue-900">
                Advanced Technology
              </h4>
              <p className="mt-4 text-gray-600">
                We utilize state-of-the-art CNC machines to ensure precision and
                efficiency in every project.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold text-blue-900">
                Experienced Team
              </h4>
              <p className="mt-4 text-gray-600">
                Our team of skilled professionals has decades of experience in
                CNC machining and production.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold text-blue-900">
                Customer Satisfaction
              </h4>
              <p className="mt-4 text-gray-600">
                We prioritize customer satisfaction and deliver results that
                exceed expectations every time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-center text-gray-800">
          Our Team
        </h3>
        <p className="mt-4 text-center text-gray-600 text-lg">
          We believe that our team is the backbone of our success. Every member
          brings their expertise and dedication to ensure the best results for
          our clients. Moreover, we conduct regular training and workshops to
          enhance their production skills and knowledge. Following are the
          members included in our team:
        </p>

        
        <div className="mx-auto my-10 max-w-7xl px-2 lg:px-8">
          <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-9 w-9 hover:scale-95 duration-200 "
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 32 32"
                  enable-background="new 0 0 32 32"
                  xml:space="preserve"
                  fill=""
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path
                        fill="#808184"
                        d="M1.836,23.001c-1.042,0.891-1.672,2.188-1.728,3.559c-0.056,1.37,0.467,2.714,1.435,3.687 c0.935,0.939,2.179,1.457,3.504,1.457c1.424,0,2.778-0.613,3.716-1.681l6.626-7.474l7.739,7.739 c0.916,0.916,2.134,1.421,3.429,1.421c1.296,0,2.514-0.505,3.43-1.421s1.421-2.134,1.421-3.43c0-1.295-0.505-2.513-1.421-3.429 l-8.152-8.152l2.042-2.303c0.604,0.172,1.225,0.259,1.848,0.259c1.903,0,3.659-0.817,4.818-2.242c1.601-1.967,1.8-4.746,0.507-7.08 c-0.291-0.524-1.166-0.503-1.443,0.031l-1.473,2.837c-0.354,0.683-1.248,0.967-1.937,0.612l-1.502-0.782 c-0.341-0.176-0.592-0.475-0.707-0.84c-0.116-0.365-0.082-0.754,0.094-1.094l1.66-3.188c0.133-0.256,0.124-0.556-0.025-0.804 c-0.146-0.242-0.401-0.39-0.75-0.392c-1.903,0-3.66,0.816-4.819,2.241c-1.285,1.579-1.679,3.691-1.079,5.712l-5.612,4.806 L5.739,5.334C6.204,4.658,6.346,3.819,6.08,3.012C5.768,2.065,5.002,1.38,4.033,1.177L1.97,0.744 C1.544,0.653,1.1,0.787,0.793,1.095c-0.309,0.309-0.44,0.749-0.351,1.177l0.433,2.063c0.265,1.266,1.396,2.186,2.69,2.186 c0.537,0,1.038-0.166,1.476-0.47l7.653,7.653L1.836,23.001z M3.565,5.538c-0.706,0-1.521-0.46-1.712-1.373L1.421,2.136 C1.401,2.04,1.431,2.01,1.5,1.941C1.55,1.891,1.615,2,1.73,2c0.011,0,0.022,0,0.034,0l2.063,0.295 C4.444,2.424,4.931,2.724,5.13,3.327C5.319,3.9,5.197,4.507,4.811,4.943L4.643,5.116C4.339,5.386,3.966,5.538,3.565,5.538z M29.279,24.137c0.728,0.727,1.128,1.693,1.128,2.722c0,1.029-0.4,1.996-1.128,2.723c-1.452,1.455-3.99,1.455-5.444,0l-7.782-7.782 l5.117-5.772L29.279,24.137z M20.118,8.242c-0.63-1.786-0.329-3.685,0.805-5.078C21.83,2.05,23.18,1.38,24.712,1.3l-1.518,2.914 c-0.299,0.578-0.356,1.237-0.16,1.857s0.623,1.127,1.2,1.426l1.502,0.782c0.347,0.179,0.733,0.273,1.121,0.273 c0.913,0,1.742-0.503,2.163-1.312l1.315-2.533c0.913,1.905,0.703,4.091-0.568,5.653c-1.347,1.654-3.753,2.286-5.891,1.567 c-0.19-0.063-0.399-0.008-0.534,0.142L8.013,29.36c-0.749,0.854-1.83,1.343-2.966,1.343c-1.057,0-2.05-0.413-2.795-1.162 c-0.783-0.787-1.189-1.832-1.145-2.941s0.534-2.117,1.379-2.839L19.972,8.788C20.129,8.653,20.187,8.437,20.118,8.242z"
                      ></path>{" "}
                      <path
                        fill=""
                        d="M19.877,21.033l6.026,6.026c0.098,0.098,0.226,0.146,0.354,0.146s0.256-0.049,0.354-0.146 c0.195-0.195,0.195-0.512,0-0.707l-6.026-6.026c-0.195-0.195-0.512-0.195-0.707,0S19.682,20.838,19.877,21.033z"
                      ></path>{" "}
                      <path
                        fill="#808184"
                        d="M5.065,24.769c-1.103,0-2,0.897-2,2s0.897,2,2,2s2-0.897,2-2S6.168,24.769,5.065,24.769z M5.065,27.769 c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S5.617,27.769,5.065,27.769z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">Engineers</h3>
              <p class="mt-4 text-sm text-gray-600">
                Our engineers are highly skilled in CNC technology, ensuring
                that every project is executed with precision and innovation.
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
                <svg
                  className="h-11 w-11 hover:scale-95 duration-200 "
                  viewBox="0 0 1024 1024"
                  class="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M689.1 462.3c10.5 10.5 24.6 16.2 39.5 16.2s29-5.8 39.5-16.2l116.1-115.4c10.5-10.5 16.3-24.4 16.3-39.3 0-14.9-5.8-28.8-16.3-39.3L761 145.9c-21.1-20.9-57.9-20.9-79 0L566 261.3c-10.5 10.5-16.3 24.4-16.3 39.3s5.8 28.8 16.3 39.3l123.1 122.4z m-89.3-167.4l116.1-115.4c2-2 4.4-2.3 5.6-2.3 1.2 0 3.6 0.3 5.6 2.3L850.3 302c2 2 2.3 4.4 2.3 5.6 0 1.2-0.3 3.6-2.3 5.6l-116 115.4c-2 2-4.4 2.3-5.6 2.3-1.2 0-3.6-0.3-5.6-2.3L599.8 306.2c-2-2-2.3-4.4-2.3-5.6s0.3-3.7 2.3-5.7zM316.1 588.4c-21.1-20.9-58-20.9-79 0l-15.3 15.2c-15.3 15.3-31.5 42.4-37.5 63.1l-51.1 174.7c-4.3 14.6-2.4 28.2 5.3 38.4 7 9.3 18.2 14.6 30.7 14.6 5 0 10.3-0.8 15.6-2.5l182.4-56.1c20.6-6.3 47.7-22.6 62.9-37.7l9-8.9c10.5-10.5 16.3-24.4 16.3-39.3 0-14.9-5.8-28.8-16.3-39.3l-123-122.2z m89.2 167.2l-9 8.9c-9.6 9.6-30.2 21.9-43.2 25.9L244 823.9l-41.3-49.5 27.6-94.3c3.8-12.9 15.9-33.3 25.4-42.7l15.3-15.2c2-2 4.4-2.3 5.6-2.3 1.2 0 3.6 0.3 5.6 2.3l123 122.3c2 2 2.3 4.4 2.3 5.6 0.1 1.2-0.2 3.6-2.2 5.5zM324 145.9c-21.1-20.9-57.9-20.9-79 0L121.9 268.3c-10.5 10.5-16.3 24.4-16.3 39.3 0 14.9 5.8 28.8 16.3 39.3l560.2 557c10.5 10.5 24.6 16.2 39.5 16.2 14.9 0 29-5.8 39.5-16.2l123.2-122.5c10.5-10.5 16.3-24.4 16.3-39.3 0-14.9-5.8-28.8-16.3-39.3L324 145.9z m526.3 601.8L727.2 870.2c-2 2-4.4 2.3-5.6 2.3-1.2 0-3.6-0.3-5.6-2.3l-560.2-557c-2-2-2.3-4.4-2.3-5.6 0-1.2 0.3-3.6 2.3-5.6l123.1-122.5c2-2 4.4-2.3 5.6-2.3 1.2 0 3.6 0.3 5.6 2.3l16.7 16.6-57.1 56.9c-9.4 9.3-9.4 24.4 0 33.7 4.7 4.6 10.8 7 16.9 7 6.1 0 12.3-2.3 16.9-7l57.2-56.9 27.8 27.7-24.7 24.6c-9.3 9.3-9.3 24.4 0 33.7 4.7 4.6 10.8 7 16.9 7 6.1 0 12.3-2.3 16.9-7l24.7-24.6 27.8 27.7-57.2 56.9c-9.4 9.3-9.4 24.4 0 33.7 4.7 4.6 10.8 7 16.9 7 6.1 0 12.2-2.3 16.9-7l57.2-56.9 27.9 27.7-24.7 24.6c-9.3 9.3-9.3 24.4 0 33.7 4.7 4.7 10.8 7 16.9 7 6.1 0 12.3-2.3 16.9-7l24.7-24.6 27.9 27.7-57.2 56.9c-9.3 9.3-9.3 24.4 0 33.7 4.7 4.6 10.8 7 16.9 7 6.1 0 12.3-2.3 16.9-7l57.2-56.9 27.9 27.7-24.7 24.6c-9.3 9.3-9.3 24.4 0 33.7 4.7 4.7 10.8 7 16.9 7 6.1 0 12.3-2.3 16.9-7l24.7-24.6 27.8 27.7-57.2 56.9c-9.4 9.3-9.4 24.4 0 33.7 4.7 4.7 10.8 7 16.9 7 6.1 0 12.2-2.3 16.9-7l57.2-56.9 27.8 27.7-24.7 24.6c-9.3 9.3-9.3 24.4 0 33.7 4.7 4.6 10.8 7 16.9 7 6.1 0 12.3-2.3 16.9-7l24.7-24.6 27.9 27.7-57.2 56.9c-9.4 9.3-9.4 24.4 0 33.7 4.7 4.6 10.8 7 16.9 7 6.1 0 12.3-2.3 16.9-7l57.2-56.9 15.9 15.9c2 2 2.3 4.4 2.3 5.6s0.2 3.2-1.8 5.2z"
                      fill="#5C99EE"
                    ></path>
                  </g>
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Designers
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Our design team creates unique, functional designs that cater to
                the specific needs of each client, ensuring exceptional quality
                in every project.
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-12 w-12 hover:scale-95 duration-200"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 23 32"
                  enable-background="new 0 0 23 32"
                  xml:space="preserve"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path
                        fill="#808184"
                        d="M11.5,4.727c-3.584,0-6.5,2.916-6.5,6.5s2.916,6.5,6.5,6.5s6.5-2.916,6.5-6.5S15.084,4.727,11.5,4.727z M11.5,16.727c-3.032,0-5.5-2.467-5.5-5.5s2.468-5.5,5.5-5.5s5.5,2.467,5.5,5.5S14.532,16.727,11.5,16.727z"
                      ></path>{" "}
                      <path
                        fill="#808184"
                        d="M21.617,7.226c0.22-0.921,0.116-1.727-0.306-2.349c-0.419-0.617-1.121-1.008-2.045-1.145 c-0.277-1.862-1.624-2.797-3.493-2.35c-0.979-1.637-2.665-1.984-4.273-0.851C9.891-0.602,8.207-0.255,7.227,1.383 C5.354,0.936,4.01,1.871,3.733,3.733C2.81,3.87,2.107,4.261,1.688,4.877C1.267,5.499,1.163,6.305,1.383,7.226 C0.578,7.707,0.072,8.343-0.09,9.084c-0.168,0.769,0.047,1.598,0.622,2.416c-0.575,0.818-0.79,1.647-0.622,2.416 c0.162,0.741,0.668,1.377,1.473,1.858c-0.22,0.921-0.116,1.727,0.306,2.349c0.419,0.617,1.121,1.008,2.045,1.145 c0.276,1.862,1.621,2.796,3.493,2.35c0.982,1.638,2.666,1.985,4.273,0.851c0.638,0.449,1.275,0.677,1.899,0.677 c0.95,0,1.782-0.539,2.374-1.528c1.869,0.446,3.216-0.488,3.493-2.35c0.924-0.137,1.626-0.528,2.045-1.145 c0.422-0.622,0.525-1.427,0.306-2.349c0.805-0.481,1.311-1.117,1.473-1.858c0.168-0.769-0.047-1.598-0.622-2.416 c0.575-0.818,0.79-1.647,0.622-2.416C22.928,8.343,22.422,7.707,21.617,7.226z M21.453,11.817c0.554,0.675,0.781,1.327,0.659,1.886 c-0.148,0.681-0.791,1.123-1.304,1.373c-0.225,0.109-0.334,0.368-0.257,0.605c0.18,0.547,0.313,1.318-0.068,1.88 c-0.379,0.558-1.135,0.717-1.702,0.751c-0.252,0.015-0.453,0.216-0.469,0.468c-0.055,0.889-0.384,1.949-1.642,1.949 c-0.299,0-0.632-0.06-0.99-0.177c-0.239-0.08-0.496,0.031-0.605,0.256c-0.298,0.61-0.83,1.337-1.676,1.337 c-0.483,0-1.03-0.239-1.582-0.692c-0.093-0.076-0.205-0.113-0.317-0.113s-0.225,0.038-0.317,0.113 c-0.552,0.453-1.099,0.691-1.582,0.692c-0.846,0-1.378-0.727-1.676-1.337c-0.11-0.225-0.366-0.335-0.605-0.256 c-0.358,0.118-0.691,0.177-0.99,0.177c-1.258,0-1.587-1.06-1.642-1.949c-0.016-0.252-0.217-0.453-0.469-0.468 c-0.567-0.035-1.323-0.193-1.702-0.751c-0.382-0.562-0.248-1.333-0.068-1.88c0.077-0.237-0.032-0.496-0.257-0.605 c-0.513-0.25-1.155-0.692-1.304-1.373c-0.122-0.559,0.105-1.211,0.659-1.886c0.151-0.184,0.151-0.45,0-0.634 c-0.554-0.675-0.781-1.327-0.659-1.886c0.148-0.681,0.791-1.123,1.304-1.373c0.225-0.109,0.334-0.368,0.257-0.605 c-0.18-0.547-0.313-1.318,0.068-1.88c0.379-0.558,1.135-0.717,1.702-0.751c0.252-0.015,0.453-0.216,0.469-0.468 C4.742,3.33,5.071,2.271,6.329,2.271c0.299,0,0.632,0.06,0.99,0.177c0.238,0.077,0.495-0.032,0.605-0.256 c0.298-0.61,0.83-1.337,1.676-1.337c0.483,0,1.03,0.239,1.582,0.692c0.186,0.151,0.449,0.151,0.635,0 c0.552-0.453,1.099-0.692,1.582-0.692c0.846,0,1.378,0.727,1.676,1.337c0.109,0.224,0.366,0.333,0.605,0.256 c0.358-0.118,0.691-0.177,0.99-0.177c1.258,0,1.587,1.06,1.642,1.949c0.016,0.252,0.217,0.453,0.469,0.468 c0.567,0.035,1.323,0.193,1.702,0.751c0.382,0.562,0.248,1.333,0.068,1.88c-0.077,0.237,0.032,0.496,0.257,0.605 c0.513,0.25,1.155,0.692,1.304,1.373c0.122,0.559-0.105,1.211-0.659,1.886C21.302,11.367,21.302,11.633,21.453,11.817z"
                      ></path>{" "}
                      <path
                        fill="#808184"
                        d="M5,23c-0.276,0-0.5,0.224-0.5,0.5v6.946c0,0.571,0.324,1.088,0.86,1.35 c0.588,0.286,1.262,0.217,1.768-0.179l4.337-3.39l4.378,3.422c0.299,0.234,0.658,0.354,1.023,0.354 c0.252,0,0.517-0.058,0.757-0.175c0.536-0.261,0.878-0.779,0.878-1.35V23.5c0-0.276-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5v6.977 c0,0.272-0.224,0.406-0.317,0.452c-0.189,0.091-0.461,0.122-0.704-0.068L14.5,29.303V25.57c0-0.276-0.224-0.5-0.5-0.5 s-0.5,0.224-0.5,0.5v2.952l-1.712-1.324c-0.18-0.142-0.438-0.142-0.617,0L9.5,28.501V25.57c0-0.276-0.224-0.5-0.5-0.5 s-0.5,0.224-0.5,0.5v3.713l-1.985,1.546c-0.243,0.189-0.524,0.16-0.713,0.068C5.709,30.852,5.5,30.717,5.5,30.446V23.5 C5.5,23.224,5.276,23,5,23z"
                      ></path>{" "}
                      <path
                        fill="#808184"
                        d="M14.297,8.355l-3.458,4.598l-2.15-2.206c-0.194-0.198-0.511-0.201-0.707-0.009 c-0.198,0.193-0.202,0.509-0.01,0.707l2.558,2.513C10.624,14.056,10.753,14,10.888,14c0.011,0,0.021,0,0.032,0 c0.146,0,0.279,0.027,0.367-0.089l3.809-5.01c0.166-0.221,0.122-0.507-0.099-0.672C14.778,8.062,14.463,8.133,14.297,8.355z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Technical Experts
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Our technical experts ensure that all machinery is operating at
                peak performance, allowing us to produce accurate, high-quality
                results.
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
                <svg
                className=" hover:scale-95 duration-200"
                  viewBox="0 0 1024 1024"
                  class="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z"
                      fill="#4CAF50"
                    ></path>
                    <path
                      d="M738.133333 311.466667L448 601.6l-119.466667-119.466667-59.733333 59.733334 179.2 179.2 349.866667-349.866667z"
                      fill="#CCFF90"
                    ></path>
                  </g>
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Quality Control Experts{" "}
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Our quality control team thoroughly inspects each product to
                ensure it meets our high standards before it reaches the client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
