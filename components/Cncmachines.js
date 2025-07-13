import Image from "next/image";
import React, { useState } from "react";

const cncMachines = [
  {
    title: "CNC ROUTERS",
    models: "4 MODELS",
    price: "STARTING AT Rs. 3,80,000",
    application: "CNC ROUTER APPLICATIONS",
    imgSrc: "/product_images/CNC Router1_servo double head.png", // Replace with actual image path
    links: [
      { text: "All CNC Routers", href: "/product" },
      { text: "Get a Quote", href: "https://wa.me/918754753223" },
    ],
  },
  {
    title: "CNC PLASMAS",
    models: "1 MODEL",
    price: "STARTING AT Rs. 6,00,000",

    application: "ALL CNC PLASMA APPLICATIONS",
    imgSrc: "/product_images/cnc plasma.jpg",
    links: [
      { text: "All CNC Plasma", href: "/product" },
      { text: "Get a Quote", href: "https://wa.me/918754753223" },
    ],
  },
  {
    title: "CNC LASERS",
    models: "1 MODEL",
    price: "STARTING AT Rs. 21,000,00",

    application: "ALL CNC LASER APPLICATIONS",
    imgSrc: "/product_images/RT fiber laser.png",
    links: [
      { text: "All CNC Lasers", href: "/product" },
      { text: "Get a Quote", href: "https://wa.me/918754753223" },
    ],
  },
  {
    title: "UPVC MACHINES",
    models: "6 MODELS",
    price: "STARTING AT Rs. 2,30,000",
    application: "CNC ROUTER APPLICATIONS",
    imgSrc: "/product_images/upvc front.png", // Replace with actual image path
    links: [
      { text: "All CNC Routers", href: "/product" },
      { text: "Get a Quote", href: "https://wa.me/918754753223" },
    ],
  },
];

export default function CncMachines() {
  const [showServices, setShowServices] = useState(false);
  return (
    <section className="bg-white py-10 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        OUR CNC MACHINES
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {cncMachines.map((machine, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden p-6 flex flex-col"
            style={{ boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.15)" }}
          >
            {/* Image */}
            <div className="relative w-full h-64">
              <Image
                src={machine.imgSrc}
                alt={machine.title}
                layout="fill"
                objectFit="contain"
              />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mt-4">{machine.title}</h3>
            <p className="text-gray-600 text-sm">{machine.models}</p>
            <p className="text-gray-900 font-semibold text-sm">
              {machine.price}
            </p>

            {/* Links */}
            <div className="mt-4 flex justify-between text-blue-600 text-sm font-medium">
              {machine.links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="flex items-center space-x-1"
                >
                  <span>{link.text}</span> <span>→</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* View Our Services Button */}
      <div className="flex justify-center mt-12 w-full px-4">
        {!showServices ? (
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              setShowServices(true);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 sm:px-8 sm:py-4 rounded-lg transition-all text-base sm:text-lg shadow-md"
          >
            View Our Services →
          </a>
        ) : (
          <div className="w-full max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              Our Services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service 1 */}
              <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                <img
                  src="/product_images/Customized CNC.png"
                  alt="Customized size of CNC Machine"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold">Customized size of CNC Machine</h3>
              </div>

              {/* Service 2 */}
              <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                <img
                  src="/product_images/software training.jpg"
                  alt="Software Training"
                  className="w-full h-40 object-fill rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold">
                 Software Training 
                </h3>
              </div>

              {/* Service 3 */}
              <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                <img
                  src="/product_images/CNC tools.jpg"
                  alt="CNC tool and Spare Retail"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold">CNC tool and Spare Retail</h3>
              </div>

              {/* Service 4 */}
              <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                <img
                  src="/product_images/cnc-wood-turning-lathe-machine.webp"
                  alt="CNC machine maintenance and Service"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold">CNC machine maintenance and Service</h3>
              </div>

              {/* Service 5 */}
              <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                <img
                  src="/product_images/CNC import and Export.png"
                  alt="CNC-Import and Export"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold">CNC-Import and Export</h3>
              </div>
            </div>

            {/* Go Back Button */}
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setShowServices(false)}
                className="bg-gray-500 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg transition-all"
              >
                ← Go Back
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
