'use client';
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2014",
    event: "Humble Beginnings — Real Tech was founded in 2014 in Vaniyambadi, Tamil Nadu, as a manufacturer and supplier of CNC Wood Router Machines, Plasma Cutting Machines, and more."
  },
  {
    year: "2016",
    event: "Infrastructure Expansion — Established a robust infrastructure with dedicated units for manufacturing, warehousing, quality control, and marketing to meet growing customer demands."
  },
  {
    year: "2018",
    event: "Product Diversification — Expanded our product line to include PVC Vacuum Press Machines, CNC Laser Cutting Machines, and CNC Stone Engraving Machines, catering to diverse industrial needs."
  },
  {
    year: "2020",
    event: "Customer-Centric Growth — Introduced customized CNC solutions and continued to prioritize simple operation, energy efficiency, and low maintenance in every machine."
  },
  {
    year: "2023",
    event: "Reputation & Reach — Gained recognition across Tamil Nadu and beyond as a trusted name for industrial CNC machinery, supported by experienced leadership and advanced technology."
  },
  {
    year: "2025",
    event: "Vision Forward — With over a decade of excellence, we aim to empower the future of manufacturing through reliable, precise, and innovative CNC solutions tailored to customer success."
  }
];

export default function TimelineSection() {
  return (
    <section className="py-24 bg-gray-50 px-6 md:px-20">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-16">
        Our Journey
      </h2>

      <div className="relative max-w-5xl mx-auto before:content-[''] before:absolute before:left-1/2 before:top-0 before:w-1 before:h-full before:bg-green-300 before:transform before:-translate-x-1/2">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.10 }}
            className={`relative mb-12 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full z-10 border-4 border-white shadow-lg" />

            {/* Card */}
            <div className={`md:w-1/2 p-6 bg-white rounded-xl shadow-lg z-20 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
              <h3 className="text-green-600 text-xl font-bold mb-2">{item.year}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{item.event}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
