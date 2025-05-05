// components/InnovativeEdgeSection.js
"use client";
import { motion } from "framer-motion";

const innovations = [
  {
    title: "Next-Gen Technology",
    detail:
      "Our Pro Series machines integrate automation, multi-zone vacuum tables, and rigid gantry systems — bringing industrial performance to every shop.",
  },
  {
    title: "Designed for the Real World",
    detail:
      "Each ShopSabre CNC is built based on real-world application needs — not trends. Our designs address daily challenges faced by fabricators and creators.",
  },
  {
    title: "Unmatched Service",
    detail:
      "We back every machine with American-based support, expert guidance, and training to keep your operations running at full speed.",
  },
];

export default function InnovativeEdgeSection() {
  return (
    <section className="relative py-20 px-6 md:px-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          Innovation That Powers Performance
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {innovations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white text-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/images/product_images/image4.jpg')] opacity-10 bg-cover bg-center z-0" />
    </section>
  );
}
