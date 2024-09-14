/* eslint-disable no-unused-vars */
import React from "react";

const MSCSWorks = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          MS and CS Works
        </h2>
        <p className="mt-4 text-center text-gray-600 text-lg">
          High-quality mild steel (MS) and carbon steel (CS) fabrication
          services, focused on precision and durability.
        </p>

        {/* MS and CS Works Details */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-900">
              Our Expertise in MS and CS Works
            </h3>
            <p className="text-gray-600">
              At Advanced CNC Works, we specialize in the fabrication and
              processing of mild steel and carbon steel. Our skilled team uses
              advanced CNC machinery to ensure precise cuts, bends, and welds
              that meet the highest industry standards.
            </p>
            <p className="text-gray-600">
              Whether you need custom components, structural fabrication, or
              intricate designs, we provide solutions tailored to your specific
              requirements. Our MS and CS works are widely used in construction,
              manufacturing, and industrial sectors, providing both strength and
              flexibility.
            </p>
            <p className="text-gray-600">
              We offer:
              <ul className="list-disc ml-6 mt-2">
                <li>Mild Steel (MS) structural fabrication</li>
                <li>Carbon Steel (CS) fabrication and processing</li>
                <li>Custom metal works for industrial applications</li>
                <li>High-precision CNC cutting, welding, and bending</li>
              </ul>
            </p>
          </div>

          {/* Image Section */}
          <div>
            <img
              src="https://imgs.search.brave.com/_TEbUlyzX860jIEAs6T4HCfhrG2AvoxjbKy8CvlfNmw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzU3LzUzLzMy/LzM2MF9GXzU3NTMz/MjAzX0dWakdPSFo3/WE1BSGJJbjh3TTMz/a3BLbjFxdVhGQ2tN/LmpwZw"
              alt="MS Works"
              className="w-full h-64 object-cover rounded-lg hover:scale-95 duration-300 shadow-lg mb-8"
            />
            <img
              src="https://imgs.search.brave.com/GHPfpxH7LJFxpTvPABMk0rtsmIRoVWgm11QPQVFb9_I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zaHJl/ZWppc3RlZWxjb3Jw/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wNi8xMS0x/LmpwZw"
              alt="CS Works"
              className="w-full h-64 object-cover rounded-lg hover:scale-95 duration-300 shadow-lg"
            />
          </div>
        </div>

        {/* Additional Images Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <img
            src="https://imgs.search.brave.com/99OLIRhsTCpJgnl3gQxyvvPa_6Qk5oT-JhHxS5uFP4w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTIx/ODI3ODQ3L3Bob3Rv/L3dlbGRpbmctc3Rl/ZWwuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUVYcFRBc1lE/UEJHb18xd09OOVlT/ZUZkRWJWcWR6Tlpk/aHl5anM0ZEo2Szg9"
            alt="Steel Fabrication"
            className="w-full h-64 object-cover rounded-lg hover:scale-95 duration-300 shadow-lg"
          />
          <img
            src="https://imgs.search.brave.com/ScDiC2yygRm7GRM_n37KeuIt7ZwfR27oy4xb3-fmIZQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc4/Mzc1ODM2L3Bob3Rv/L3N0ZWVsd29yay1w/bGFua3MtY29ubmVj/dGVkLWluLWxpbmVz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1oNThXX3AwbmJH/MVNwTUl2N0cyUy1u/MURjQ251Tm5neTZY/QWNoWnNDcXRvPQ"
            alt="Structural Works"
            className="w-full h-64 object-cover rounded-lg hover:scale-95 duration-300 shadow-lg"
          />
          <img
            src="https://imgs.search.brave.com/AtcFcrA1ZcAvhC6XHiwqarahvkQgXbQcvWS7emK6L28/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzVh/NGZiMTEzYThiMmIw/NDA4MDczODQ4Zi8x/NTE1NDQ1MzM3NTI0/LTNNSUtNV0M3RzdV/VDVWNE1MUkREL05Z/QytXZWxkZXIrV2Vs/ZGluZytNZXRhbEZh/YnJpY2F0aW9uLmpw/Zw"
            alt="Custom Metal Works"
            className="w-full h-64 object-cover rounded-lg hover:scale-95 duration-300 shadow-lg"
          />
        </div>

        {/* Conclusion Section */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center text-blue-900">
            Why Choose Our MS and CS Works?
          </h3>
          <p className="mt-4 text-gray-600 text-center">
            Our expertise in MS and CS fabrication is backed by cutting-edge
            technology and decades of experience. We provide durable, precise,
            and cost-effective solutions for projects of all sizes, ensuring
            client satisfaction every time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MSCSWorks;
