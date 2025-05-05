"use client";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2001",
    event: "ShopSabre CNC began its journey with a bold mission: to offer industrial-quality CNC at an affordable price. Born in a garage with determination and ingenuity."
  },
  {
    year: "2005",
    event: "Released its first full-size industrial CNC router, redefining what small businesses could expect from their machines."
  },
  {
    year: "2011",
    event: "Moved into a new state-of-the-art facility to keep up with rapidly growing demand and to expand production capacity."
  },
  {
    year: "2018",
    event: "Unveiled next-gen CNC solutions with high-speed automation, marking a leap in reliability and performance."
  },
  {
    year: "2024",
    event: "Celebrating over two decades of excellence, now serving 40+ countries with thousands of machines built in America."
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
            transition={{ duration: 0.6, delay: index * 0.15 }}
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
